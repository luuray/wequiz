const Controller = require('egg').Controller;

class PassportController extends Controller {
    async signIn() {
        const {ctx} = this;
        await ctx.render('passport/signin.tpl')
    }

    async failCallback() {
        const {ctx} = this;
        ctx.status = 401;
        ctx.body = {"message": ctx.query.msg || ''};
    }

    async signUp() {
    }

    async POST_signUp() {
    }

    async signOut() {
    }

    async profile() {
        const {ctx} = this;
        ctx.body = JSON.stringify(ctx.user)
    }
}

module.exports = PassportController
