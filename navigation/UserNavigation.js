import Users from "../components/Users";
import Details from "../components/Details";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const UserStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                }}
                name="Pokédex"
                component={Users}
            />
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                }}
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    cards: {
        backgroundColor: "black",
        padding: 0,
        margin: 0,
        color: "white",
        //"#FB1B1B",
    },
    stackHeader: {
        backgroundColor: "#FB1B1B",
        fontWeight: "bold",
        textDecorationColor: "#fff",
        textAlign: "center",
        color: "white",
    },
});

export { UserStackNavigation };
