import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import DayWeather from "./DayWeather.jsx";
import WeekWeather from "./WeekWeather.jsx";
import {useEffect, useState} from "react";

function App() {
    const vapid = import.meta.env.VITE_API_KEY;

    const [tempFormat, setTempFormat] = useState('celsius');
    const [city, setCity] = useState('Helsinki');
    const [toast, setToast] = useState(null);

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
        if (null !== toast) {
            document.getElementById('toast-message').classList.remove('d-none');

            const timer = setTimeout(() => {
                document.getElementById('toast-message').classList.add('d-none');
            }, 5000)

            return () => clearTimeout(timer);
        }
    }, [toast])

    return (
        <div className="container">
          <SearchBar setCity={setCity} tempFormat={tempFormat} setTempFormat={setTempFormat}/>
          <DayWeather />
          <WeekWeather />
          <div id="toast-message" className={`d-none toast toast-${toast ? toast.type : 'error'}`}>
              {toast ? <p className="toast-title">{toast.title}</p> : null}
              {toast ? <p>{toast.message}</p> : null}
          </div>
        </div>
    )
}

export default App
