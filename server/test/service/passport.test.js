const {app, mock, assert} = require('egg-mock/bootstrap');

describe('passport/sigIn', () => {
    it("should get a user", async () => {
        const ctx = app.mockContext();
        const user = await ctx.service.passport.signIn('user1@test.com', 'password');

        assert(user);
    });
    it("should get none user if password invalid", async () => {
        const ctx = app.mockContext();
        const user = await ctx.service.passport.signIn('user1@test.com', 'invalid-password');

        assert(!user);
    })
})
