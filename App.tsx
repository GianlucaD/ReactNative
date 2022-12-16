import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  IconButton,
  MD3Colors,
  TextInput,
} from "react-native-paper";
import StorageService from "./services/StorageService";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato", // overload primary color
    secondary: "yellow", // overload secondary color
  },
};

export default function App() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    return () => {
      StorageService.getData("@mykey").then((value) => {
        console.log("value = ", value);
        if (value) setLikes(parseInt(value));
      });
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="bodyMedium">Stored value: {likes}</Text>
        <IconButton
          icon="thumb-up"
          iconColor={MD3Colors.primary0}
          size={40}
          onPress={() => {
            setLikes(likes + 1);
            StorageService.storeData("@mykey", likes.toString());
          }}
        />
      </View>
    </PaperProvider>
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
