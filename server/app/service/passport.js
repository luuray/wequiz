const Service = require('egg').Service;
const bcrypt = require('bcrypt');

class PassportService extends Service {
    async signIn(account, password) {
        const user = await this.ctx.model.User.findOne({
            where: {
                account: account
            }
        })
        if (user != null) {
            if (bcrypt.compareSync(password, user.password)) {
                let user_old = user.get({clone: true});
                user.last_sign = new Date();
                user.save();

                return user_old;
            }
        }

        return null;
    }

    async findById(id) {
        return this.ctx.model.User.findByPk(id);
    }
}

module.exports = PassportService;
