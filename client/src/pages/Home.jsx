import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
    const fetchUsers = async () => {
        try {
          const response = await fetch('http://localhost:5555/api/users', {
            method: 'GET', // Specify the request method, GET is default
            credentials: 'include', // Include credentials  
        });
      
          if (!response.ok) {
            // Handle the case where the response status is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log(data); // Do something with the data
      
        } catch (error) {
          console.error('Fetch error:', error); // Handle errors
        }
      };
  useEffect(()=>{
 
    fetchUsers()
  },[])
  return (
    <div>Home</div>
  )
}

export default Home