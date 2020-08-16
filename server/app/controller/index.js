const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        this.ctx.body = "It Works!"
    }
}

module.exports = IndexController
