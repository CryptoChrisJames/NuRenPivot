import config from "../../config.js";

const getApiURL = () => {
    return config.currentSecurity() + config.currentEnvAPI() + '/';
}

export default {
    getApiURL,
}