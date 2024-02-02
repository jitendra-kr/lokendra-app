import { useCallback } from "react";

export function PaypalCheckout({
  value,
  currency,
}: {
  value: number;
  currency: string;
}) {
  const createOrder = useCallback(
    (_data: any, actions: any) => {
      console.log(currency, value, _data);
      return actions.order
        .create({
          purchase_units: [
            {
              description: "FirboxTools",
              amount: {
                currency_code: currency ?? "USD",
                value: value,
              },
            },
          ],
        })
        .then((orderID: string) => {
          return orderID;
        });
    },
    [currency, value],
  );

  function onApprove(data: any) {
    console.log("onApprove", data);
    return fetch("/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        const name = orderData.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
      });
  }

  return (
    <div style={{ marginTop: "50px" }} className="row">
      <div className="col">
        <p style={{ textAlign: "center", fontSize: "19px" }}>
          <b>Currency: {currency}</b>
        </p>

        <p style={{ textAlign: "center", fontSize: "19px" }}>
          <b> Amount: {value}</b>
        </p>

        <p style={{ textAlign: "center", color: "darkgreen" }}>
          <b> Thank you for your generous contribution!</b>
        </p>
        <p style={{ textAlign: "center", color: "darkgreen" }}>
          <b>
            Your support is helping us to upkeep the platform's , continuous
            improvement, and paves the way for exciting new features.
          </b>
        </p>
      </div>
    </div>
  );
}
