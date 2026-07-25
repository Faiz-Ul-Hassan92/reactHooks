import { useState } from "react"
import "./WeatherApp.css"

function Searching({ search, setSearch, handleSearch }) {

    return (
        <div>
            <input value={search} placeholder="Search a place..." onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => handleSearch(search)}>Search</button>
        </div>
    )


}

function GetCurrentDate() {


    return new Date().toLocaleDateString("en-us", {
        weekday: "long",
        month: "short",
        day: "2-digit",
        year: "numeric"
    })
}

function WeatherData({ data }) {
    if (!data) return null;

    return (
        <div className="weather-blob">
            <div className="city-name">
                <h2>
                    {data?.name}, <span>{data?.sys?.country}</span>
                </h2>
            </div>
            <div className="date">
                <span>{GetCurrentDate()}</span>
            </div>
            <div className="temp">{data?.main?.temp}</div>
            <p className="description">
                {data && data.weather && data.weather[0]
                    ? data.weather[0].description
                    : ""}
            </p>
            <div className="weather-info">
                <div className="column">
                    <div>
                        <p className="wind">{data?.wind?.speed}</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="humidity">{data?.main?.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WeatherApp() {

    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)


    const handleSearch = async (search) => {

        try {
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=af79e06b15af2e470b0ee62657ece7ef`)
            const data = await response.json()
            setWeatherData(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (
        <div>
            <Searching search={search} setSearch={setSearch} handleSearch={handleSearch} />
            {loading ? <p>Loading Weather Data....</p> : <WeatherData data={weatherData} />}
        </div>
    )
}