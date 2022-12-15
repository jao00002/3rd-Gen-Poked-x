import ItemDetails from "../components/ItemDetails";
import Items from "../components/Items";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ItemStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                }}
                name="Items"
                component={Items}
            />
            <Stack.Screen
                options={{
                    cardStyle: styles.cards,
                    headerStyle: styles.stackHeader,
                }}
                name="Item Details"
                component={ItemDetails}
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

export { ItemStackNavigation };
