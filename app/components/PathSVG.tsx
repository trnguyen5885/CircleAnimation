import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import Animated, {
    Easing,
    useAnimatedProps,
    useDerivedValue,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const widthFrame = 300;
const { width, height } = Dimensions.get("window");

const PathSVG = () => {
    const MX = 0;
    const MY = widthFrame / 2;
    const L1 = widthFrame * 0.4;
    const L2 = L1 + widthFrame * 0.33;
    const L3 = L1 + L2 + (widthFrame - L1 - L2);
    // const strokeOffset = widthFrame * 0.3;

    const progress = useSharedValue(0);
    const progress2 = useSharedValue(L1);
    const progress3 = useSharedValue(L2);
    const progressBox = useSharedValue(0);
    const progressBox2 = useSharedValue(L1 + 50);
    const progressBox3 = useSharedValue(L2 + 50);

    // const progressOpacity = useSharedValue(0);
    // const progressOpacity2 = useSharedValue(0);
    // const progressOpacity3 = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(L1, {
            duration: 1000,
        });
        progressBox.value = withTiming(L1, {
            duration: 1000,
        });
        progress2.value = withDelay(800, withTiming(L2, { duration: 1000 }));
        progressBox2.value = withDelay(800, withTiming(L2, { duration: 1000 }));
        progress3.value = withDelay(1600, withTiming(L3, { duration: 1000 }));
        progressBox3.value = withDelay(
            1600,
            withTiming(L3, { duration: 1000 })
        );
    }, []);

    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedView = Animated.createAnimatedComponent(View);
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

    // console.log(logAnimatedPath.value);

    const animatedPath = useAnimatedProps(() => {
        return {
            d: [`M ${MX} ${MY} L ${progress.value} ${MY}`].join(""),
        };
    });

    const animatedPath2 = useAnimatedProps(() => {
        return {
            d: [`M ${L1} ${MY} L ${progress2.value} ${MY}`].join(""),
        };
    });

    const animatedPath3 = useAnimatedProps(() => {
        return {
            d: [`M ${L2} ${MY} L ${progress3.value} ${MY}`].join(""),
        };
    });

    const animatedView = useAnimatedProps(() => {
        return {
            // opacity: progressOpacity.value,
            transform: [
                {
                    translateX: progressBox.value - 50,
                },
            ],
        };
    });

    const animatedView2 = useAnimatedProps(() => {
        return {
            // opacity: progressOpacity2.value,
            transform: [
                {
                    translateX: progressBox2.value - 50,
                },
            ],
        };
    });

    const animatedView3 = useAnimatedProps(() => {
        return {
            // opacity: progressOpacity3.value,
            transform: [
                {
                    translateX: progressBox3.value - 50,
                },
            ],
        };
    });

    const logAnimatedPath = useDerivedValue(() => {
        const result = Math.round((progress.value / widthFrame) * 100);
        return result;
    });

    const animatedText = useAnimatedProps(() => {
        return {
            text: `${logAnimatedPath.value.toString()}%`,
        };
    });

    const logAnimatedPath2 = useDerivedValue(() => {
        const result = Math.round(((progress2.value - L1) / widthFrame) * 100);

        return result;
    });

    const animatedText2 = useAnimatedProps(() => {
        return {
            text: `${logAnimatedPath2.value.toString()}%`,
        };
    });

    const logAnimatedPath3 = useDerivedValue(() => {
        const result = Math.round(((progress3.value - L2) / widthFrame) * 100);
        return result;
    });

    const animatedText3 = useAnimatedProps(() => {
        return {
            text: `${logAnimatedPath3.value.toString()}%`,
        };
    });

    return (
        <View style={styles.container}>
            <Svg
                width={widthFrame}
                height={widthFrame}
                style={styles.containerSVG}
            >
                {/* <Path
                    d={[`M ${MX} ${MY} L ${widthFrame} ${MY}`].join("")}
                    strokeWidth={2}
                    strokeDashoffset={strokeOffset}
                /> */}
                <AnimatedPath
                    strokeWidth={10}
                    animatedProps={animatedPath}
                    stroke="green"
                />
                <AnimatedPath
                    strokeWidth={10}
                    animatedProps={animatedPath2}
                    stroke="orange"
                />
                <AnimatedPath
                    strokeWidth={10}
                    animatedProps={animatedPath3}
                    stroke="pink"
                />
                <AnimatedView
                    animatedProps={animatedView}
                    style={[styles.containerBox]}
                >
                    <AnimatedTextInput
                        editable={false}
                        animatedProps={animatedText}
                    />
                </AnimatedView>
                <AnimatedView
                    animatedProps={animatedView2}
                    style={styles.containerBox}
                >
                    <AnimatedTextInput
                        editable={false}
                        animatedProps={animatedText2}
                    />
                </AnimatedView>
                <AnimatedView
                    animatedProps={animatedView3}
                    style={styles.containerBox}
                >
                    <AnimatedTextInput
                        editable={false}
                        animatedProps={animatedText3}
                    />
                </AnimatedView>
            </Svg>
        </View>
    );
};

export default PathSVG;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerSVG: {
        borderWidth: 1,
        borderColor: "transparent",
    },
    containerBox: {
        borderRadius: 30,
        position: "absolute",
        top: 100,
        width: 50,
        height: 30,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
