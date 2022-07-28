const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM products", (err, result) => {
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
    const {sku, name, price, weight, descriptions, thumbnail, image, category, create_date, stock} = req.body;
    try {
        con.query(
            //When using the ${}, the content of con.query MUST be in the back tick
            `INSERT INTO products (sku, name, price, weight, descriptions, thumbnail, image, category, create_date, stock) VALUES ("${sku}", "${name}", "${price}", "${weight}", "${descriptions}", "${thumbnail}", "${image}", "${category}", "${create_date}", "${stock}" )`,
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
