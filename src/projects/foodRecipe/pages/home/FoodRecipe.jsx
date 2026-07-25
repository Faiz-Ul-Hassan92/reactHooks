import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { GlobalContext } from "../../GlobalContext"


export function Navbar() {

    const { search, setSearch, handleSubmit } = useContext(GlobalContext)

    return (
        <nav className="flex justify-between items-center py-6 flex-col lg:flex-row gap-5 lg:gap-0 bg-white sticky top-0 z-50 px-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-orange-500">
                <Link to="/foodRecipe">Food Recipe App</Link>
            </h2>
            <form onSubmit={handleSubmit} className="w-full lg:w-96 relative">
                <input 
                    type="text" 
                    placeholder="Search your favourite dish (e.g. pizza, chicken)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-100 p-3 px-6 rounded-full outline-none shadow-inner border border-transparent focus:border-orange-300 focus:bg-white transition-all"
                />
            </form>
            <ul className="flex gap-6 font-semibold text-slate-600">
                <li>
                    <NavLink to="/foodRecipe" className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400 transition-colors"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/foodRecipe/favourites" className={({ isActive }) => isActive ? "text-orange-500" : "hover:text-orange-400 transition-colors"}>Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export function Dish({ item }) {
    return (
        <div className="flex flex-col w-full sm:w-72 overflow-hidden p-5 bg-white shadow-lg gap-4 border border-gray-200 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 flex justify-center overflow-hidden items-center rounded-xl bg-gray-100 relative group">
                <img src={item.image_url} alt={item.title} className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">{item.publisher}</span>
                <h3 className="font-bold text-xl truncate text-gray-800">{item.title}</h3>
            </div>
            <Link 
                to={`/foodRecipe/${item?.id}`} 
                className="text-sm font-medium tracking-wide uppercase bg-black text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-slate-800 text-center mt-2 transition-colors">
                Recipe Details
            </Link>
        </div>
    )
}


export default function FoodRecipe() {

    const { recipes } = useContext(GlobalContext)


    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
            <Navbar />
            <div className="max-w-7xl mx-auto mt-8 px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {(recipes && recipes.length > 0) ? (
                        recipes.map(recipe => <Dish key={recipe.id} item={recipe} />)
                    ) : (
                        <div className="text-center mt-12">
                            <h1 className="text-3xl font-extrabold text-slate-700">Nothing to show, please search something</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}