import image6 from "../assets/img/transistor-1.gif"
import PropTypes from "prop-types"

export const Image6 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image6} alt="Transistor gif" className="image" />
        </div>
    )
}

Image6.propTypes = {
    className: PropTypes.string
}
