const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()
const cloneDeep = require('lodash.clonedeep')


// list all items
router.get("/list", async (req, res, next) => {
    try {
      const items = await Store.listItems()
      res.status(200).json({ items })
    } catch (err) {
      next(err)
    }
  })

// list item by ID
router.get("/list/:id", async (req, res, next) => {
    try {
        const listId = req.params.id
        const item = await Store.fetchItemById(listId)
        if (!item) {
          throw new NotFoundError("Item not found")
        }
        res.status(200).json({ item })
      } catch (err) {
        next(err)
      }
  })

  // delete new item
router.delete("/delete/:id", async (req, res, next) => {
    try {
        const listId = req.params.id
        const item = await Store.fetchItemById(listId)
         if (!item) {
             throw new NotFoundError("Item not found.")
           }
        Store.deleteItem(listId)
        res.status(200).json("Item "+ listId +" : Deleted Successfully.")
    }catch (err) {
        next(err)
      }
  })
  

  // create new item
router.post("/createItem", async (req, res, next) => {
    try {
       const item = req.body.item
       const newItem = await Store.createItem(item)
       res.status(201).json({ item: newItem })
    } catch (err) {
      next(err)
    }
  })

  
  // add item to cart
router.post("/addToCart/:id/:quantity", async (req, res, next) => {
  try {
     const id = req.params.id
     const item = await Store.fetchItemByIdCart(id)
     const quantity = req.params.quantity
     if (!item) {
      const orginalItem = await Store.fetchItemById(id)
      const item = cloneDeep(orginalItem)
      item.quantity = req.params.quantity
      delete item.image
      delete item.source
      delete item.description
      delete item.category
      const add = await Store.addToCart(item)
    }
    else{
    item.quantity= Number(item.quantity) + Number(quantity)
    await Store.updateQuantity(item)
    }
    
    //console.log(item)
    
     res.status(201).json({ item: item })
  } catch (err) {
    next(err)
  }
})

 // delete item from cart
 router.delete("/cart/delete/:id", async (req, res, next) => {
  try {
    const listId = req.params.id
    const item = await Store.fetchItemByIdCart(listId)
     if (!item) {
         throw new NotFoundError("Item not found.")
       }
    Store.deleteItemFromCart(listId)
    res.status(200).json("Item "+ listId +" : Deleted Successfully.")
}catch (err) {
  next(err)
}
})

  

  module.exports = router