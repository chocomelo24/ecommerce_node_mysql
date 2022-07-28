const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM product_categories", (err, result) => {
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
    const {product_id, category_id} = req.body;
    try {
        con.query(
            //When using the ${}, the content of con.query MUST be in the back tick
            `INSERT INTO product_categories (product_id, category_id) VALUES ("${product_id}", "${category_id}" )`,
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
