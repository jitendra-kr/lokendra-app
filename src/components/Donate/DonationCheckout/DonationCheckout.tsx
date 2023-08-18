import CurrencyInput from "react-currency-input-field";

import { Button, Modal, Select } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { PaypalCheckout } from "./PaypalCheckout";
import currencyList from "./currencyList";

export function DonationCheckout() {
  const router = useRouter();

  const [value, setValue] = useState<string>("5");
  const [currency, setCurrency] = useState<string>("USD");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancel, setCancel] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "20px solid lightgray",
        marginTop: "50px",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginTop: "200px", marginBottom: "200px" }}>
        <label>
          <b style={{ fontSize: "19px" }}>Enter your donation amount</b>{" "}
        </label>
        <div style={{ marginTop: "10px" }}>
          <CurrencyInput
            style={{
              height: "42px",
              borderColor: "lightgray",
              border: "2px solid lightgray",
              borderRadius: "5px",
              width: "20vw",
            }}
            placeholder="  Enter your donation amount"
            value={value}
            allowNegativeValue={false}
            decimalsLimit={2}
            onValueChange={(value) => {
              if (!value) {
                setValue("");
                return;
              }
              setValue(value);
            }}
          />
          <Select
            showSearch
            defaultValue={currency}
            style={{ width: 100, marginRight: "15px" }}
            size="large"
            onChange={(v) => setCurrency(v)}
            options={currencyList}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "35px",
            }}
          >
            <Button
              size="large"
              style={{ marginRight: "10px" }}
              onClick={() => setCancel(true)}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={showModal}
              disabled={!value || Number(value) <= 0}
            >
              Next
            </Button>
          </div>
        </div>

        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          width="90%"
          style={{ minHeight: "100vh" }}
        >
          <PaypalCheckout value={Number(value)} currency={currency} />
        </Modal>

        <Modal
          okText={"Yes"}
          cancelText="No"
          title={"Are you sure you want to cancel your donation?"}
          open={isCancel}
          onCancel={() => setCancel(false)}
          onOk={() => router.push("/")}
          closable={false}
        >
          <p style={{ marginTop: "30px" }}>
            Your support will make a meaningful impact. Thank you for
            considering a donation.
          </p>
        </Modal>
      </div>
    </div>
  );
}
