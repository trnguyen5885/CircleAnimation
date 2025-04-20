import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import SVG, { Circle, Rect } from "react-native-svg";

const widthFrame = 200;

const CircleSVG = () => {
    const widthRect = widthFrame * 0.5;
    const locationRect = (widthFrame - widthRect) / 2;
    const strokeWidthRect = 2;
    const strokeWidthCircle = 2;
    const originROuter = (widthRect * Math.sqrt(2)) / 2;
    const afterROuter = originROuter + strokeWidthRect;
    const originRInner = widthRect / 2;
    const afterRInner =
        originRInner - strokeWidthRect / 2 - strokeWidthCircle / 2;

    const cx = widthRect / 2 + locationRect;
    const cy = widthRect / 2 + locationRect;

    const AB = (2 * afterRInner) / Math.sqrt(2);
    const XA = cx - AB / 2;

    return (
        <View style={styles.container}>
            <SVG
                width={widthFrame}
                height={widthFrame}
                style={styles.containerSVG}
            >
                <Circle
                    cx={cx}
                    cy={cy}
                    r={afterROuter}
                    fill="transparent"
                    strokeWidth={strokeWidthCircle}
                    stroke="blue"
                />
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
                    cx={cx}
                    cy={cy}
                    r={afterRInner}
                    stroke="blue"
                    strokeWidth={strokeWidthCircle}
                    fill="transparent"
                />
                {/* <Circle
                    cx={widthRect / 2 + locationRect}
                    cy={widthRect / 2 + locationRect}
                    r={afterR}
                    stroke="black"
                    strokeWidth="1"
                    fill="transparent"
                /> */}
                <Rect
                    x={XA}
                    y={XA}
                    width={AB}
                    height={AB}
                    stroke="black"
                    strokeWidth="1"
                    fill="transparent"
                />
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
