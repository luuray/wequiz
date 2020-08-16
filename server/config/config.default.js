exports.keys = "abcdefg123456";
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}
exports.sequelize = {
    dialect: 'mysql',
    database: 'wequiz',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: ''
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
module.exports = {
    session: {
        renew: true
    }
}
exports.sessionRedis = {
    name: 'session'
}
