import { useEffect, useState } from "react"


function useFetch(url, options = {}) {

    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)


    const fetchData = async () => {
        setPending(true)
        try {
            const response = await fetch(url, options)
            console.log(response.ok)
            if (!response.ok) throw new Error("Data not found")

            let temp = await response.json()
            setData(temp)
            setError(null)
        } catch (e) {
            setError(e)
        }

        setPending(false)
    }

    useEffect(() => { if (url !== "") (fetchData()) }, [url])


    return [data, error, pending]


}


export default function UsingCustomHook() {

    const [currentURL, setCurrentUrl] = useState("")
    const [url, setUrl] = useState("")

    let [data, error, pending] = useFetch(url)


    return (
        <div>
            <input type="text" value={currentURL} onChange={(e) => setCurrentUrl(e.target.value)} placeholder="Set a url boi..." />
            <button onClick={() => {
                if (currentURL !== "") { setUrl(currentURL) }
            }} >Fetch Boi</button>
            {pending ? <p>Pending .... Wait Data Incoming</p> : null}
            {error ? <p>{error.message}</p> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.id}>{productItem.title}</p>
                )) : null}

        </div>
    )
}