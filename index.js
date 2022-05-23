const express = require('express');
const cors = require('cors');
require('dotenv').config()
var jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.czgg2.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect()
        const partCollection = client.db('motorbike-fragments').collection("parts")
        const bookingCollection = client.db('motorbike-fragments').collection("bookings")
        app.get('/part', async (req, res) => {
            const query = {};
            const cursor = partCollection.find(query);
            const part = await cursor.toArray();
            res.send(part)
        })
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