// site logo
import logo from "../assets/images/logo.png"
// mui icons
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
//react router
import { useNavigate } from "react-router-dom"

export default function Homepage(){
    const navigate = useNavigate()
    return(
        <div className="bg-homepageImage w-screen h-screen z-0 overflow-scroll sm:py-8 no-scrollbar">
            {/* overshadow */}
            <div className="absolute top-0 w-screen h-screen bg-black opacity-70 z-10"/>

            <section className="relative z-10 max-w-6xl mx-auto bg-f-dark-gray p-4 sm:p-10 sm:rounded-lg">
                {/* header */}
                <header className="space-y-3 flex flex-col items-center">
                    {/* logo */}
                    <img src={logo} alt="fmovies-logo" width={200} onClick={()=>{navigate("/")}} className="cursor-pointer"/>
                    {/* title */}
                    <h1 className="text-f-dark-zinc font-bold text-center text-3xl py-3">Watch Movies Online in HD for Free!</h1>
                    {/* button */}
                    <button className="bg-f-blue flex items-center p-2 rounded-md px-8 sm:px-12 hover:bg-f-light-blue" onClick={()=>{navigate("home")}}>
                        Go to Homepage <PlayCircleFilledWhiteOutlinedIcon className="ml-1"/>
                    </button>
                </header>

                {/* footer */}
                <footer className="space-y-4 mt-10 text-f-dark-zinc bg-black p-4 rounded-md">
                    <h3 className="text-f-light-zinc">FMovies - Watch Movies Online for FREE</h3>
                    <p>FMovies - the ultimate online movie streaming website that brings the magic of cinema to your fingertips. With a vast and diverse database, as well as a multitude of exciting features, FMovies offers an unparalleled movie-watching experience for film enthusiasts worldwide.</p>
                    <p>At FMovies, we take pride in our extensive database that encompasses a wide range of movies from various genres, eras, and countries. From Hollywood blockbusters to independent gems, we have something for everyone. Our database is continuously updated with the latest releases, ensuring that you stay up-to-date with the hottest films in the industry.</p>
                    <p>One of the standout features of FMovies is our personalized recommendation system. Our sophisticated algorithms analyze your viewing history, preferences, and ratings to curate a customized list of movie recommendations tailored specifically to your tastes. Discover new films you'll love and embark on exciting cinematic adventures you never knew existed.</p>
                    <p>In addition to our large database and personalized recommendations, FMovies offers high-quality streaming for an immersive viewing experience. Enjoy movies in stunning high-definition resolution, accompanied by crisp audio, bringing the theater experience right to your home. Our adaptive streaming technology ensures smooth playback, adjusting to your internet connection for uninterrupted enjoyment.</p>
                    <p>FMovies also understands the importance of convenience and accessibility. Our platform is compatible with various devices, including laptops, tablets, and smartphones, allowing you to watch movies anytime, anywhere. Whether you're at home or on the go, FMovies keeps you connected to your favorite films.</p>
                    <p>Furthermore, FMovies fosters a vibrant community of movie enthusiasts. Engage in discussions, share reviews, and interact with fellow cinephiles through our dedicated forums and social features. Connect with like-minded individuals, exchange recommendations, and dive deeper into the world of cinema.</p>
                    <p>In summary, FMovies is the ultimate online movie streaming destination, offering a vast database, personalized recommendations, high-quality streaming, device compatibility, and an engaging community. Prepare to be captivated by the world of cinema as you embark on a cinematic journey like no other. Welcome to FMovies, where movies come to life.</p>
                </footer>
            </section>
        </div>
    )
}