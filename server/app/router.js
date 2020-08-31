module.exports = app => {
    const {router, controller} = app;

    router.get('/', controller.index.index)

    //passport
    router.get('/passport', controller.passport.signIn);
    router.post('/passport/signin', app.passport.authenticate('local', {
        successRedirect: '/passport/profile',
        failureRedirect: '/passport/failCallback?msg=invalid account or password'
    }));
    router.get('/passport/failCallback', controller.passport.failCallback);
    router.get('/passport/signup', controller.passport.signUp)
    router.post('/passport/signup', controller.passport.POST_signUp);
    router.get('/passport/signout', controller.passport.signOut);
    router.get('/passport/profile', controller.passport.profile);

    //quiz
    router.get('/quiz/list', controller.quiz.list);
    router.get('/quiz/intro/:shareId', controller.quiz.intro);
    router.post('/quiz/begin', controller.quiz.begin);
    router.post('/quiz/next', controller.quiz.next);
    router.post('/quiz/finish', controller.quiz.finish);
}
