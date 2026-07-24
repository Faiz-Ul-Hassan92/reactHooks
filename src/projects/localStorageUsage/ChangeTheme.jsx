import { useEffect, useState } from "react"

function useLocalStorage(key, defaultValue) {


    const [value, setValue] = useState(() => {
        let currentValue
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (e) {
            console.log(e)
            currentValue = defaultValue
        }


        return currentValue
    })

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value])



    return [value, setValue]


}

export default function ChangeTheme() {

    const [theme, setTheme] = useLocalStorage("theme", "dark")

    const handleChanging = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log(theme)
    }

    return (
        <div>
            <span>Kindly see on the console, i havent worked on css</span>
            <button onClick={handleChanging}>Switch</button>
        </div>
    )
}