import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { palette } from "../../styles/styles";
import { useUser } from "@clerk/clerk-expo";
import { View } from "react-native";
import { Redirect } from "expo-router";

export default function AppLayout() {
  const { isLoggedIn: isSignedIn, isLoaded } = useUser();
  if (!isSignedIn) {
    return <Redirect href="/login" />;
  }
  if (!isLoaded) {
    return <View>Loading</View>;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.highlight,
        tabBarInactiveTintColor: palette.mediumBlue,
        tabBarStyle: {
          backgroundColor: palette.darkBlue,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
