export class Product {
  #id;
  #title;
  #description;
  #price;
  #thumbnail;
  #code;
  #stock;
  static countProducts = 0;

  constructor(code, title, description, price, thumbnail, stock) {
    this.#setCode(code);
    this.#setTitle(title);
    this.#setDescription(description);
    this.#setPrice(price);
    this.#setThumbnail(thumbnail);
    this.#setStock(stock);
    this.#id = Product.countProducts++;
  }

  /**
   * Metodo privado que establece un codigo a la instancia
   * Si se recibe un valor o es una cadena de caracteres vacia producira una error.
   * @param {string} value
   * @exception Code is required
   * @returns {void} void
   */
  #setCode(value) {
    if (value !== undefined && value.trim() !== "") {
      this.#code = value;
    } else {
      throw new Error("Code is required");
    }
  }

  #setTitle(value) {
    if (value !== undefined && value.trim() !== "") {
      this.#title = value;
    } else {
      throw new Error("Title is required");
    }
  }

  #setDescription(value) {
    if (value !== undefined && value.trim() !== "") {
      this.#description = value;
    } else {
      throw new Error("Description is required");
    }
  }

  #setPrice(value) {
    if (value !== undefined && typeof value === "number") {
      this.#price = value;
    } else {
      throw new Error("Price is required and must be a number");
    }
  }

  #setThumbnail(value) {
    if (value !== undefined && value.trim() !== "") {
      this.#thumbnail = value;
    } else {
      throw new Error("Thumbnail is required");
    }
  }

  #setStock(value) {
    if (value !== undefined && typeof value === "number") {
      this.#stock = value;
    } else {
      throw new Error("Stock is required and must be a number");
    }
  }

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }

  get price() {
    return this.#price;
  }

  get thumbnail() {
    return this.#thumbnail;
  }

  get code() {
    return this.#code;
  }
  get stock() {
    return this.#stock;
  }

  /**
   * Dos productos son iguales si tienen el mismo code
   * @param {Product} object objeto que se envia como argumento para realizar la comparacion con la instancia
   * @returns true o false
   */
  equal(object) {
    return (
      object !== undefined &&
      object instanceof Product &&
      object.code === this.#code
    );
  }
}
