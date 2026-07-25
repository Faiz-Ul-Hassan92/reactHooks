import { createContext, useState } from "react";

export const GlobalContext = createContext(null)


export default function GlobalState({ children }) {

    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [favourite, setFavourite] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            const data = await response.json()

            if (data?.data?.recipes) setRecipes(data.data.recipes)

            setLoading(false)
            setSearch('')
        }
        catch (e) {
            console.log(e)
            setLoading(false)
            setSearch('')
        }
    }


    const addToFavourite = (item) => {
        let cpyList = [...favourite]
        const index = cpyList.findIndex((temp) => temp.id === item.id)

        if (index === -1) {
            cpyList.push(item)
        }
        else {
            cpyList.splice(index, 1)
        }

        setFavourite(cpyList)
    }

    return (
        <GlobalContext.Provider
            value={
                {
                    search, setSearch,
                    handleSubmit, loading,
                    setLoading,
                    recipes, setRecipes,
                    addToFavourite,
                    favourite
                }
            }>
            {children}
        </GlobalContext.Provider>)
}