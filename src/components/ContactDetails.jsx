import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    
    const routes = useParams()
    console.log(routes);
  return (
    <div>ContactDetails {routes.id}</div>
  )
}

export default ContactDetails