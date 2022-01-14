const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize"
const SCOPE = 'user'
const {github} = require('./config')

module.exports = {
    reactStrictMode: true,
    // 根目录
    distDir:'dist',
    // 为每个页面生成缓存验证 http缓存
    generateEtags:true,
    // 页面内容缓存配置
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    // pages目录下 页面后缀
    pageExtensions: ['jsx','js'],
    publicRuntimeConfig: {
        GITHUB_OAUTH_URL,
        OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${github.client_id}&scope=${SCOPE}`
    }
}