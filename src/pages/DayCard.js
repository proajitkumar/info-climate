import React from "react";

export default function DayCard(props) {
  return (
    <div className="card col-xl-2 col-lg-2 col-md-4 col-sm-5 col-6 text-dark mb-3 p-1 border-0" style={{minHeight: '300px', minWidth: '20%', background: 'transparent'}}>
      <div className="border-0 rounded-2 hover-shadow-sm cursor-pointer" onClick={()=>{props.daySelection(props.details,props.cityDetails)}} style={{minHeight: '300px', backgroundColor: '#fff'}}>
        <div className="card-header h6 text-center border-0 p-0 pt-2">{new Date(props.day).toGMTString().slice(0,3)}</div>
        {/* <div className="card-header h6 text-center border-0 m-0 p-0">{new Date(props.day).toGMTString().slice(4,16)}</div> */}
        <hr className='text-orange fw-2 mx-auto mt-1' style={{opacity: '1',height: '2px', maxWidth: '35px'}}/>
        <div className="card-body ">
          <div className="text-center">
            <img src={`${props.imageGitUrl}${props.details.weather[0].icon}.png`} alt="" className="mb-3" />
          </div>
            <h5 className=" card-text small m-0">Max Temp <span className="float-end">{props.details.main.temp_max}°C</span></h5>
            <h5 className=" card-text small m-0">Min Temp <span className="float-end">{props.details.main.temp_min}°C</span></h5>
            <h5 className=" card-text small m-0">Humidity <span className="float-end">{props.details.main.humidity}%</span></h5>
            <h5 className=" card-text small m-0">Sunrise <span className="float-end">{new Date(props.cityDetails.sunrise*1000).toString().slice(16, 24)}</span></h5>
            <h5 className=" card-text small m-0">Sunset <span className="float-end">{new Date(props.cityDetails.sunset*1000).toString().slice(16, 24)}</span></h5>
            <h5 className=" card-text small m-0">Latitude <span className="float-end">{props.cityDetails.coord.lat.toString().slice(0,5)}°N</span></h5>
            <h5 className=" card-text small m-0">Longitude <span className="float-end">{props.cityDetails.coord.lon.toString().slice(0,5)}°E</span></h5>
            <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}
