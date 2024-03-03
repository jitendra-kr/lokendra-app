import { sql } from "@vercel/postgres";
import { H2Tag } from "../common";
import styles from "./Feedback.module.css";

function Feedback() {
  async function saveFeedback(name: string, feedback: string) {
    "use server";
    try {
      const resp =
        await sql`INSERT INTO feedback (name, feedback) VALUES (${name}, ${feedback});`;
      console.log("rows", resp);
    } catch (e) {
      console.log(e);
    }
  }

  async function onSubmit(data: FormData) {
    "use server";
    let name = "";
    let feedback = "";
    data.forEach((value: FormDataEntryValue, key: string) => {
      if (key === "name") {
        name = value as string;
      }
      if (key === "feedback") {
        feedback = value as string;
      }
      saveFeedback(name, feedback);
    });
  }

  return (
    <div id="feedback" style={{ marginBottom: "30px" }}>
      <H2Tag heading="Your Feedback Matters"></H2Tag>
      <div className={styles["feedback-form"]}>
        <form style={{ padding: "20px" }} action={onSubmit}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input className={styles.input} type="text" name="name" required />

          <label className={styles.label} htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            className={styles.input}
            style={{ height: "150px" }}
            name="feedback"
            required
          ></textarea>
          <input className={styles.button} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Feedback;
