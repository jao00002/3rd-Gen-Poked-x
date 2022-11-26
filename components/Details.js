import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useUser } from "../context/userContext";

function Details({ route }) {
    const [users] = useUser();

    //console.log("details");

    let id = parseInt(route.params.id);
    let fullURL = "https://pokeapi.co/api/v2/pokemon/" + id;
    //let pokeMap = fetch(fullURL).then((res) => res.json());
    //let map = pokeMap.map((item) => ({ ...item }));
    //console.log(pokeMap);
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <View>
                <Text>Details Screen</Text>
                <Text>{route.params.id}</Text>
                <Text>{}</Text>
            </View>
        </>
    );
}

export default Details;
