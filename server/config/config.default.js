const path = require('path')

exports.keys = "abcdefg123456";
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}
exports.sequelize = {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../database/data.sqlite'),
}
exports.validate = {
    convert: true,
    validateRoot: false
}
exports.redis = {
    clients: {
        cache: {
            host: 'localhost',
            port: 6379,
            password: '',
            db: 0
        },
        session: {
            host: 'localhost',
            port: 6379,
            password: '',
            db: 1
        }
    }
}
exports.exports = {
    session: {
        renew: true
    }
}
exports.sessionRedis = {
    name: 'session'
}
