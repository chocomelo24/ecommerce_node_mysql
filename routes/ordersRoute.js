const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM orders", (err, result) => {
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
    const {user_id, amount,	shipping_address, order_email, order_date, order_status} = req.body;
    try {
        con.query(
            //When using the ${}, the content of con.query MUST be in the back tick
            `INSERT INTO orders (user_id, amount,	shipping_address,	order_email,	order_date,	order_status) VALUES ("${user_id}", "${amount}", "${shipping_address}", "${order_email}", "${order_date}", "${order_status}" )`,
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