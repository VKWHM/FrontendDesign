import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCalendarAlt, faChartBar,
    faCheckCircle,
    faClipboard,
    faComments, faPercent, faPlayCircle, faServer,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export default function MegaMenu() {
    return (
        <div className="mega-menu absolute p-12 w-full bg-white -z-50 left-0 border-b-4 border-primary flex gap-10 top-[calc(100%+64px)] opacity-0">
            <div className="max-w-full mr-4 hidden md:block"><img className="min-w-[250px]" src="images/megamenu.png" alt=""/></div>
            <ul className="links">
                <li>
                    <a href="#testimonials"><FontAwesomeIcon icon={faComments}/> Testimonials</a>
                </li>
                <li>
                    <a href="#team"><FontAwesomeIcon icon={faUser} /> Team Members</a>
                </li>
                <li>
                    <a href="#services"><FontAwesomeIcon icon={faBuilding} /> Services</a>
                </li>
                <li>
                    <a href="#our-skills"><FontAwesomeIcon icon={faCheckCircle} /> Our Skills</a>
                </li>
                <li>
                    <a href="#work-steps"><FontAwesomeIcon icon={faClipboard} /> How It Works</a>
                </li>
            </ul>
            <ul className="links">
                <li>
                    <a href="#events"><FontAwesomeIcon icon={faCalendarAlt}/> Events</a>
                </li>
                <li>
                    <a href="#pricing"><FontAwesomeIcon icon={faServer} /> Pricing Plans</a>
                </li>
                <li>
                    <a href="#video"><FontAwesomeIcon icon={faPlayCircle} /> Top Videos</a>
                </li>
                <li>
                    <a href="#stats"><FontAwesomeIcon icon={faChartBar}/> Stats</a>
                </li>
                <li>
                    <a href="#discount"><FontAwesomeIcon icon={faPercent} /> Request A Discount</a>
                </li>
            </ul>
        </div>
    );
}