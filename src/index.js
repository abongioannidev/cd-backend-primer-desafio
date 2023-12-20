import { Product } from "./model/product.model.js";
import { ProductManager } from "./manager/product.manager.js";
import util from "node:util";
const productManager = new ProductManager();

const p1 = new Product("a", "titulo1", "descripcion1", 123, "thumbnail1", 1);
const p2 = new Product("b", "titulo2", "descripcion2", 123, "thumbnail2", 1);
const p3 = new Product("b", "titulo2", "descripcion2", 123, "thumbnail2", 1);
productManager.addProduct(p1);
productManager.addProduct(p2);

try {
  productManager.addProduct(p3);
} catch (error) {
  console.log(error.message);
}

console.log(
  util.inspect(productManager.getProductById(1), {
    depth: null,
    colors: true,
    showHidden: true,
    getters: true,
  })
);
