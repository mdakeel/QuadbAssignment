// src/components/booking.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

export const TicketBook = () => {
  const [booking, setBooking] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log('API Response:', data); 
        setBooking(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!booking || Object.keys(booking).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-s mx-auto h-screen  md:p-[50px]  md:pb-[70px]  ">
      <div className="container mx-auto my-8">
      <h2 className="text-3xl text-primary font-bold text-center mb-4">Booking Page</h2>
      <div className="flex justify-center items-center">
        <div className="w-[700px] p-4 rounded-md">
      
          <form >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={booking.name}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Language:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={booking.language}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-primary">
                Date:
              </label>
              <input
                type="date"
                id="name"
                name="name"
                value={booking.name}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="selectedTime" className="block text-sm font-medium text-gray-700">
                Select Time:
              </label>
              <input
                type="time"
                id="selectedTime"
                name="selectedTime"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
    </div>
    </div>
  );
};
