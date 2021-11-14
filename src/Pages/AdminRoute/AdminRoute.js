import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';


const AdminRoute = ({children , ...rest}) => {
    const {user, isLoading, admin} = useAuth()
    // console.log(isLoading,user.email)
    
    if(isLoading){
        // console.log(user.email)
        return <CircularProgress />
    }
    console.log(isLoading)
    return (
       <Route
       {...rest}
        render = { ({location}) => 
            user.email & admin? children : <Redirect
            to = {
                {
                    pathname : "/",
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

export default AdminRoute;