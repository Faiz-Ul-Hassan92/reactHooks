import WindowChecker from './projects/windowSizeTrigger/WindowChecking'
import Home from './projects/Home'
import UsingCustomHook from './projects/useFetch/UsingCustomHook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsingOutsideClick from './projects/useClickOutside/UsingOutsideClick'
import CustomTabs from './projects/tabs/CustomTabs'
import GithubFinder from './projects/githubFinder/GithubFinder'

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/windowChecker" element={<WindowChecker />}></Route>
                <Route path="/fetchHook" element={<UsingCustomHook />} />
                <Route path="/outsideClickHook" element={<UsingOutsideClick />} />
                <Route path="/customTabs" element={<CustomTabs />} />
                <Route path="GithubFinder" element={<GithubFinder />} />
                <Route path="*" element={<div><span>Choose from the available buttons dummy</span></div>} />
            </Routes>
        </BrowserRouter>
    )
}