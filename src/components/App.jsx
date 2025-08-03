import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import DayWeather from "./DayWeather.jsx";
import WeekWeather from "./WeekWeather.jsx";
import {useEffect, useState} from "react";

function App() {
    const vapid = import.meta.env.VITE_API_KEY;

    const [city, setCity] = useState('Helsinki');
    const [toast, setToast] = useState({
        title: 'Error',
        message: 'Error',
        type: 'error'
    });

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid="${vapid}"`)
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch((response) => {
    //             setToast({
    //                 title: response.status,
    //                 message: response.message,
    //                 type: "error"
    //             })
    //         })
    // }, []);

    useEffect(() => {
        document.getElementById('toast-message').classList.remove('d-none');

        const timer = setTimeout(() => {
            document.getElementById('toast-message').classList.add('d-none');
        }, 5000)

        return () => clearTimeout(timer);
    }, [toast])

    return (
        <div className="container">
          <SearchBar/>
          <DayWeather />
          <WeekWeather />
          <div id="toast-message" className={`d-none toast toast-${toast.type}`}>
              <p className="toast-title">{toast.title}</p>
              <p>{toast.message}</p>
          </div>
        </div>
    )
}

export default App
