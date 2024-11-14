const getUserById = (req, res) => {
    const { uid } = req.params;
    if (uid)
        return res.status(200).json({ message: `this is uid ${uid}` })
    return res.status(404).json({ message: `uid was not provided.` })
}

module.exports = { getUserById }