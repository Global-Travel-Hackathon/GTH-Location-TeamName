import axios from 'axios';

class TripService {
  constructor() {
    this.trip = axios.create({
      baseURL: process.env.PORT || '4000' ,
      withCredentials: true,
    })
  }
  getAllTrips() {
    return this.trip.get('/em')
    .then(response => response)
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

const tripService = new TripService();
export default tripService;