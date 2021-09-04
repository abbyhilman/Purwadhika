const http = require('http')
const express = require('express')
const app = express()
const socketIO = require('socket.io')
const cors = require('cors')
const server = http.createServer(app)

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
// Socket conf
const io = socketIO(server)
let arrMsg = []
let arrChn = []
let arrRoom = []
let usersRoom1 = []
app.io = io
app.arrMsg = arrMsg

app.post('/sendMessage', (req, res) => {
    if (req.query.namespace == "default") {
        if (req.body.room) {
            // untuk mengarahkan pesan kedalam room 
            arrRoom.push(req.body)
            io.in(req.body.room).emit("messagesRoom", arrRoom)
        } else {
            // untuk mengarahkan pesan kedalam channel global
            arrMsg.push(req.body)
            io.emit('chat message', arrMsg)
        }

        res.status(200).send('Send messages success')
    } else if (req.query.namespace == "channel") {
        arrChn.push(req.body)

        channelNsp.emit('chat message', arrChn)
        res.status(200).send(arrMsg)
    }
})

io.on('connection', socket => {
    socket.on('JoinChat', data => {
        console.log("User join :", data)
    })

    socket.on("JoinRoom", data => {
        socket.join(data.room)
        usersRoom1.push({ ...data, id: socket.id })
        io.in(data.room).emit('notifRoom1', `${data.nama} just entered the room`)
    })

    socket.on('disconnect', () => {
        console.log("User disconnect")
    })
})

const channelNsp = io.of('/channel')
channelNsp.on('connection', socket => {
    socket.on('JoinChat', data => {
        console.log("User join channel :", data)
    })

    socket.on('disconnect', () => {
        console.log("User disconnect from channel")
    })
})

server.listen(PORT, () => console.log("Server socket running"))









// io.on('connection', socket => {
//     socket.on('JoinChat', data => {
//         console.log("User join :", data)
//         socket.join('random')
//     })

//     socket.on('disconnect', () => {
//         console.log("User disconnect")
//     })
// })