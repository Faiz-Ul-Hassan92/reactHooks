import { useContext } from "react"
import { GlobalContext } from "../../GlobalContext"
import { Navbar, Dish } from "../home/FoodRecipe"

export default function Favourites() {

    const { favourite } = useContext(GlobalContext)

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
            <Navbar />
            <div className="max-w-7xl mx-auto mt-8 px-4">
                <h1 className="text-3xl font-extrabold text-slate-800 mb-8 text-center lg:text-left">Your Favourites</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {(favourite && favourite.length > 0) ? (
                        favourite.map(recipe => <Dish key={recipe.id} item={recipe} />)
                    ) : (
                        <div className="text-center mt-12 w-full">
                            <h2 className="text-2xl font-bold text-slate-500">Nothing is added to favourites yet.</h2>
                            <p className="text-slate-400 mt-2">Go search for some recipes and add them here!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}