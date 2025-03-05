import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import SVG, { Circle, Rect } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const widthFrame = 300;

const CircleSVG = () => {
    const widthRect = widthFrame * 0.5;
    const locationRect = (widthFrame - widthRect) / 2;
    const strokeWidthRect = 2;
    const strokeWidthCircle = 0;
    const originR = widthRect / 2;
    const afterR = originR - strokeWidthRect / 2 - strokeWidthCircle / 2;

    return (
        <View style={styles.container}>
            <SVG
                width={widthFrame}
                height={widthFrame}
                style={styles.containerSVG}
            >
                <Rect
                    x={locationRect}
                    y={locationRect}
                    width={widthRect}
                    height={widthRect}
                    stroke="red"
                    strokeWidth={strokeWidthRect}
                    fill="transparent"
                />
                {/* <Rect
                    x={locationRect}
                    y={locationRect}
                    width={widthRect}
                    height={widthRect}
                    stroke="black"
                    strokeWidth="1"
                    fill="transparent"
                /> */}
                <Circle
                    cx={widthRect / 2 + locationRect}
                    cy={widthRect / 2 + locationRect}
                    r={afterR}
                    stroke="blue"
                    strokeWidth={strokeWidthCircle}
                    fill="green"
                />
                {/* <Circle
                    cx={widthRect / 2 + locationRect}
                    cy={widthRect / 2 + locationRect}
                    r={afterR}
                    stroke="black"
                    strokeWidth="1"
                    fill="transparent"
                /> */}
            </SVG>
        </View>
    );
};

export default CircleSVG;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [
            {
                scale: 1.8,
            },
        ],
    },
    containerSVG: {
        borderWidth: 1,
        borderColor: "red",
    },
});
