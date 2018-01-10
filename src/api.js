import feathers from 'feathers'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'

const socket = io('http://localhost:3030', {transports: ['websocker']})

const api = feathers()
  .configure(hookes())
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))

api.service('/users')
api.service('/messages')

export default api
