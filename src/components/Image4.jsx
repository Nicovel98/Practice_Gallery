import image4 from "../assets/img/transistor-1.gif"
import PropTypes from "prop-types"

export const Image4 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image4} alt="Transistor gif" className="image" />
        </div>
    )
}
Image4.propTypes = {
    className: PropTypes.string
}
