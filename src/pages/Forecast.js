import React, {useState, useEffect} from 'react'
import Alert from './Alert';
import DayCard from './DayCard'
import Icon01d from './images/01d.png'

export default function Forecast(props) {
    const imageGitUrl = 'https://raw.githubusercontent.com/proajitkumar/db/main/weather/';
    const [currentData, setCurrentData] = useState(
        {
            name: '',
            weather: {},
            main: {},
            wind: {},
            visibility: '',
            sys: {}
        }
    );

    const [forecastData, setForecastData] = useState(
        {
            city: {},
            list: []
        }
    );

    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(true)
    const getCurrentData = async ()=>{
        const url = `${props.base_url}q=${props.city}&appid=${props.api_key}&units=metric`;
        let json_data = await fetch(url);
        let data = await json_data.json();
        if (data.cod !== '404') {
            setCurrentData(
            {
                ...currentData,
                name:data.name,
                weather:data.weather[0],
                main:data.main,
                wind: data.wind,
                visibility: data.visibility,
                sys: data.sys
            });
            setLoading(false);
        }
        else{
            setLoading(false);
            setAlert(true);
        }
    };

    const getForecastData = async ()=>{
        const url = `${props.forecast_url}q=${props.city}&appid=${props.api_key}&units=metric`;
        let json_data = await fetch(url);
        let data = await json_data.json();
        if (data.cod !== '404') {
            setForecastData({
                ...forecastData,
                city: data.city,
                list: data.list
            });
            setLoading(false);
        }
        else{
            setLoading(false);
            setAlert(true);
        }
    }
    
    useEffect(() => {
        getCurrentData();
        getForecastData();
        // eslint-disable-next-line
    }, [])
    
    const daySelection = (details,cityDetails)=>{
        setCurrentData(
        {
            ...currentData,
            name:cityDetails.name,
            main:details.main,
            wind: details.wind,
            visibility: details.visibility,
            weather:details.weather[0],
        });
    }
    
    return (
        <>
            {!loading && <div className='container-xxl mt-3 m-auto py-2 forecast' >
                {!alert && <div className='m-3 p-2 rounded-3' style={{boxShadow: '0 0 2rem rgba(0,0,0,.25)', backgroundColor: 'rgb(245 245 245)'}}>
                            <div className='row d-flex justify-content-between p-4 pt-0 w-100 ms-0'>
                            <h2 className='text-center text-dark mb-1' style={{fontFamily: 'rubik'}}>{currentData.name} - {currentData.sys.country}</h2> <hr className='text-orange fw-2 mx-auto' style={{opacity: '1',height: '3px', maxWidth: '250px'}}/>
                                <div className="col-lg-12 row d-flex p-0 justify-content-between">
                                    <div className='d-flex col-lg-3 col-lg-3 col-md-3 col-sm-6 flex-column'>
                                        <div className=" w-100 d-flex justify-content-between text-end px-4">
                                            <p className='m-0 mt-2 text-secondary fw-bold'>Tue</p>
                                            <p className='m-0 mt-2 text-secondary fw-bold'>{currentData.weather.main}</p>
                                        </div>
                                        <div className='text-center'>
                                            <img src={`${imageGitUrl}${currentData.weather.icon}.png`} alt="" className='w-50 rounded-circle' />
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <p className='display-1 m-0 text-orange'>{currentData.main.temp}</p>
                                            <span className='fs-5 pt-2'>°C</span>
                                        </div>
                                    </div>
                                    <div className='row col-xl-9 col-lg-9 col-md-9 col-sm-6 col-12 current-details p-0 justify-content-between'>
                                        <div className="card col-lg-3 col-md-3 col-sm-6 px-0 mt-3 col-6 m-0 border-0 bg-transparent" style={{maxHeight: 'unset'}} key={'Humidity'}>
                                            <div className="card-body text-center p-0">
                                                <h6 className="card-subtitle mb-2 text-muted">Humidity</h6>
                                                <h1 className='display-5 position-relative'>{currentData.main.humidity} <span className='fs-4  bottom-0' style={{transform: 'translateY(-16%)'}}>%</span></h1>
                                            </div>
                                        </div>
                                        <div className="card col-lg-3 col-md-3 col-sm-6 px-0 mt-3 col-6 m-0 border-0 bg-transparent" style={{maxHeight: 'unset'}} key={'Wind'}>
                                            <div className="card-body text-center p-0">
                                                <h6 className="card-subtitle mb-2 text-muted">Wind Speed</h6>
                                                <h1 className='display-5 position-relative'>{currentData.wind.speed} <span className='fs-4  bottom-0' style={{transform: 'translateY(-16%)'}}>Km/h</span></h1>
                                            </div>
                                        </div>
                                        <div className="card col-lg-3 col-md-3 col-sm-6 px-0 mt-3 col-6 m-0 border-0 bg-transparent" style={{maxHeight: 'unset'}} key={'Pressure'}>
                                            <div className="card-body text-center p-0">
                                                <h6 className="card-subtitle mb-2 text-muted">Pressure</h6>
                                                <h1 className='display-5 position-relative'>{currentData.main.pressure} <span className='fs-4  bottom-0' style={{transform: 'translateY(-16%)'}}>MB</span></h1>
                                            </div>
                                        </div>
                                        <div className="card col-lg-3 col-md-3 col-sm-6 px-0 mt-3 col-6 m-0 border-0 bg-transparent" style={{maxHeight: 'unset'}} key={'Visibility'}>
                                            <div className="card-body text-center p-0">
                                                <h6 className="card-subtitle mb-2 text-muted">Visibility</h6>
                                                <h1 className='display-5 position-relative'>{currentData.visibility} <span className='fs-4  bottom-0' style={{transform: 'translateY(-16%)'}}>M</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row w-100 m-auto justify-content-center'>
                                {/* {forecastData.list.map((e, i)=>{
                                    if (i===0||i===7||i===15||i===23||i===31) {
                                        return( <DayCard key={i} day={e.dt_txt} details={e} cityDetails={forecastData.city} image_url={props.image_url} daySelection={daySelection}/>
                                            )
                                    }
                                })} */}
                                {forecastData.list.map((e, i)=>{
                                    if (i===0||i===7||i===15||i===23||i===31) {
                                        return( <DayCard key={i} day={e.dt_txt} details={e} cityDetails={forecastData.city} image_url={props.image_url} daySelection={daySelection} imageGitUrl={imageGitUrl}/>
                                            )
                                    }
                                })}
                            </div>
                </div>
                }
                {alert && <Alert errorValue={props.city} />}
            </div>
            }
        </>
    )
}
