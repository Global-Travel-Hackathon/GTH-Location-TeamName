import React, {useState} from 'react';
import ApiService from '../services/auth-service.js';
export const TripsContext = React.createContext();

const TripsProvider = (props) => {

  const[tripsSate, setTripsState] = useState({
    isLoading: true,
    trips: {}
  })

  const tripsAdd = (trip) => {
    return ApiService.addOneTrip(trip)
    .then(trips => {
      setTripsState({
        ...tripsSate,
        isLoading: false,
        trips: trips.data
      })
    })
  }

    const { trips, isLoading } = tripsSate;
    return (
      <>
        {isLoading ? <p>Loading...</p> : (
            <TripsContext.Provider value={ 
              {
                trips,
                tripsAdd,
              }
            }>
              {props.children}
            </TripsContext.Provider>
          )}
      </>
    );
  
}

export default TripsProvider;