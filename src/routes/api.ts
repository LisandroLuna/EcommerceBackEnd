import express from 'express'
import {prodList, addProd, putProd, delProd} from '../data/product'

let router = express.Router()

router.get('/listar/', (req, res) => {
    let data:any = prodList
    data.length == 0 ? data = {error: 'no hay productos cargados'} : ''
    res.json(prodList)
})

router.post('/agregar/', (req, res) => {
    let newProd = req.body
    addProd(newProd)
    res.json(newProd)
})

router.get('/listar/:id', (req, res) => {
    let data:any = {error : 'producto no encontrado'}
    let id:any = req.params.id
    prodList.forEach(prod => {
        prod.id == id ? data = prod : ''
    })
    res.json(data)
})

router.put('/actualizar/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    let body = req.body
    putProd(id, body)
    res.json({
        result: 'ok',
        id: req.params.id,
        nuevo: req.body
    })
})

router.delete('/borrar/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    delProd(id)
    res.json({
        result: 'ok',
        id: req.params.id
    })
})

export default router