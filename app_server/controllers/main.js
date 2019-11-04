const homepageController = (req, res) => {
    res.render('index', {
        title: 'e-voting System',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus perspiciatis consequatur, odit hic voluptas molestias, cum officia facere doloribus voluptatem velit ratione explicabo fugit nesciunt repellendus dolor necessitatibus culpa blanditiis.'
    }
    )
};

const loginController = (req, res) => {
    res.render('login',
        {
            title: 'e-voting System',
            description: 'Tutti i dati ramaranno'
        })
};

const resultController = (req, res) => {
    res.render('result',
        {title: 'e-voting System'})
};

const questionController = (req, res) => {
    res.render('question',
        {title: 'e-voting System'})
};


module.exports = {
    homepageController,
    loginController,
    resultController,
    questionController
}