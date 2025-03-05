import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircleSVG from "./app/components/CircleSVG";

const App = () => {
    return (
        <View style={styles.container}>
            <CircleSVG />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
