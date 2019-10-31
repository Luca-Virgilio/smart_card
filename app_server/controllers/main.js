const homepageController = (req, res) => {
    res.render('index', { title: 'Express ciao' });
    };

module.exports = {
    homepageController
}