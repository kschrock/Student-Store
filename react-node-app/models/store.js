const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {

    static async listItems() {
        // list all items in the items array
        const items = storage.get("products").value()
        return items
      }

      static async listCart() {
        // list all items in the cart array
        const items = storage.get("cart").value()
        return items
      }

    static async fetchItemById(itemId) {
        // fetch a single transaction
        const item = storage
        .get("products")
        .find({ id: Number(itemId) })
        .value()
        return item
      }
      static async fetchItemByIdCart(itemId) {
        // fetch a single transaction
        const item = storage
        .get("cart")
        .find({ id: Number(itemId) })
        .value()
        return item
      }
    static async createItem(item) {
        // create a new item

        if (!item) {
            throw new BadRequestError(`No item sent.`)
        }
        const requiredFields = ["name", "category", "description", "price", "quantity"]
        requiredFields.forEach((field) => {
            if (!item[field] && item[field] !== 0) {
            throw new BadRequestError(`Field: "${field}" is required in transaction`)
            }
        })

        const items = await Store.listItems()
        const itemId = items.length + 1
        item.itemID = item.id
        const newItem = { id: itemId, ...item }

        storage.get("products").push(newItem).write()

        return newItem
        }

        static async deleteItem(givenId) {
            //already checked if item exits before this call.
            //no need to throw error.
            storage.get("products").remove({id: Number(givenId)}).write();

        }

        static async deleteItemFromCart(givenId) {
            //already checked if item exits before this call.
            //no need to throw error.
            storage.get("cart").remove({itemId: Number(givenId)}).write();

        }

        static async addToCart(item) {
            // create a new item
    
            if (!item) {
                throw new BadRequestError(`No item sent.`)
            }
            const requiredFields = ["id", "name", "price", "quantity"]
            requiredFields.forEach((field) => {
                if (!item[field] && item[field] !== 0) {
                throw new BadRequestError(`Field: "${field}" is required in transaction`)
                }
            })
    
             const items = await Store.listCart()
             const itemId = items.length + 1
    
            const newItem = { itemId: itemId, ...item }
    
            storage.get("cart").push(newItem).write()
    
            return newItem
            }

        static async updateQuantity(item) {
            const itemId = item.id
            storage.get("cart").remove({id: Number(itemId)}).write();
            storage.get("cart").push(item).write()
            return item
        }
        
}

module.exports = Store