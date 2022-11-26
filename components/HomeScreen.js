import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FocusAwareStatusBar from "./FocusAwareStatusBar";

function HomeScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <FocusAwareStatusBar />
                <View>
                    <Text>Home</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default HomeScreen;
