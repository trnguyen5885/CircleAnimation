import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RNFetchBlob from "react-native-blob-util";

const Stream = () => {
    const [message, setMessage] = useState();

    const streamAPIResponse = async () => {
        try {
            let responseText = "";

            const response = await RNFetchBlob.fetch(
                "POST",
                "http://localhost:11434/api/generate",
                { "Content-Type": "application/json" },
                JSON.stringify({
                    model: "deepseek-r1:1.5b",
                    prompt: "write javascript code to read file?",
                })
            );

            responseText += response.text();
            console.log("Stream response:", responseText);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <View>
            <Text>Stream</Text>
            <Button title="Start Stream" onPress={streamAPIResponse} />
        </View>
    );
};

export default Stream;

const styles = StyleSheet.create({});
