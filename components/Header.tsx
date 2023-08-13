import {ReactNode} from "react";

export default function Header({children}: {children: ReactNode}) {
    return (
        <div className="bg-white shadow header relative">
            <div className="container relative mx-auto flex flex-wrap justify-center items-center sm:justify-between">
                <a href="" className="sm:w-0 text-primary header-flex font-bold text-3xl w-full">WhoAmI</a>
                <ul className="nav-links flex flex-wrap flex-row">
                    <li><a href="#articles">Article</a></li>
                    <li><a href="#gallery" >Gallery</a></li>
                    <li><a href="#features">Features</a></li>
                    <li>
                        <a href="#">Other Links</a>
                        {children}
                    </li>
                </ul>
            </div>
        </div>
    );
}