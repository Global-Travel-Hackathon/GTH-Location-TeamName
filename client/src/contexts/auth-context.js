import React, {useState, useEffect} from 'react';
import authService from '../services/auth-service.js';
export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const[client, setClient] = useState({
    isLoading: true,
    isLoggedIn: false,
    user: {}
  })
  const userSignup = (user) => {
    return authService.signup(user)
  }

  const userCheckToken = (token) => {
    return authService.checktoken(token)
  }

  const userComplete = (user) => {
    return authService.complete(user)
    .then((user) => {
      setClient({
        ...client,
        isLoggedIn: true,
        user: user.data
      })
    })
  }

  const userLogin = (user) => {
    return authService.login(user)
    .then((user) => {
      setClient({
        isLoggedIn: true,
        user: user.data
      })
    }) 
  }

  const userLogout = () => {
    return authService.logout()
    .then(() => {
      setClient({
        ...client,
        isLoggedIn: false,
        user: {}
      })
    })
  }

  useEffect(()=>{
    authService.me()
    .then(user => {
      setClient({
        user,
        isLoggedIn: true,
        isLoading: false,
      })
    })
    .catch(() => {
      setClient({
        isLoggedIn: false,
        user: {},
        isLoading: false,
      })
    })
  },[])

    const {user, isLoggedIn, isLoading} = client;
    return (
      <>
        {isLoading ? <p>Loading...</p> : (
            <AuthContext.Provider value={ 
              {
                user,
                isLoggedIn,
                login: userLogin,
                complete: userComplete,
                signup: userSignup,
                logout: userLogout,
                checktoken: userCheckToken
              }
            }>
              {props.children}
            </AuthContext.Provider>
          )}
      </>
    );
  
}

export default AuthProvider;