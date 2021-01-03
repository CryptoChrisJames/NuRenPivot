import config from "../config";

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