const Controller = require('egg').Controller;

class QuizController extends Controller {
    async intro() {
        const {ctx} = this;
        const quiz = await ctx.service.quiz.getByShareId(ctx.params.shareId);
        if (!quiz) {
            ctx.status = 404;
            ctx.body = {message: "invalid share_id"}
        } else {
            ctx.status = 200;
            ctx.body = quiz.toJSON();
        }
    }

    async begin() {
        const {ctx} = this;

        let quiz = await ctx.service.quiz.getByShareId(ctx.request.body.share_id);
        if (!quiz) {
            ctx.status = 404;
            ctx.body = {message: "invalid share_id"}
            return;
        }
        if (quiz.anonymously_answer !== true && ctx.isAuthenticated() === false) {
            ctx.status = 401;
            ctx.body = {message: "quiz required authentication"}

            return;
        }
        try {
            let quizSession = await ctx.service.quiz.begin(
                quiz.id,
                ctx.isAuthenticated() ? ctx.user.user_id : null);

            let question = await ctx.service.quiz.getQuizItem(quiz.id, 1);

            ctx.status = 200;
            ctx.body = {
                message: "success",
                result_id: quizSession.id,
                next: quizSession.has_next,
                item: question
            };
        } catch (e) {
            ctx.status = 500;
            ctx.body = {
                message: e.message
            }
        }
    }

    //下一题
    async next() {
        const {ctx} = this;
        const requestRule = {
            result_id: 'string'
        }

        //validate
        ctx.validate(requestRule);

        const resultSet = await ctx.service.quiz.getResult(ctx.request.body.result_id);
        if (resultSet === null) {
            ctx.status = 404;
            ctx.body = {message: "invalid result_id"}
        } else {
            let item = await ctx.service.quiz.getNextItem(resultSet);

            if (item !== false) {
                ctx.status = 200;
                ctx.body = {
                    message: "success",
                    result_id: resultSet.id,
                    next: resultSet.has_next,
                    item: item
                };
            } else {
                //finish
                ctx.redirect(ctx.helper.urlFor('QuizFinish', {result_id: resultSet.id}));
            }
        }
    }

    async finish() {
        const {ctx} = this;
        ctx.body = {
            message: "xxx"
        }
    }

    async list() {
        const {ctx} = this;

        let result = await ctx.service.quiz.list(
            ctx.query.offset || 0,
            ctx.query.limit || 20,
            ctx.isAuthenticated() ? ctx.user.user_id : null);

        result.items.forEach((ele, idx) => {
            delete result.items[idx].id;
        })

        ctx.body = result;
    }
}

module.exports = QuizController
