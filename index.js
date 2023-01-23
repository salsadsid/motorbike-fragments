const express = require('express');
const cors = require('cors');
require('dotenv').config()
var jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()

app.use(cors())
app.use(express.json())

// Verify JWT Token

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'Unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'Forbidden Access' })
        }
        req.decoded = decoded;
        next();
    });
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.czgg2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()

        // Database Collections

        const partCollection = client.db('motorbike-fragments').collection("parts")
        const bookingCollection = client.db('motorbike-fragments').collection("bookings")
        const userCollection = client.db('motorbike-fragments').collection("users")
        const reviewCollection = client.db('motorbike-fragments').collection("reviews")
        const paymentCollection = client.db('motorbike-fragments').collection("payments")
        const upcomingCollection = client.db('motorbike-fragments').collection("upcoming")

        //Verify Admin
        const verifyAdmin = async (req, res, next) => {
            const requester = req.decoded.email;
            const requesterAccount = await userCollection.findOne({ email: requester })
            if (requesterAccount.role === 'admin') {
                next();
            }
            else {
                return res.status(403).send({ message: 'Forbidden Access' })
            }

        }
        //Payment Api
        app.get('/payment', verifyJWT, async (req, res) => {
            const query = {}
            const result = await paymentCollection.find(query).toArray()
            res.send(result);
        })

        //Parts Api
        app.get('/part', async (req, res) => {
            const query = {};
            const cursor = partCollection.find(query);
            const part = await cursor.toArray();
            res.send(part)
        })
        app.post('/part', verifyJWT, verifyAdmin, async (req, res) => {
            const part = req.body
            const result = await partCollection.insertOne(part);
            res.send(result);
        })
        app.post('/upcoming', async (req, res) => {
            const part = req.body
            console.log(part)
            const result = await upcomingCollection.insertOne(part);
            console.log(result)
            res.send(result);
        })
        app.delete('/part/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const result = await partCollection.deleteOne(filter);
            res.send(result);
        })

        //Review Api

        app.get('/review', async (req, res) => {
            const query = {};
            const cursor = reviewCollection.find(query);
            const reviews = await cursor.toArray();
            res.send(reviews)
        })
        app.post('/review', verifyJWT, async (req, res) => {
            const review = req.body
            const result = await reviewCollection.insertOne(review);
            res.send({ success: true, result });
        })
        //Purchase Api
        app.get('/purchase/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await partCollection.findOne(query)
            res.send(result)
        })
        app.post('/booking', async (req, res) => {
            const booking = req.body;
            const query = { productName: booking.productName, user: booking.email }
            const exists = await bookingCollection.findOne(query);
            if (exists) {
                return res.send({ success: false, booking: exists })
            }
            const result = await bookingCollection.insertOne(booking);
            res.send({ success: true, result });
        })

        //Booking Api
        app.patch('/booking/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const payment = req.body;
            const filter = { _id: ObjectId(id) }
            const updateDoc = {
                $set: {
                    paid: true,
                    tnxId: payment.tnxId,
                    status: false
                },
            };
            const result = await paymentCollection.insertOne(payment)
            const updatedBooking = await bookingCollection.updateOne(filter, updateDoc);
            res.send(updatedBooking)
        })

        //Payment Status Api
        app.patch('/status/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const payment = req.body;
            const filter = { tnxId: id }
            const updateDoc = {
                $set: payment
            };
            const updatedBooking = await bookingCollection.updateOne(filter, updateDoc);
            res.send(updatedBooking)
        })
        app.post('/create-payment-intent', verifyJWT, async (req, res) => {
            const service = req.body;
            const price = service.price;
            const amount = price * 100;
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ['card']
            });
            res.send({ clientSecret: paymentIntent.client_secret })
        })

        //User put api
        app.put('/user/:email', async (req, res) => {
            const email = req.params.email;
            const user = req.body;
            const filter = { email: email };
            const options = { upsert: true };
            const updateDoc = {
                $set: user,
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '365d' })
            res.send({ result, token })
        })
        app.put('/userdetail/:name', async (req, res) => {
            const name = req.params.name;
            const user = req.body;
            const filter = { displayName: name };
            const options = { upsert: true };
            const updateDoc = {
                $set: user,
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send({ success: true, result })
        })
        app.get('/booking/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const booking = await bookingCollection.findOne(query);
            res.send(booking)
        })
        app.get('/booking', verifyJWT, async (req, res) => {
            const user = req.query?.user
            const decodedEmail = req.decoded.email
            if (user === decodedEmail) {
                const query = { email: user }
                const bookings = await bookingCollection.find(query).toArray();
                return res.send(bookings)
            }
            else {
                const query = {}
                const bookings = await bookingCollection.find(query).toArray();
                return res.send(bookings)
            }
        })
        app.delete('/booking/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const result = await bookingCollection.deleteOne(filter);
            res.send(result);
        })
        app.get('/user', verifyJWT, verifyAdmin, async (req, res) => {
            const users = await userCollection.find().toArray()
            res.send(users)
        })
        app.put('/user/admin/:email', verifyJWT, verifyAdmin, async (req, res) => {
            const email = req.params.email;
            const filter = { email: email }
            const updateDoc = {
                $set: { role: 'admin' },
            };
            const result = await userCollection.updateOne(filter, updateDoc);
            return res.send(result)
        })
        app.get('/admin/:email', async (req, res) => {
            const email = req.params.email;
            const user = await userCollection.findOne({ email: email })
            const isAdmin = user.role === 'admin';
            res.send({ admin: isAdmin })
        })
    }
    finally {

    }
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('MotorBike Fragments Running');
})

app.listen(port, () => {
    console.log(`MotorBike Fragments listening on port ${port}`)
})