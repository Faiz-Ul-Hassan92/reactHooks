import { useEffect, useRef, useState } from "react"



function useOutsideClick(func, ref) {

    useEffect(() => {


        const customFunction = (event) => {

            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            func()
        }

        document.addEventListener("touchstart", customFunction)
        document.addEventListener("mousedown", customFunction)

        return (() => {
            document.removeEventListener("touchstart", customFunction)
            document.removeEventListener("mousedown", customFunction)
        }
        )
    }, [func, ref])

}

export default function UsingOutsideClick() {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useOutsideClick(() => setOpen(false), ref)

    return (
        <div ref={ref}>
            {open ? <p>Peeeeekaabuuu!!!</p> : <button onClick={() => setOpen(true)}>Open the surprise</button>}
        </div>
    )
}