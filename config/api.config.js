var isPro = process.env.NODE_ENV === 'production'
module.exports = {
    baseURL: isPro ? 'http://47.102.123.133:8080/infintyshop' : '/api'
}