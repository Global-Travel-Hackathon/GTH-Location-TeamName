import axios from 'axios';

class ApiService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000/api',
      withCredentials: true,
    })
  }

  getAllTrips() {
    return this.trip.get('/em')
    .then(response => response)
  }
  checkchat(users){
    return this.auth.post('/checkchat', {users})
    .then(data => data)
  }
  pushmessage(data){
    return this.auth.post('/pushmessage', data)
    .then(data => data)

  }
  getChat(data){
    return this.auth.post('/getchat', data)
    .then(data => data)
  }
  getAllMyTrips() {
    return this.trip.get(`/me`)
    .then(response => response)
  }

  addOneTrip(newTrip) {
    return this.trip.post('/trip/add', newTrip)
    .then(response => response)
  }

  editOneTrip(id, tripUpdated) {
    return this.trip.put(`/trip/edit/${id}`, tripUpdated)
    .then(response => response)
  }

  deleteOneTrip(id) {
    return this.trip.delete(`/trip/delete/${id}`)
    .then(response => response)
  }
}

const apiService = new ApiService();

export default apiService;