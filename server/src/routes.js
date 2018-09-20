const authController = require('./controllers/authController');
const authControllerPolicy = require('./policies/authControllerPolicy')
const songsController = require('./controllers/songsController');

module.exports = (app) => {
    app.post('/register', authControllerPolicy.register, authController.register),
    app.post('/login', authController.login)
    app.get('/songs', songsController.index)
    app.get('/songs/:songId', songsController.show)
    app.post('/songs', songsController.post)
}
