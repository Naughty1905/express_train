const fs = require('fs');
const path = require('path');
const {v4: v4} = require('uuid');

class Product {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.id = v4();
    }

    async save() {
        const products = await Product.getAll();
        products.push({
            name: this.name,
            price: this.price,
            image: this.image,
            id: this.id,
        })
        return new Promise((res, rej) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err, content) => {
                    if (err) {
                        rej(err);
                    } else {
                        res();
                    }
                }
            );
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                'utf-8',
                (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(data));
                    }
                }
            )
        })
    }

    static async getById(id) {
        const products = await Product.getAll();
        return products.find(el => el.id === id);
    }
}

module.exports = Product;