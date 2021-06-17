const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()


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

  

  module.exports = router