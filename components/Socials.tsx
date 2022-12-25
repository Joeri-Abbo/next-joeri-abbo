import Facebook from "../public/icons/facebook.svg"
import Envelope from "../public/icons/circle-envelope-solid.svg"
import Linkedin from "../public/icons/linkedin-in.svg"

const Socials = () => {
    return (
        <div className="">
            <Facebook className="w-5 h-5 hover:scale-125 transform-gpu text-gray-900"/>
            <Envelope className="w-5 h-5 hover:scale-125 transform-gpu text-gray-900"/>
            <Linkedin className="w-5 h-5 hover:scale-125 transform-gpu text-gray-900"/>
        </div>
    )
}
export default Socials;