import * as http from "http"
import express from 'express'
import { Server, Socket } from "socket.io"
import handlebars from 'express-handlebars'
import router from "./routes/api"
import viewRouter from "./routes/web"
import {addProd, prodList} from "./data/product"


const app:any = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: './src/views/layouts',
        partialsDir: './src/views/partials'
    })
)

app.set('view engine', 'hbs')
app.set('views', './src/views')
app.use(express.static('./src/public'));

const port = 8080

app.use('/', viewRouter)
app.use('/productos', router)

const server = http.createServer(app)

const io = new Server(server)

server.listen(port, () => {
    console.log('Server listen at port: ' + port)
})
io.on("connection", socket => {
    console.log("Client connected...");
    socket.emit('data', prodList)
    socket.on('update', (newData) => {
        addProd(newData)
        socket.broadcast.emit('data', prodList)
    })
})