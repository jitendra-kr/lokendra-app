"use client";
import Modal from "antd/es/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SubmitFeedbackMsg() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function resetForm() {
    (document.getElementById("name") as HTMLFormElement).value = "";
    (document.getElementById("feedbackMsg") as HTMLFormElement).value = "";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    resetForm();
    showModal();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link href={`/`} style={{ fontWeight: "bold" }}>
          Return to home page
        </Link>
      </div>
      <Modal
        title="Thank you for taking the time to share your feedback with us"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        keyboard={false}
        maskClosable={false}
        footer={(_, { OkBtn }) => <OkBtn />}
      >
        <p>
          Your feedback helps a lot in helping us to improve our tools. We
          appreciate your feedback and will thoroughly review it. If you have
          any further thoughts or issues, please do not hesitate to contact us.
          We are here to listen and continuously improve your experience.
        </p>
      </Modal>
    </>
  );
}
