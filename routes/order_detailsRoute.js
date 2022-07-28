const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM order_details", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.get("/", (req, res) => {
    try{
        res.send({ id: req.params.id});
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});


router.post("/", (req, res) => {
    const {order_id, product_id, price, sku, quantity} = req.body;
    try {
        con.query(
            //When using the ${}, the content of con.query MUST be in the back tick
            `INSERT INTO order_details (order_id, product_id, price, sku, quantity) VALUES ("${order_id}", "${product_id}", "${price}",
            "${sku}", "${quantity}" )`,
            (err, result) => {
              if (err) throw err;
              res.send(result);
            }
          );
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
    } 
});



module.exports = router;
