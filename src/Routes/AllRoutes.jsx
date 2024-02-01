import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AllMovies } from '../Components/AllMovies'
import { ShowDetails } from '../Components/ShowDetails'
import { TicketBook } from '../Components/TicketBook'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AllMovies />} />
        <Route path='/details/:id' element={<ShowDetails />} />
        <Route path='/booking/:id' element={<TicketBook />} />
    </Routes>
  )
}
