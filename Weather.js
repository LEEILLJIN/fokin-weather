import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0b0", "#D39D38"]
    },
    Thunderstorm: {
      iconName: "",
      gradient: []
    },
    Drizzle: {
      iconName: "",
      gradient: []
    },
    Rain: {
      iconName: "weather-raniy",
      gradient: ["black", "gray"]
    },
    Snow: {
      iconName: "",
      gradient: []
    },
    Atmosphere: {
      iconName: "",
      gradient: []
    },
    Clear: {
      iconName: "",
      gradient: []
    },
    Clouds: {
      iconName: "",
      gradient: []
    },
    Mist: {
      iconName: "",
      gradient: []
    },
    Dust: {
      iconName: "",
      gradient: []
    }
  };

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle = "light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name = {weatherOptions["Haze"].iconName}
                    color = "white"
                />
                <Text style = {styles.temp}>{temp}°</Text>
            </View>
            <View style = {styles.halfContainer}/>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp : {
        fontSize : 46,
        color : "white"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});