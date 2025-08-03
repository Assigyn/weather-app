import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import DayWeather from "./DayWeather.jsx";
import WeekWeather from "./WeekWeather.jsx";
import {useEffect, useState} from "react";

function App() {
    const vapid = import.meta.env.VITE_API_KEY;
    const [city, setCity] = useState('Helsinki');

   // useEffect(() => {
   //     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid="${vapid}"`)
   //         .then((response) => {
   //             console.log(response)
   //         })
   //         .catch((response) => {
   //             console.log(response.message)
   //         })
   // }, []);

    return (
        <div className="container">
          <SearchBar/>
          <DayWeather />
          <WeekWeather />
        </div>
    )
}

export default App
