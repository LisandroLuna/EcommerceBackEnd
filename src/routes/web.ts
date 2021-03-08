import express from 'express'
import {prodList} from '../data/product'


let viewRouter = express.Router()

viewRouter.get('/vista', (req, res) => {
    res.render('productList', { list: prodList})
})
viewRouter.get('/cargar', (req, res) => {
    res.render('productLoad', { list: prodList})
})

export default viewRouter