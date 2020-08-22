const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
    app.passport.use(new LocalStrategy({
        passReqToCallback: true,
        usernameField: "account",
        passwordField: "password"
    }, (req, username, password, done) => {
        const user = {
            provider: 'local',
            username,
            password
        };

        app.passport.doVerify(req, user, done);
    }))

    app.passport.verify(async (ctx, user) => {
        return ctx.service.passport.signIn(user.username, user.password);
    });

    app.passport.serializeUser(async (ctx, user) => {
        return {user_id: user.id, account: user.account, last_sign: user.last_sign}
    });

    app.passport.deserializeUser(async (ctx, user) => {
        return user
    });
}
