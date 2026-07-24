import { useEffect, useState } from "react"


export default function GithubFinder() {

    const [user, setUser] = useState("Faiz-Ul-Hassan92")
    const [userData, setUserData] = useState(null)

    const fetchUser = async () => {

        const response = await fetch(`https://api.github.com/users/${user}`)

        const data = await response.json()

        setUserData(data)
    }

    useEffect(() => {

        const timeouting = setTimeout(() => { fetchUser() }, 500)

        return () => clearTimeout(timeouting)

    }, [user])




    return (
        <div>
            <input onChange={(event) => setUser(event.target.value)} value={user} />
            {userData &&
                <div>
                    <span>Actual Name: {userData["name"]} Username: {userData["login"]}</span>
                    <img src={userData["avatar_url"]} />
                    <div><span>Followers: {userData["followers"]}</span></div>
                    <div><span>Following: {userData["following"]}</span></div>
                </div>}
        </div >
    )
}