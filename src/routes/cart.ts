import express from 'express'
import {cartList} from '../data/cart'

let cartRouter = express.Router()

cartRouter.get('/listar/:id', (req, res) => {
    res.json(1)
})
cartRouter.get('/listar/', (req, res) => {
    res.json(1)
})
cartRouter.delete('/borrar/:id_producto', (req, res) => {
    res.json(1)
})
cartRouter.post('/agregar/:id_producto', (req, res) => {
    res.json(1)
})

export default cartRouter