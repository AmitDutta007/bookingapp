import express from 'express'

const app = express()

app.listen(3000, () => {
    console.log("Connected to express !!!");

})

// app.get("/", () => {
//     res.send("Listing to")
// })