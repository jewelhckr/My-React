import React from 'react'
import VanNav from '../VanNav'
import { Outlet } from 'react-router-dom'

const VanLayout = () => {
  return (
    <>
        <VanNav/>
        <Outlet/>
    </>
  )
}

export default VanLayout