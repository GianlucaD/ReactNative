import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  IconButton,
  MD3Colors,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="bodyMedium">
          We are using React Paper. Looks nice, isn't it?
        </Text>
        <IconButton
          icon="thumb-up"
          iconColor={MD3Colors.primary0}
          size={40}
          onPress={() => console.log("Pressed")}
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
