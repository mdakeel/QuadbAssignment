// src/components/ShowDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

export const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        console.log('API Response:', data); 
        setShowDetails(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  const handleBookTicket = () => {
    // Navigate to the third page with the showDetails as state
    navigate(`/booking/${id}`, { showDetails });
  };

  if (!showDetails || Object.keys(showDetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-s mx-auto h-screen  md:p-[50px]  md:pb-[70px]  ">
      <div className="flex lg:flex-row flex-col lg:justify-normal justify-center items-center bg-slate-50 shadow-3xl md:p-[50px] pt-6 pb-6 ">
    
        <div className="lg:w-1/3  ">
          <img
            className=" xl:w-[400px] lg:w-[350px] md:w-[300px] w-[220px] xl:h-[550px] lg:h-[500px] md:h-[500px] h-[350px]"
            src={showDetails.image && showDetails.image.original}
            alt={showDetails.name}
          />
        </div>
        <div className="lg:w-2/3 mx-8  md:mt-0 mt-6">
          <h2 className="text-primary md:text-[40px] text-[25px] font-bold ">
            {showDetails.name}
          </h2>
          <p className="text-tartiary md:text-[16px] text-[13px] text-justify mt-3">
            {showDetails.summary}
          </p>
          <div className="md:flex gap-10 space-y-2 mt-8  ">
            <div>
              <div className="detail ">
                <h2>Movie Name</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">{showDetails.name}</p>
              </div>
              <div className="detail  ">
                <h2>Language</h2>
                <span className="">:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.language}
                </p>
              </div>
              <div className="detail">
                <h2>Network:</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.network.name}
                </p>
              </div>
              <div className="detail">
                <h2>Genres</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">{showDetails.genres}</p>
              </div>
              <div className="detail">
                <h2>Official site</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.officialSite}
                </p>
              </div>
            </div>
            <div>
              <div className="detail ">
                <h2>Schedule</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.schedule.days}
                  <span> {showDetails.schedule.time}</span>
                  <span> ({showDetails.runtime})</span>
                </p>
              </div>
              <div className="detail  ">
                <h2>Show Type</h2>
                <span className="">:</span>
                <p className="md:text-[14px] text-[11px]  font-normal">{showDetails.type}</p>
              </div>
              <div className="detail">
                <h2>Rating</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.rating.average}
                </p>
              </div>
              <div className="detail">
                <h2>Country</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.network.country.name}
                </p>
              </div>
              <div className="detail">
                <h2>Country Code</h2>
                <span>:</span>
                <p className="md:text-[14px] text-[11px] font-normal">
                  {showDetails.network.country.code}
                </p>
              </div>
            </div>
          </div>
            <button onClick={handleBookTicket} className="bg-primary mt-8 text-[20px] p-1 px-3 font-semibold text-white rounded hover:bg-secondary transition-all duration-300">
              Book Ticket
            </button>
         
        </div>
 
      </div>
    </div>
  );
};
