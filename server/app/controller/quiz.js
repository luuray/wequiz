const Controller = require('egg').Controller;

class QuizController extends Controller {
    async begin(shareId) {
        const {ctx} = this;
        const quiz = ctx.service.quiz.getByShareId(shareId);
        if (!quiz) {
            ctx.status = 404;
            ctx.body = {message: "quiz not found"}
        } else {
            ctx.status = 200;
            ctx.body = quiz.toJSON();
        }
    }

}

module.exports = QuizController
