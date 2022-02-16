import React from "react";

export const WeatherContext = React.createContext()

export default function WeatherContextProvider({ children }){
    const [weather, setWeather] = React.useState([])
    console.log('weather context' )

    return (
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    )
}
