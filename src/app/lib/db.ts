import { createClient } from "@vercel/postgres";

export async function saveFeedback(
  name: string,
  feedback: string,
  email: string,
  page: string,
) {
  const client = createClient({});
  await client.connect();
  try {
    await client.sql`INSERT INTO feedbacks (name, feedback, email, page) VALUES (${name}, ${feedback}, ${email}, ${page});`;
    console.log("saved", name, feedback);
  } catch (e) {
    console.error(e);
  } finally {
    await client.end();
  }
}
