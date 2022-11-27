import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function UserItem({ user: pokemon, onPress }) {
    // console.log(pokemon);
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* <img src={user.pokeDetails.sprites.front_default} /> */}
            <Text style={styles.itemTxt}>{pokemon.name}</Text>
            <Text style={styles.itemTxt}>Pokémon ID: {pokemon.id}</Text>
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
    itemTxt: {
        fontSize: "1.5rem",
    },
});
