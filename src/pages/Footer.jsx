import React from "react";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/insta.png";
import email from "../assets/email.png";


const Footer = () => {
    return (
        <>
            <div className="h-14 w-screen md:h-20">
                <p className=" text-grey font-medium text-lg">Connect with us</p>
                <div className="p-5">
                    <div className="flex gap-4 items-center justify-center">
                        <a href="/#about-container" className="hover:text-pink bg-grey rounded-full p-2"><img src={linkedin} width={25} height={25}></img></a>
                        <a href="/#events-container" className="hover:text-pink bg-grey rounded-full p-2"><img src={instagram} width={25} height={25}></img></a>
                        <a href="/#team-container" className="hover:text-pink bg-grey rounded-full p-2"><img src={email} width={30} height={30}></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer