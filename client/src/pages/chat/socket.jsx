import io from 'socket.io-client'
// const redisAdapter = require('socket.io-redis');
// io.adapter(redisAdapter({ host: process.env.REACT_APP_BACKEND_DOMAIN }));

const Sk = () => {
  const socket = io.connect(process.env.REACT_APP_BACKEND_DOMAIN)

  const imOn = i => {
    socket.emit('imon', i)
  }
  const heisoff = (users,cb) => {
    socket.on('heisoff', users,cb)
  }
  const heison = (users, cb) => {
    socket.on('heison', users,cb)
  }
  const imOff = (id) => {
    socket.emit('imoff', id)
  }
  const readUsers = (users,cb) => {
    socket.on('getusers', users,cb)
  }
  const ReadMessage = (msg, cb) =>  {
    socket.on('message', msg, cb)
  }
  const myid = () => {
    return socket.id
  }
  const UnSubscribeMessage = () => {
    socket.off('message')
  }

  const WriteMessage = msg => {
    socket.emit('message', msg)
  }

  const unregisterHandler = () => {
    socket.off('message')
  }

  socket.on('error', function (err) {
    console.log('received socket error:')
    console.log(err)
  })

  const ReadIsTyping =  (obj,cb) => {
    socket.on('isTyping', obj, cb)
  }
  const WriteIsTyping = obj => {
    socket.emit('isTyping', obj)
  }
  const join = (chatroomName, cb) => {
    socket.emit('join', chatroomName, cb)
  }
  
  const leave = (chatroomName, cb) => {
    socket.emit('leave', chatroomName, cb)
  }

  const close = () => {
    socket.close(()=>console.log('desconectao'))
  }


  return {
    readUsers,
    join,
    heison,
    heisoff,
    leave,
    close,
    imOn,
    imOff,
    myid,
    UnSubscribeMessage,
    ReadIsTyping,
    WriteIsTyping,
    ReadMessage,
    WriteMessage,
    unregisterHandler
  }
}
export { Sk }