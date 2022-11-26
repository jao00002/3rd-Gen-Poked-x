import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useUser } from "../context/userContext";

function Details({ route }) {
    const [users] = useUser();

    //console.log(users);

    let id = parseInt(route.params.id) - 1;
    console.log(users.pokeDetails[id].id);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <View>
                <Text>Details Screen</Text>
                <Text>Pokemon ID: {users.pokeDetails[id].id}</Text>
                <Text>{}</Text>
            </View>
        </>
    );
}

export default Details;
