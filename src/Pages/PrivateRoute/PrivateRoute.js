import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';


const PrivateRoute = ({children , ...rest}) => {
    const {user, isLoading} = useAuth()
    console.log(isLoading,user.email)
    
    if(isLoading){
        console.log(user.email)
        return <CircularProgress />
    }
    console.log(user.email)
    return (
       <Route
       {...rest}
        render = { ({location}) => 
            user.email ? children : <Redirect
            to = {
                {
                    pathname : "/login",
                    state: {from : location}
                }
            }
            >

            </Redirect>

        }

       
       >

       </Route>
    );
};

export default PrivateRoute;