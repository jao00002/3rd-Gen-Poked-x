import Users from "../components/Users";
import Details from "../components/Details";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const UserStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                style={styles.redder}
                co
                name="Pokédex"
                component={Users}
            />
            <Stack.Screen
                style={styles.redder}
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    redder: {
        padding: "1rem",
        margin: "0.3rem",
        backgroundColor: "#FB1B1B",
        fontWeight: "bold",
        color: "#fff",
    },
});

export { UserStackNavigation };
