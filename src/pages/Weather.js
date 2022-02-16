import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import WeatherCard from '../component/WeatherCard';
import WeatherCard1 from '../component/WeatherCard1';
import {WeatherContext} from '../context/WeatherContext';

const Weather = () => {
    // const [weather, setWeather] = React.useState('Lagos');
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [ input, setInput ] = React.useState('Lagos');

const { weather, setWeather } = React.useContext(WeatherContext);
console.log('weather context', weather);
    
    const fetchWeather = () => {
        // e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input} &appid=677b0f602f20d710754ced87f9e9bd49`)
        .then(response => response.json())
        .then(data => {
            if(data.cod === "404"){
                swal('City not found', 'Please try again', 'error');
                return
            }
          
                setData(data);
                // setWeather(data);
                setWeather([...weather, data]);
                weather.push(data);
                toast.success('Success');
                setIsLoading(false);
                console.log('All data', data);
            
        }).catch(error => {
            console.log(error);
        }
        )
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        // fetchWeather();
    }

    
    useEffect(() => {
    fetchWeather();
    }, []);


      const temp = (data.main?.temp - 273.15).toFixed(2) || 0;
      const temp_min = (data.main?.temp_min - 273.15).toFixed(2) || 0;
      const temp_max = (data.main?.temp_max - 273.15).toFixed(2) || 0;
  
      let icon ;
      if(data?.weather?.[0]?.main === 'Clear'){
            icon = 'fa-sun';
        }else if(data?.weather?.[0]?.main === 'Rain'){
            icon = 'fa-cloud-rain';
        }else if(data?.weather?.[0]?.main === 'Clouds'){
            icon = 'fa-cloud';
        }else if(data?.weather?.[0]?.main === 'Snow'){
            icon = 'fa-snowflake';
        }else if(data?.weather?.[0]?.main === 'Drizzle'){
            icon = 'fa-cloud-sun-rain';
        }else if(data?.weather?.[0]?.main === 'Thunderstorm'){
            icon = 'fa-bolt';
        }else if(data?.weather?.[0]?.main === 'Mist'){
            icon = 'fa-smog';
        }else if(data?.weather?.[0]?.main === 'Haze'){
            icon = 'fa-smog';
        }else if(data?.weather?.[0]?.main === 'Fog'){
            icon = 'fa-smog';}



    return (
        
        
        <div>
            {
                data.base === 'stations'? (
            
    
                <div className='container'>
                <div className='row' >
                    <WeatherCard 
                        name={data.name+ ' ' + data.sys.country}
                        temp={temp} 
                        input={input}
                        setInput={setInput}
                        handleChange={handleChange}
                        handleSearch={fetchWeather}
                        temp_min={temp_min}
                        temp_max={temp_max}
                        icon={icon}
                        mainIcon={data?.weather[0]?.main}
                  

                    />
                </div>
                <div className='row' >
                    {
                        isLoading ? (
                            <div className='loading'>
                                <h1>Loading...</h1>
                            </div>
                        ) : (
                            
                           weather?.map(item => (
                                <div                             >
                               <WeatherCard1
                                   key={item.id}
                                   name={item.name}
                                   temp={temp}
                                   temp_min={item.temp_min}
                                   temp_max={item.temp_max}
                                   icon={item.icon}
                                   mainIcon={item?.weather[0]?.main}
                                 
                               />
                                 </div>
                            ))
                         
                        )

                    }
                </div>
            </div>
            ) : (
                        <div class="input-group mb-4 w-75 mx-auto">
                            <input type="text" class="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" minLength={1} name='input' value={input} onChange={handleChange} />
                            <button type='button' className="input-group-text" id="basic-addon2" onClick={fetchWeather} > <i className='fas fa-search' ></i> </button>
                        </div>
            )
        }
        </div>
    

    );
}

export default Weather;
