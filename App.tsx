import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircleSVG from "./app/components/CircleSVG";
import CircleSVGClone from "./app/components/CircleSVGClone";
import CircleSVGAnimation from "./app/components/CircleSVGAnimation";
import PathSVG from "./app/components/PathSVG";
import Stream from "./app/components/Stream";
const App = () => {
    return (
        <View style={styles.container}>
            <PathSVG />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
