import { Product } from "../model/product.model.js";

export class ProductManager {
  #listOfProducts;
  constructor() {
    this.#listOfProducts = [];
  }

  addProduct(product) {
    this.#validateInstance(product);
    this.#validateFieldCode(product);
    this.#listOfProducts.push(product);
  }

  getProducts() {
    return [...this.#listOfProducts];
  }

  getProductById(id) {
    const product = this.#listOfProducts.find((p) => p.id === id);
    return product !== undefined ? product : "Not found";
  }

  #validateFieldCode(product) {
    const result = this.#listOfProducts.some((p) => p.equal(product));

    if (result) {
      throw new Error("There is already a product with that code");
    }
  }

  #validateInstance(object) {
    if (!(object instanceof Product)) {
      throw new Error("the value received is not a product");
    }
  }
}
