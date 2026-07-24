
import { useState, useLayoutEffect } from "react"



export default function WindowChecker() {

    let [size, setSize] = useState({ width: 0, height: 0 })

    const helper = function () {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }


    useLayoutEffect(() => {

        helper()
        window.addEventListener("resize", helper)


        return () => window.removeEventListener("resize", helper)

    }
        , [])

    return (
        <div>
            <p>Widht is {size["width"]}</p>
            <p>Height is {size["height"]}</p>
        </div>
    )
}