import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import SVG, { Circle, Rect } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const widthFrame = 600;

const CircleSVG = () => {
    const widthRect = widthFrame * 0.5;
    const locationRect = (widthFrame - widthRect) / 2;

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
                    strokeWidth="3"
                    fill="transparent"
                />
                <Circle
                    cx={widthRect / 2 + locationRect}
                    cy={widthRect / 2 + locationRect}
                    r={widthRect / 2}
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
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
    },
    containerSVG: {
        borderWidth: 1,
        borderColor: "red",
    },
});
