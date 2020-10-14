module.exports = function (api) {
    const presets = [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react'
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
    ];
    api.cache(false);
    return {
        presets,
        plugins
    };
};
