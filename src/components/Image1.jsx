import image1 from "../assets/img/transistor.jpg"
import PropTypes from "prop-types"

export const Image1 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image1} alt="Transistor img" className="image" />
        </div>
    )
}

Image1.propTypes = {
    className: PropTypes.string
}
