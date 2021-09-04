import React, { Component } from 'react';
import { Button, Container, Input, Table } from 'reactstrap';
import HeaderComp from './components/navbar';
import io from 'socket.io-client'
import Axios from 'axios';

const APIURL = "http://localhost:8000"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messagesRoom: [],
      userCount: 0,
      user: '',
      pesan: '',
      notifRoom: ""
    }
  }

  joinChat = (nsp) => {
    const socket = io(APIURL + nsp)
    this.setState({ nsp })
    socket.emit('JoinChat', { nama: this.state.user })
    socket.on('chat message', msgs => {
      console.log("receive socket:", msgs)
      this.setState({ messages: msgs })
    })
  }

  joinRoom = (nsp, room) => {
    const socket = io(APIURL + nsp)
    socket.emit('JoinRoom', { room, nama: this.state.user })
    socket.on('notifRoom1', notif => {
      console.log('notif', notif)
      this.setState({ notifRoom: notif })
    })

    socket.on('messagesRoom', msgs => {
      this.setState({ messagesRoom: msgs })
    })
  }

  onBtSendMessage = (room) => {
    let nsp = this.state.nsp == "/" ? "default" : "channel"
    Axios.post(APIURL + `/sendMessage?namespace=${nsp}`, {
      room,
      nama: this.state.user,
      message: this.state.pesan
    }).then(res => {
      console.log(res.data)
      alert('Message send ✔')
    }).catch(err => {
      console.log(err)
    })
  }

  renderMessages = () => {
    return this.state.messages.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.nama}</td>
          <td>{item.message}</td>
        </tr>
      )
    })
  }

  renderMessagesRooms = () => {
    return this.state.messagesRoom.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.nama}</td>
          <td>{item.message}</td>
        </tr>
      )
    })
  }



  render() {
    return (
      <Container style={{ width: '50%' }}>
        <HeaderComp />
        <h2>Chat App</h2>
        <Input placeholder="Join Name" onChange={e => this.setState({ user: e.target.value })} />
        <Button onClick={() => this.joinChat('/')}>Join</Button>
        <Button onClick={() => this.joinChat('/channel')}>Join Channel</Button>
        <h4>Global Room</h4>
        <Table>
          <thead>
            <th>Nama</th>
            <th>Pesan</th>
            <th><Button >Clear</Button></th>
          </thead>
          <tbody>
            {this.renderMessages()}
          </tbody>
          <tfoot>
            <td colSpan="2">
              <Input type="textarea" placeholder="Your messages" onChange={e => this.setState({ pesan: e.target.value })} />
            </td>
            <td>
              <Button onClick={() => this.onBtSendMessage(null)}>Send</Button>
            </td>
          </tfoot>
        </Table>
        <div className="d-flex" style={{ justifyContent: 'space-between', width: "84.6%" }}>
          <h4>Room_1</h4>
          <h3>{this.state.notifRoom}</h3>
          <Button outline size="sm" color="primary" onClick={() => this.joinRoom(this.state.nsp, 'Room_1')}>Join Room</Button>
        </div>
        <Table>
          <thead>
            <th>Nama</th>
            <th>Pesan</th>
            <th><Button >Clear</Button></th>
          </thead>
          <tbody>
            {/* render messages room */}
            {this.renderMessagesRooms()}
          </tbody>
          <tfoot>
            <td colSpan="2">
              <Input type="textarea" placeholder="Your messages" onChange={e => this.setState({ pesan: e.target.value })} />
            </td>
            <td>
              <Button onClick={() => this.onBtSendMessage('Room_1')}>Send</Button>
            </td>
          </tfoot>
        </Table>
      </Container>
    );
  }
}

export default App;