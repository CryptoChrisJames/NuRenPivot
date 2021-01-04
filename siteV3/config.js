import Config from './config.json';

const currentEnv = () => {
    if(process.env.NUXT_ENV) {
        return process.env.NUXT_ENV;
    } else {
        return 'dev';
    }
};

const currentEnvAPI = () => {
    return Config.env[currentEnv()];
};

const currentSecurity = () => {
    return currentEnv() === 'dev' ? 'http://' : 'https://';
}

export default {
    currentEnv,
    currentEnvAPI,
    currentSecurity,
}