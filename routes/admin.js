const express = require("express");
const path = require("path");

const {
  getAddProducts,
  postAddProducts,
  getAdminProducts,
} = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", getAddProducts);

router.post("/add-product", postAddProducts);

router.get("/products", getAdminProducts);

module.exports = router;
