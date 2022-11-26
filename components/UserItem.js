import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function UserItem({ user, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text>{user.name}</Text>
            <Text>{user.url}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: "lightgrey",
    },
});
