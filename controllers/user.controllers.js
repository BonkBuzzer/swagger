const decodeTokens = async (req, res) => {
    const { a, b, c } = req.body
    if (!a || !b || !c)
        return res.status(401).json({ message: " a , b and c not provided" })
    return res
        .status(200)
        .json({ message: "success" })
}

module.exports = { decodeTokens }