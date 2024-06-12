import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View className="flex items-center justify-center bg-grey-300 text-white mt-3">
      <Text className="text-3xl font-pblack">
        Zapnode
      </Text>
      <StatusBar style="auto" />
      <Link href={'/profile'} className="text-blue-500"> Go to Profile</Link>
      <Link href={'/home'} className="text-blue-500"> Go to Home</Link>
    </View>
  );
}
