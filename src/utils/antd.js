import { message } from "antd";
import { get } from "lodash";

export const messageLoading = (data = {}) => {

    data = {
        content: get(data, 'content', 'Loading...'),
        duration: get(data, 'duration', 10),
        key: data.key
    };

    message.loading(data);
}

export const messageSuccess = (data = {}) => {
    data = {
        content: get(data, 'content', 'Success'),
        duration: get(data, 'duration'),
        key: data.key
    };
    message.success(data);
}

export const messageError = (data = {}) => {
    data = {
        content: get(data, 'content', 'something went wrong'),
        duration: get(data, 'duration'),
        key: data.key
    };
    message.error(data);
}

export const messageInfo = (data = {}) => {

    if(data.content) {
        data = {
            content: data.content,
            duration: data.duration,
            key: data.key
        };
        message.info(data);
    }
}


export const messageDestroy = () => {
    message.destroy();
}