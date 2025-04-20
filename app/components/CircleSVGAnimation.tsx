import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, {
    Easing,
    useAnimatedProps,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

const size = 300;

const CircleSVGAnimation = () => {
    const strokeWidth = 30;
    const radius = size / 2 - strokeWidth / 2;
    const cx = size / 2;
    const cy = size / 2;
    const C = 2 * Math.PI * radius;
    const percent = 15;

    const calculatePercent = (C * percent) / 100;

    const strokeOffset = C - calculatePercent;

    const progress = useSharedValue(C);
    const progressColor = useSharedValue(0.5);
    const progressText = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(strokeOffset, {
            duration: 1000,
        });
        progressColor.value = withTiming(1, {
            duration: 1000,
        });
        progressText.value = withTiming(percent, {
            duration: 1000,
            // easing: Easing.steps(1, true),
        });
    }, []);

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedText = Animated.createAnimatedComponent(TextInput);

    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: progress.value,
            stroke: `rgba(255,165,0,${progressColor.value})`,
        };
    });

    const animatedText = useDerivedValue(() => {
        const result = progressText.value;
        return result;
    });

    const animatedTextProps = useAnimatedProps(() => ({
        text: `${animatedText.value}%`,
    }));

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <Circle
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="transparent"
                    stroke="black"
                    strokeWidth={strokeWidth}
                />
                <AnimatedCircle
                    originX={cx}
                    originY={cy}
                    cx={cx}
                    cy={cy}
                    r={radius}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={C}
                    animatedProps={animatedProps}
                    rotation={-90}
                />
            </Svg>
            <AnimatedText
                style={styles.text}
                editable={false}
                animatedProps={animatedTextProps}
            />
        </View>
    );
};

export default CircleSVGAnimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        // position: "absolute",
        fontSize: 40,

        maxWidth: 90,
        fontWeight: "bold",
        color: "black",
    },
    // containerSVG: {
    //     borderWidth: 1,
    //     borderColor: "black",
    // },
});
