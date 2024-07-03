import { Link } from "react-router-dom"
import { Image1 } from "./Image1"
import { Image6 } from "./Image6"
import { Image5 } from "./Image5"
import { Image4 } from "./Image4"
import { Image3 } from "./Image3"
import { Image2 } from "./Image2"

export const Navigation = () => {
    return (
        <div className="container mt-4 father">
            <Link to="/image1" className="links">
                <figure className="image-size">
                    <Image1 />
                    <figcaption>Transistor img</figcaption>
                </figure>
            </Link>
            <Link to="/image2" className="links">
                <figure className="image-size">
                    <Image2 />
                    <figcaption>Transistor gif</figcaption>
                </figure>
            </Link>
            <Link to="/image3" className="links">
                <figure className="image-size">
                    <Image3 />
                    <figcaption>Transistor img</figcaption>
                </figure>
            </Link>
            <Link to="/image4" className="links">
                <figure className="image-size">
                    <Image4 />
                    <figcaption>Transistor gif</figcaption>
                </figure>
            </Link>
            <Link to="/image5" className="links">
                <figure className="image-size">
                    <Image5 />
                    <figcaption>Transistor img</figcaption>
                </figure>
            </Link>
            <Link to="/image6" className="links">
                <figure className="image-size">
                    <Image6 />
                    <figcaption>Transistor gif</figcaption>
                </figure>
            </Link>
        </div>
    )
}
