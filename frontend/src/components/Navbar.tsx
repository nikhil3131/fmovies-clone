import logo from "../assets/images/logo.png";
// mui icon
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export default function Navbar() {
    return (
        <header className="flex justify-between absolute left-0 right-0 top-6">
            {/* logo */}
            <img src={logo} alt="fmovies-logo" width={130}/>    

            {/* search bar */}
            <form className="flex items-center space-x-1 bg-black opacity-80 p-2 rounded-full hover:opacity-100 hover:shadow-2xl">
                <button className="bg-f-dark-zinc text-f-light-zinc flex items-center py-1.5 px-2 rounded-full text-sm">
                    <FilterAltOutlinedIcon fontSize="small"/>
                    filter
                </button>
                <input className="focus:outline-none bg-inherit text-f-blue text-center text-md w-96" placeholder="Search movies..."/>
                <button className="text-f-blue pr-2">
                    <SearchOutlinedIcon/>
                </button>
            </form>

            {/* login button*/}
            <button className="text-white bg-red-200">
                Login <ArrowRightAltOutlinedIcon/>
            </button>
        </header>
    );
}
