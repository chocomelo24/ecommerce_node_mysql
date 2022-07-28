const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally


const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors

app.get("/", (req, res) => {
    res.json({ msg: "Hello There" });
});

const userRoute = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");
const ordersRouter = require("./routes/ordersRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const order_detailsRoute = require("./routes/order_detailsRoute");
const product_categoriesRoute = require("./routes/product_categoriesRoute");

app.use("/users", userRoute)
app.use("/products", productsRouter)
app.use("/orders", ordersRouter)
app.use("/categories", categoriesRoute)
app.use("/order_details", order_detailsRoute)
app.use("/product_categories", product_categoriesRoute)


app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});