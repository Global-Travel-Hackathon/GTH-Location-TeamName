import React, { useState } from 'react';
import withAuth from '../../hoc/withAuth.js';

const CreateTrip = (props) => {
  const [ trip, setTrip ] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    needs: '',
    owner: ''
  })
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.createTrip({trip})
      .then(() => {
        setTrip({
          from: '',
          to: '',
          startDate: '',
          endDate: '',
          needs: '',
          owner: '',
        });
      })
      .catch( error => console.log(error) )
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setTrip({...trip,[name]: value});
  }

    return (
        <form onSubmit={(e)=>handleFormSubmit(e)}>
          <div>
            <label htmlFor='from'>From:</label>
            <label htmlFor=''>To:</label>
          </div>
          <div>
            <input id='from' type='text' name='from' value={trip.from} onChange={(e)=>handleChange(e)}/>
            <input id='to' type='text' name='to' value={trip.to} onChange={(e)=>handleChange(e)}/>
          </div>
          <div>
            <label htmlFor='startDate'>Start date:</label>
            <label htmlFor='endDate'>End date:</label>
          </div>
          <div>
            <input id='startDate' type='date' name='startDate' value={trip.startDate} onChange={(e)=>handleChange(e)}/>
            <input id='endDate' type='date' name='endDate' value={trip.endDate} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
            <label htmlFor='needs'>What's your needs:</label>
            <input id='endDate' type='date' name='endDate' value={trip.endDate} onChange={(e)=>handleChange(e)} />
          </div>
          <input type='submit' value='Add trip' /> 
        </form>
    )
  
}

export default withAuth(CreateTrip);