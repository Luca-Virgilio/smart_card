// version http without engine
const votingController = (req, res) => {
    console.log('body:');
    console.log(req.body);

    res
        .json({ msg: 'vote ' });
};

module.exports = {
    votingController
}