import React from 'react';

export default function WeatherCard1({name, temp, temp_min, temp_max, icon, mainIcon }) {
    const date1 = new Date().toDateString();

    return (

        <div className='card-body' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',

        }} >
            <div className="col-md-4 card">
                <div className='card text-white text-center border-0'>
                    <img  src="https://source.unsplash.com/600x600/?nature,water" className="card-img" alt="..." />
                    <div className="card-img-overlay" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className='bg-dark opacity-50 py-3' style={{
                            width: '80%',
                            height: '100%',
                        }} >
                        <h5 className="card-title text-white">{ name }</h5>
                            <p className="card-text lead text-white">{ date1 }</p>
                        <hr/>
                        <i className={`fas ${icon} fa-4x`} ></i>
                            <h1 className='fw-bolder mb-5 text-white'>{ temp }&deg;C</h1>
                            <p className=' lead fw-bolder mb-0 text-white ' > { mainIcon }</p>
                            <p className='lead text-white' >{ temp_min }&deg;C | { temp_max }&deg;  </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
