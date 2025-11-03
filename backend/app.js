import express from "express"
import route from "./routes/info-route.js" 

const app = express();
const port = 3000;
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Backend!!")
})

app.use("/api", route)

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
})