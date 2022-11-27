import React from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet } from "react-native";

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar style={styles.redder} {...props} /> : null;
}

const styles = StyleSheet.create({
    redder: {
        padding: "1rem",
        margin: "0.3rem",
        backgroundColor: "#FB1B1B",
        color: "#fff",
    },
});

export default FocusAwareStatusBar;

//need to review how to style these so they show up
