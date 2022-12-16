import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.5 100"
        style={{
            enableBackground: "new 0 0 72.5 100",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <Path
            d="M5 61H0v10h5v6H0v10h5v13h10V87h38V77H15v-6h38V61H15v-6h30c15.2 0 27.5-12.3 27.5-27.5S60.2 0 45 0H5c-.5 25 0 47.7 0 61zm10-16h30c9.7 0 17.5-7.8 17.5-17.5S54.7 10 45 10H15v35z"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#fff",
            }}
        />
    </Svg>
);

export default SvgComponent;
