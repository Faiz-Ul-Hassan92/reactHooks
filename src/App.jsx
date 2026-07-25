import WindowChecker from './projects/windowSizeTrigger/WindowChecking'
import Home from './projects/Home'
import UsingCustomHook from './projects/useFetch/UsingCustomHook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsingOutsideClick from './projects/useClickOutside/UsingOutsideClick'
import CustomTabs from './projects/tabs/CustomTabs'
import GithubFinder from './projects/githubFinder/GithubFinder'
import ChangeTheme from './projects/localStorageUsage/ChangeTheme'
import WeatherApp from './projects/weatherApp/WeatherApp'

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/windowChecker" element={<WindowChecker />}></Route>
                <Route path="/fetchHook" element={<UsingCustomHook />} />
                <Route path="/outsideClickHook" element={<UsingOutsideClick />} />
                <Route path="/customTabs" element={<CustomTabs />} />
                <Route path="/githubFinder" element={<GithubFinder />} />
                <Route path="/changeTheme" element={<ChangeTheme />} />
                <Route path="/weather" element={<WeatherApp />} />
                <Route path="*" element={<div><span>Choose from the available buttons dummy</span></div>} />
            </Routes>
        </BrowserRouter>
    )
}