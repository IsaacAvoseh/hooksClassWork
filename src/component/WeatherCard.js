import React from 'react';

export default function WeatherCard({name, temp, temp_min, temp_max, icon, mainIcon, input, setInput, handleChange, handleSearch, date}) {
    // let today = new Date();
    const date1 = new Date().toDateString();

    return (
        <div className='card-body' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="col-md-4">
                <div className='card text-white text-center border-0'>
                    <img  src="https://source.unsplash.com/600x900/?nature,water" className="card-img" alt="..." />
                    <div className="card-img-overlay" style={{
                        opacity: '0.7', 
                    }} >
                      
                            <div class="input-group mb-4 w-75 mx-auto">
                                <input type="text" class="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" minLength={1} name='input' value={input} onChange={handleChange} />
                                <button type='button' className="input-group-text bg-success " id="basic-addon2" onClick={handleSearch} > <i className='fas fa-search' ></i> </button>
                            </div>
                    

                        <div className='bg-dark py-3 opacity-10'>
                        <h5 className="card-title text-white">{ name }</h5>
                            <p className="card-text lead text-white">{ date1 }</p>
                        <hr/>
                        <i className={`fas ${icon} fa-4x`} ></i>
                            <h1 className='fw-bolder mb-5 text-white'>{ temp }&deg;C</h1>
                            <p className=' lead fw-bolder mb-0 text-white h1' > { mainIcon }</p>
                            <p className='lead text-white' >{ temp_min }&deg;C | { temp_max }&deg;C </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
