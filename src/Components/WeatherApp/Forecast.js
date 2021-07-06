import React from "react";

// import styled from 'styled-components'

// const TicketMaster = styled.img`
// width: calc(100% - 20px);
// height: calc(100% - 20px);
// margin: 10px 10px 0 10px'
// `
const Forecast = ({ forecast }) => {

  const rows = []

  const eventMap = () => {
      console.log(forecast);
    //   console.log(forecast.map((e) => e.temp.max))
    //   console.log(forecast.map((e) => e.temp.min))
    //   console.log(forecast.map((e) => e.weather[0].description))
    // return forecast.map((day, index) => {
    //   return rows.push({
    //     id: index,
    //     col1: day.temp.max,
    //     col2: day.temp.min,
    //     col3: day.weather[0].description,
    //   });
    // });
  };
  return (
    <>
      {eventMap()}
    </>
  );
};

export default Forecast;
