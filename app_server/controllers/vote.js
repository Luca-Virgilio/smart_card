// version http without engine
const votingController = (req, res) => {
    console.log('body:');
    console.log(req.body.vote);

    res
        .json({ msg: 'vote '+req.body.vote});
};

module.exports = {
    votingController
}