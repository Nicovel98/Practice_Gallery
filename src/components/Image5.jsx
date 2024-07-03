import image5 from "../assets/img/transistor.jpg"
import PropTypes from "prop-types"

export const Image5 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image5} alt="Transistor img" className="image" />
        </div>
    )
}
Image5.propTypes = {
    className: PropTypes.string
}
