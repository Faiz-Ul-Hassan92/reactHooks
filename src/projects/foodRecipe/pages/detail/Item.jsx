import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../GlobalContext"
import { Navbar } from "./../home/FoodRecipe"

export default function Item() {

    const { id } = useParams()
    const { addToFavourite, favourite } = useContext(GlobalContext)
    const [dish, setDish] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await response.json()
            setDish(data?.data?.recipe)
        }

        fetchData()
    }, [id])

    if (!dish) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <div className="flex justify-center items-center h-[70vh]">
                    <h2 className="text-2xl font-bold text-slate-500">Loading recipe details...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="max-w-6xl mx-auto p-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="h-96 lg:h-auto overflow-hidden rounded-2xl shadow-xl group">
                    <img 
                        src={dish?.image_url} 
                        alt={dish?.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-sm text-orange-500 font-bold uppercase tracking-wider">{dish?.publisher}</span>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mt-2 mb-6">{dish?.title}</h1>
                    </div>

                    <button 
                        onClick={() => addToFavourite(dish)} 
                        className="self-start px-8 py-3 bg-black text-white font-bold rounded-lg shadow-md hover:bg-slate-800 transition-colors uppercase tracking-wide text-sm"
                    >
                        {favourite.findIndex(temp => temp.id === id) !== -1 ? "Remove from Favourites" : "Add to Favourites"}
                    </button>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">Ingredients:</h2>
                        <ul className="flex flex-col gap-3">
                            {dish?.ingredients?.map((ingredient, index) => (
                                <li key={index} className="flex gap-2 items-start text-slate-700">
                                    <span className="text-orange-500 font-bold text-xl leading-none">•</span>
                                    <span>
                                        <span className="font-semibold">{ingredient.quantity} {ingredient.unit}</span> {ingredient.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}