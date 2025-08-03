import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import DayWeather from "./DayWeather.jsx";
import WeekWeather from "./WeekWeather.jsx";
import {useEffect, useState} from "react";

function App() {
    const vapid = import.meta.env.VITE_API_KEY;

    const [tempFormat, setTempFormat] = useState('celsius');
    const [city, setCity] = useState('London');
    const [toast, setToast] = useState(null);
    const [weatherData, setWeatherData] = useState([])
    const [weeklyData, setWeeklyData] = useState([])

    useEffect(() => {
        if (null !== city) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${vapid}`)
                .then((response) => {
                    if (200 === response.status) {
                        setWeatherData(response.data)
                    }
                })
                .catch((response) => {
                    setToast({
                        title: response.status,
                        message: response.message,
                        type: "error"
                    })
                })
        }
    }, [city]);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${vapid}`)
            .then((response) => {
                if (200 === response.status) {
                    setWeeklyData(response.data.list)
                }
            })
            .catch((response) => {
                setToast({
                    title: response.status,
                    message: response.message,
                    type: "error"
                })
            })
    }, [weatherData]);

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
          <DayWeather weatherData={weatherData} weeklyData={weeklyData} tempFormat={tempFormat}/>
          <WeekWeather weeklyData={weeklyData} tempFormat={tempFormat} />
          <div id="toast-message" className={`d-none toast toast-${toast ? toast.type : 'error'}`}>
              {toast ? <p className="toast-title">{toast.title}</p> : null}
              {toast ? <p>{toast.message}</p> : null}
          </div>
        </div>
    )
}

export default App
