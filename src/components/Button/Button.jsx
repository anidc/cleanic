import "./button.scss"
import { FaAngleRight } from "react-icons/fa"
import { AiOutlineFieldTime } from "react-icons/ai"

const Button = ({ name, klasa }) => {
    return (
        <button className={"custom-button " + klasa + "-button"}>{name}&nbsp;{klasa === "learn-more" ? <FaAngleRight className="arrow" /> : ""} {klasa === "search-cleanic" ? <AiOutlineFieldTime className="arrow" /> : ""}</button>
    )
}

export default Button;