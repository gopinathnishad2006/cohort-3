import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router'
import { Auth } from '../context/Auth'

const PublicRoute = () => {
    const {loggedUser}=useContext(Auth)

    if(loggedUser){
      return <Navigate to={"/main"}/>
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
