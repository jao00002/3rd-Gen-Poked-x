import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function UserItem({ user: pokemon, onPress }) {
    // console.log(pokemon);
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* <img src={user.pokeDetails.sprites.front_default} /> */}
            <Text>Pokémon ID: {pokemon.id}</Text>
            <Text>{pokemon.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        "text-transform": "capitalize",
        padding: "1rem",
        margin: "0.3rem",
        borderRadius: "1rem",
        backgroundColor: "#DFDFDF",
    },
});
