import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import Users from "./components/Users";
import Settings from "./components/Settings";

import Ionicons from "react-native-vector-icons/Ionicons";

import { UserProvider } from "./context/userContext";
import { UserStackNavigation } from "./navigation/UserNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <UserProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "indigo" },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        head3erTitleStyle: {
                            fontWeight: "bold",
                        },
                        tabBarActiveTintColor: "indigo",
                        tabBarInactiveTintColor: "grey",
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerShown: false,
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
                        name="User List"
                        component={UserStackNavigation}
                        option={{ headerShown: false }}
                    />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
