const express = require("express");

const router = express.Router();

const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  addToCart,
} = require("../controllers/shop");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productId", getProduct);

router.get("/cart", getCart);

router.post("/cart", addToCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
