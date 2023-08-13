import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
    return (
        <div className="landing relative before:absolute before:w-[100%] before:h-[100%] before:bg-gray-200 before:-z-50 before:top-0 before:left-0 before:-skew-y-6 before:origin-top-left">
            <div className="container mx-auto min-h-[calc(70vh-72px)] md:min-h-[calc(100vh-72px)] flex items-center pb-32 text-center">
                <div className="md:grow text-center md:text-left">
                    <h1>Hello World</h1>
                    <p className="mt-2 mx-1 text-gray-900">Here i give an example of my design across showing Books, Games, Stories and Events</p>
                </div>
                <div className="hidden md:block">
                    <img className="w-[600px] max-w-full animate-uptodown" src="/images/landing-image.png" alt=""/>
                </div>
            </div>
            <a href="#articles" className="absolute animate-pulse left-[50%] md:bottom-1 -bottom-6 text-xl text-primary translate-x-[50%]">
                <FontAwesomeIcon icon={faAnglesDown} />
            </a>
        </div>
    );
}
