import { message } from "antd";
import { get } from "lodash";

type Message = {
  content?: string;
  duration?: number;
  key?: string;
};

export const messageLoading = (data: Message) => {
  data = {
    content: get(data, "content", "Loading..."),
    duration: get(data, "duration", 10),
    key: data.key,
  };

  message.loading({
    content: get(data, "content", "Loading..."),
    duration: get(data, "duration", 10),
    key: data.key,
  });
};

export const messageSuccess = (data: Message) => {
  message.success({
    content: get(data, "content", "Success"),
    duration: get(data, "duration"),
    key: data.key,
  });
};

export const messageError = (data: Message) => {
  message.error({
    content: get(data, "content", "something went wrong"),
    duration: get(data, "duration", 4),
    key: data.key,
  });
};

export const messageInfo = (data = { content: "", duration: 0, key: "" }) => {
  if (data.content) {
    data = {
      content: data.content,
      duration: data.duration,
      key: data.key,
    };
    message.info(data);
  }
};

export const messageDestroy = (key?: string | number) => {
  if (key) {
    message.destroy(key);
    return;
  }
  message.destroy();
};

export const startTypingMessage = (key: string) => {
  message.open({
    key,
    duration: 200,
    type: "loading",
    content: "Start typing ...",
    className: "custom-class",
    style: {
      position: "fixed",
      top: " 50%",
      left: "50%",
      width: "30em;",
      marginLeft: "-15em",
      border: "1px solid #ccc",
      backgroundColor: "#f3f3f3",
    },
  });
};
