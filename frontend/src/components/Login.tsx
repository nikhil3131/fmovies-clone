import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

export default function LoginForm(){
    const [isRegistered, setIsRegistered] = useState(true)
    const [isVisiable, setIsVisible] = useState(true)
    const formRef = useRef<HTMLFormElement | null>(null);

    //close form when user clicked outside the form 
    useEffect(()=>{
        function handleClickOutside(e: MouseEvent){
            if (formRef.current && !formRef.current.contains(e.target as Node)){
                setIsVisible(!isVisiable)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[formRef])

    return(
        <div className={`absolute top-0 left-0 right-0 flex flex-col h-screen ${isVisiable ? "" : "hidden"}`}>
            <div className="absolute top-0 left-0 right-0 h-screen bg-black opacity-50 z-0"/>
            <form ref={formRef} className="flex flex-col space-y-2 max-w-2xl bg-f-dark-zinc text-f-light-zinc p-4 mx-auto my-auto z-10 rounded-xl">
                {/* form label */}
                <h1 className="text-3xl text-white font-bold my-5">{isRegistered ? "Welcome back!" : "Account Sign Up"}</h1>

                <label>{isRegistered ? "Account*" : "Username*"}</label>
                <input className="bg-[#656565] text-white focus:outline-none p-1 px-2 rounded-md"/>

                <label className={`${isRegistered ? "hidden" : ""}`}>Email*</label>
                <input className={`bg-[#656565] text-white focus:outline-none p-1 px-2 rounded-md ${isRegistered ? "hidden" : ""}`}/>

                <label>Password*</label>
                <input className="bg-[#656565] text-white focus:outline-none p-1 px-2 rounded-md"/>

                <label className={`${isRegistered ? "hidden" : ""}`}>Repeat Password*</label>
                <input className={`bg-[#656565] text-white focus:outline-none p-1 px-2 rounded-md ${isRegistered ? "hidden" : ""}`}/>

                <button className="bg-f-blue hover:bg-f-light-blue text-black rounded-md p-2 my-5">
                    {isRegistered ? "Sign in" : "Sign up"}
                </button>

                <div className="flex flex-col mt-3">
                    <Link to="" className={`text-f-blue text-sm ${isRegistered ? "" : "hidden"}`}>Forgot your password</Link>
                    <Link to="" className={`text-f-blue text-sm mt-1 ${isRegistered ? "" : "hidden"}`} onClick={()=>{setIsRegistered(!isRegistered)}}>Sign up for a new account</Link>
                    <Link to="" className={`text-f-blue text-sm ${isRegistered ? "hidden" : ""}`} onClick={()=>{setIsRegistered(!isRegistered)}}>Already have account? Sign in</Link>
                </div>
            </form>
        </div>
    )
}