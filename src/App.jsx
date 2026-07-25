import WindowChecker from './projects/windowSizeTrigger/WindowChecking'
import Home from './projects/Home'
import UsingCustomHook from './projects/useFetch/UsingCustomHook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsingOutsideClick from './projects/useClickOutside/UsingOutsideClick'
import CustomTabs from './projects/tabs/CustomTabs'
import GithubFinder from './projects/githubFinder/GithubFinder'
import ChangeTheme from './projects/localStorageUsage/ChangeTheme'
import WeatherApp from './projects/weatherApp/WeatherApp'
import FoodRecipe from './projects/foodRecipe/pages/home/FoodRecipe'
import Item from './projects/foodRecipe/pages/detail/Item'
import Favourites from './projects/foodRecipe/pages/favourites/Favourites'
import GlobalState from './projects/foodRecipe/GlobalContext'

export default function App() {

    return (
        <BrowserRouter>
            <GlobalState>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/windowChecker" element={<WindowChecker />}></Route>
                    <Route path="/fetchHook" element={<UsingCustomHook />} />
                    <Route path="/outsideClickHook" element={<UsingOutsideClick />} />
                    <Route path="/customTabs" element={<CustomTabs />} />
                    <Route path="/githubFinder" element={<GithubFinder />} />
                    <Route path="/changeTheme" element={<ChangeTheme />} />
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/foodRecipe" element={<FoodRecipe />} />
                    <Route path="/foodRecipe/:id" element={<Item />} />
                    <Route path="/foodRecipe/favourites" element={<Favourites />} />
                    <Route path="*" element={<div><span>Choose from the available buttons dummy</span></div>} />
                </Routes>
            </GlobalState>
        </BrowserRouter>
    )
}