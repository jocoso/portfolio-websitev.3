import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 * `FramedImage` component creates a styled image element with specified size, shape,
 * and alternative text.
 * 
 * @class FramedImage
 * @extends Component
 * 
 * @prop {string} Source - URL of the image. This is a required property.
 * @prop {string} size - One of the predefined sizes ('ICON', 'SMALL', 'MEDIUM', 'LARGE').
 *                      Defaults to 'MEDIUM' if not specified or invalid.
 * @prop {string} shape - One of the predefined shapes ('ROUNDED', 'CIRCLE', 'SQUARE').
 *                        Defaults to 'SQUARE' if not specified or invalid.
 * @prop {string} alt - Alternative text for the image. Defaults to an empty string if not provided. 
 */
class FramedImage extends Component {
    /**
     * Defines the available sizes for the image with corresponding css class names.
     */
    static Sizes = {
        ICON: "size-icon",
        SMALL: "size-small",
        MEDIUM: "size-medium",
        LARGE: "size-large",
    };

    /**
     * Defines the available shapes for the image with corresponding css class names.
     */
    static Shapes = {
        ROUNDED: "shape-rounded",
        CIRCLE: "shape-circle",
        SQUARE: "shape-square",
    };

    constructor(props) {
        super(props);

        this.state = {
            src: props.src || "",
            className: `${
                FramedImage.Sizes[props.size] || FramedImage.Sizes.MEDIUM
            } ${FramedImage.Shapes[props.shape] || FramedImage.Shapes.SQUARE}`,
        };
    }

    render() {
        const {src, className} = this.state;

        if(!src) {
            return <div> Error: Image source is missing. </div>
        }
        return (
            <div>
                <img
                    src={src}
                    className={className}
                    alt=""
                />
            </div>
        );
    }
}

FramedImage.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.keys(FramedImage.Sizes)),
    shape: PropTypes.oneOf(Object.keys(FramedImage.Shapes)),
    alt: PropTypes.string,
}; // eslint-disable-line

export default FramedImage;
