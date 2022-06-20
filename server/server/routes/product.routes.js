const ProductController = require("../controller/product.controller");

module.exports = function(app){
  app.get("/api/products/", ProductController.findAllProducts);
  app.get("/api/products/:id", ProductController.findOneSingleProduct);
  app.post("/api/products/new", ProductController.createNewProduct);
  app.put("/api/products/update/:id", ProductController.updateExistingProduct);
  app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
};
