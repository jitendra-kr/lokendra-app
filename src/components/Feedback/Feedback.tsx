import { H2Tag } from "../common";

function Feedback() {
  function onSubmit() {}

  return (
    <div id="feedback">
      <H2Tag heading="Feedback"></H2Tag>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input type="text" id="name" name="name"></input>

        <label>Feedback:</label>
        <input type="text" id="feedback" name="name"></input>
        <button name="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
