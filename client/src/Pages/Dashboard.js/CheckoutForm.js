import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [tnxId, setTnxId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const { _id, price, productName, email } = order;

  useEffect(() => {
    fetch(`https://motorbike-fragments.onrender.com/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    if (processing) {
      return <Loading></Loading>;
    }
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: productName,
            email: email,
          },
        },
      }
    );
    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTnxId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congratulations!!!");
      const payment = {
        orderId: _id,
        tnxId: paymentIntent.id,
        status: false,
      };
      fetch(`https://motorbike-fragments.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-accent btn-sm my-4"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="bg-red-300 rounded p-1">{cardError}</p>}
      {success && (
        <p className="bg-slate-300 rounded p-1 ">
          {success} <br></br>
          <span>TnxId: {tnxId}</span>{" "}
        </p>
      )}
      {success && (
        <button
          className="btn btn-accent btn-sm"
          onClick={() => navigate("/dashboard/order")}
        >
          My Orders
        </button>
      )}
    </>
  );
};

export default CheckoutForm;
