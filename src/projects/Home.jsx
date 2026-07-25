import { Link } from "react-router-dom"

export default function Home() {

    const linkClasses = "flex items-center justify-center bg-white text-indigo-600 border border-indigo-100 font-semibold py-4 px-6 rounded-xl shadow-sm hover:shadow-md hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-200";

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-12 tracking-tight text-center">
                React Hooks Projects
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                <Link to="/windowChecker" className={linkClasses}>Window Checker</Link>
                <Link to="/fetchHook" className={linkClasses}>Custom Fetch Hook</Link>
                <Link to="/outsideClickHook" className={linkClasses}>Outside Click Hook</Link>
                <Link to="/customTabs" className={linkClasses}>Custom Tabs</Link>
                <Link to="/githubFinder" className={linkClasses}>Github Finder</Link>
                <Link to="/changeTheme" className={linkClasses}>Change Theme</Link>
                <Link to="/weather" className={linkClasses}>Weather App</Link>
                <Link to="/foodRecipe" className={linkClasses}>Food Recipe</Link>
            </div>
        </div>
    )
}