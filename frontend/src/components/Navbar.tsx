import logo from "../assets/images/logo.png";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";
import Login from "./Login"

export default function Navbar(){
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [loginClicked, isLoginClicked] = useState(false)
    return(
        <nav className="absolute top-0 left-0 right-0">
            <div className="flex justify-between items-center pt-4 px-4">
                {/* fmovies logo */}
                <div className="w-36">
                    <img src={logo} alt="fmovies-logo" className="object-cover"/>
                </div>

                {/* search bar for larger screen devices */}
                <div className="hidden sm:flex flex-1 max-w-xl px-3">
                    <SearchBar/>
                </div>

                {/* show search bar button for mobile devices */}
                <button className="flex sm:hidden text-f-blue" onClick={()=>{setShowSearchBar(!showSearchBar)}}>
                    <SearchOutlinedIcon/>
                </button>

                {/* login button */}
                <button onClick={()=> {isLoginClicked(!loginClicked)}} className="flex items-center space-x-1 text-white sm:border-2 p-1 px-4 rounded-full sm:hover:bg-f-blue hover:border-f-light-blue hover:text-black duration-150 transition-colors border-white">
                    <span className="hidden sm:flex">Login</span>
                    <ArrowForwardOutlinedIcon/>
                </button>
            </div>

            {/* search bar for small screen devices */}
            <div className="flex sm:hidden pt-2">
                {showSearchBar && <SearchBar/>}
            </div>

            {loginClicked && <Login/>}
        </nav>
    )
}


// search bar
function SearchBar(){
    return(
        <div className="bg-black p-2 rounded-full opacity-70 hover:transition-opacity hover:opacity-100 duration-150 hover:shadow-lg flex-1">
            <form className="flex items-center space-x-2">
                <button className="bg-f-dark-zinc text-f-light-zinc pl-1 pr-2 py-0.5 rounded-full text-sm flex items-center">
                    <FilterAltOutlinedIcon className="scale-75"/>
                    Filter
                </button>

                <input placeholder="Search movies..." className="focus:outline-none w-full text-f-blue text-center bg-inherit"/>

                <button className="text-f-blue">
                    <SearchOutlinedIcon/>
                </button>
            </form>
        </div>
    )
}