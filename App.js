import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

import { UserProvider } from "./context/userContext";
import { UserStackNavigation } from "./navigation/UserNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <UserProvider>
            <NavigationContainer>
                <Tab.Navigator
                    style={styles.container}
                    screenOptions={{
                        headerStyle: { backgroundColor: "#FB1B1B" },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        tabBarActiveTintColor: "white",
                        tabBarInactiveBackgroundColor: "#FB1B1B",
                        tabBarActiveBackgroundColor: "#FB1B1B",
                        tabBarInactiveTintColor: "#DFDFDF",
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            // headerShown: false,
                            tabBarIcon: ({ focused, size, color }) => (
                                <Ionicons
                                    name={"home"}
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Pokémon List"
                        component={UserStackNavigation}
                        options={{
                            //headerShown: false,
                            tabBarIcon: ({ focused, size, color }) => (
                                <Ionicons
                                    name={"list-outline"}
                                    size={size}
                                    color={color}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FB1B1B",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
