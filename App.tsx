import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  IconButton,
  MD3Colors, MD3LightTheme as DefaultTheme,
  Provider as PaperProvider, Text
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
    StorageService.getData("@mykey").then((value) => {
      if (value) setLikes(Number(value));
    });
  }, []);

  useEffect(() => {
    StorageService.storeData("@mykey", likes.toString());
  }, [likes])

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="bodyMedium">Stored value: {likes}</Text>
        <IconButton
          icon="thumb-up"
          iconColor={MD3Colors.primary0}
          size={40}
          onPress={() => { setLikes(likes + 1); }}
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
