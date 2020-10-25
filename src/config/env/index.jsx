import * as devConfig from "./development"
import * as prodConfig from "./production"

const Config = {

    getData() {

        if(process.env.NODE_ENV) {
            return devConfig
        } else {
            return prodConfig
        }
    }

}

export default Config;