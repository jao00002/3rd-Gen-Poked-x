import { View, Text, StyleSheet, Pressable } from "react-native";

export default function UserItem({ user: pokemon, onPress }) {
    // console.log(pokemon);
    return (
        <Pressable style={styles.card} onPress={onPress}>
            {/* <img src={user.pokeDetails.sprites.front_default} /> */}
            <Text style={styles.itemTxt}>{pokemon.name}</Text>
            <Text style={styles.itemTxt}>Pokémon ID: {pokemon.id}</Text>
        </Pressable>
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
