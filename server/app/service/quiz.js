const Service = require('egg').Service;

class QuizService extends Service {
    /**
     * Get Quiz by ID
     * @param id
     * @returns {Promise<any>}
     */
    async getById(id) {
        return await this.ctx.model.quiz.findByPk(id);
    }

    async getByShareId(shareId) {
        return await this.ctx.model.quiz.findOne({
            where: {
                share_id: shareId
            }
        })
    }

    /**
     * Begin a Quiz for User
     * @param id
     * @returns {Promise<void>}
     */
    async begin(id) {

    }
}
