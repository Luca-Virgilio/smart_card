// version http without engine
const votingController = (req, res) => {
    console.log(req.params.vote);

    res
        .json({ msg: 'vote ' });
};

module.exports = {
    votingController
}