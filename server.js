const express = require("express");
const server = express();
const PORT = 9321;

server.listen(PORT, () => console.log(`SERVER PORT IS ${PORT}`))

server.get("/", (req, res) => {
    res.send({
        ok: true,
        code: 200,
        message: "Salom dunyo"
    })
})