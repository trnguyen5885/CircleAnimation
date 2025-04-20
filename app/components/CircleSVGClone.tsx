import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle, Rect } from "react-native-svg";
import { useSharedValue, withTiming } from "react-native-reanimated";

const widthFreamSVG = 300;

const CircleSVGClone = () => {
    const widthRectangle = widthFreamSVG * 0.5;
    const locationRectangle = (widthFreamSVG - widthRectangle) / 2;
    const strokeWidthRectangle = 1;
    const strokeWidthCircle = 1;

    const circleOuter =
        (widthRectangle * Math.sqrt(2)) / 2 +
        strokeWidthRectangle / 2 +
        strokeWidthCircle / 2;

    const circleInner =
        widthRectangle / 2 - strokeWidthRectangle / 2 - strokeWidthCircle / 2;

    const cx = widthRectangle / 2 + locationRectangle;
    const cy = widthRectangle / 2 + locationRectangle;

    const widthRectangleInner = (2 * circleInner) / Math.sqrt(2);
    const locationRectangleInner = cx - widthRectangleInner / 2;

    return (
        <View style={styles.container}>
            <Svg
                width={widthFreamSVG}
                height={widthFreamSVG}
                style={styles.containerSVG}
            >
                <Circle
                    x={cx}
                    y={cy}
                    r={circleOuter}
                    fill="transparent"
                    strokeWidth={strokeWidthCircle}
                    stroke="black"
                />
                <Rect
                    x={locationRectangle}
                    y={locationRectangle}
                    width={widthRectangle}
                    height={widthRectangle}
                    fill="transparent"
                    strokeWidth={strokeWidthRectangle}
                    stroke="black"
                />
                <Circle
                    x={cx}
                    y={cy}
                    r={circleInner}
                    fill="transparent"
                    strokeWidth={strokeWidthCircle}
                    stroke="black"
                />

                <Rect
                    x={locationRectangleInner}
                    y={locationRectangleInner}
                    width={widthRectangleInner}
                    height={widthRectangleInner}
                    stroke="black"
                    fill="transparent"
                />
            </Svg>
        </View>
    );
};

export default CircleSVGClone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        transform: [
            {
                scale: 1,
            },
        ],
    },
    containerSVG: {
        borderWidth: 2,
        borderColor: "red",
    },
});
