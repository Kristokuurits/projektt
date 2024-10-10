const app = require('express')()
const port = 8080
const swaggerDoc = require("./docs/swagger.json")
const swaggerUi = require("swagger-ui-express")

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get("/", (req, res) => {
    res.send(["Witcher 3", "Cyberpunk 2077"])
})

app.get("/games", (req))


app.listen(port, () => {
    console.log(`API up at : http:/localhost:${port}`)
})

function createId() {
    const max = games.reduce((prev, current) => (prev.id > current.id) ? prev : current, 1)
    return max + 1;
}

app.post("/games", (req, res) => {
    if(!req.body.name || req.body.name.trim().lenght === 0) {
        return res.status(400).send({error: "missing requierd field 'name'"})
    }
    const newPrice = parseFloat(req.body.price)
    game.push({
        id:createId(),
        name:req.body.name,
        price: isNaN(newprice) ? null : newPrice
    }
    )
})