import image2 from "../assets/img/transistor-1.gif"
import PropTypes from "prop-types"

export const Image2 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image2} alt="Transistor gif" className="image" />
        </div>
    )
}
Image2.propTypes = {
    className: PropTypes.string
}
