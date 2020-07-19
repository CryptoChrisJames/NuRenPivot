import config from "../../config.js";

const getApiURL = () => {
    return config.currentSecurity() + config.currentEnvAPI() + '/';
}

const getContent = (content) => {
    return getApiURL() + content;
}

export default {
    getApiURL,
    getContent,
}