import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PokeItem({ item: pokeitem, onPress }) {
    console.log(pokeitem);
    //replace with Pressable
    return (
        <Pressable style={styles.card} onPress={onPress}>
            {/* <img src={user.pokeDetails.sprites.front_default} /> */}
            <Text style={styles.itemTxt}>{pokeitem.name}</Text>
            <Text style={styles.itemTxt}>Item ID: {pokeitem.id}</Text>
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
