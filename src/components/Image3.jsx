import image3 from "../assets/img/transistor.jpg"
import PropTypes from "prop-types"

export const Image3 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image3} alt="Transistor img" className="image" />
        </div>
    )
}

Image3.propTypes = {
    className: PropTypes.string
}
