const express = require('express')
const app = express()
const task_condition = require("./lib/query-array")

app.use(express.urlencoded({ extended: true }))

app.get("/task1", (req, res) => {
    let key1 = req.query.key1
    let key2 = req.query.key2

    let result = task_condition.task1(key1, key2)

    return res.send(result)
})

app.post("/task4", (req, res) => {
    let { name, email } = req.body
    let result = task_condition.task2(name, email)

    return res.send(result)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
