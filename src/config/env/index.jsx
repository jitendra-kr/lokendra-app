import * as devConfig from "./development"
import * as prodConfig from "./production"

const Config = {

    getData() {

        if(process.env.NODE_ENV === 'production') {
            return prodConfig
        } else  {
            return devConfig
        }

    }

}

export default Config;