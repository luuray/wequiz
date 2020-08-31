const Service = require('egg').Service;
const {Op} = require('sequelize');
const {v4: uuid} = require('uuid')

class QuizService extends Service {
    /**
     * Get Quiz by ID
     * @param id
     * @returns {Promise<any>}
     */
    async getById(id) {
        return await this.ctx.model.Quiz.findByPk(id);
    }

    async getByShareId(shareId) {
        return await this.ctx.model.Quiz.findOne({
            where: {
                share_id: shareId
            }
        });
    }

    async getQuizItem(quizId, index = 0) {
        const {ctx} = this;

        return await ctx.model.QuizItem.findOne({
            where: {
                quiz_id: quizId,
                index: index
            }
        })
    }

    /**
     * Begin a Quiz for User
     * @returns {Promise<void>}
     * @param quizId
     * @param userId
     */
    async begin(quizId, userId = null) {
        const {ctx} = this;

        let quiz = await this.getById(quizId);
        if (!quiz) {
            throw new Error('invalid quiz_id');
        }
        return await ctx.model.QuizResult.create({
            quiz_id: quizId,
            owner_id: userId,
            progress: [0, quiz.item_count],
            result: null,
        });
    }

    async list(offset = 0, limit = 20, userId = null) {
        const {ctx} = this;

        let result = {};

        if (!userId) {
            result = await ctx.model.Quiz.findAndCountAll({
                where: {
                    [Op.or]: {
                        available_at: {
                            [Op.or]: {
                                [Op.eq]: null,
                                [Op.lt]: new Date()
                            }
                        }
                    }
                },
                limit,
                offset
            })
        } else {
            result = await ctx.model.Quiz.findAndCountAll({
                where: {
                    [Op.or]: {
                        available_at: {
                            [Op.or]: {
                                [Op.eq]: null,
                                [Op.lt]: new Date()
                            }
                        },
                        owner_id: {
                            [Op.eq]: userId
                        }
                    }
                },
                limit,
                offset
            })
        }

        return {total: result.count, items: result.rows}
    }

}

module.exports = QuizService;
