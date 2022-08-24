import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
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
        <View style={styles.red}></View>
        <View style={styles.blue}></View>
        <View style={styles.orange}></View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  red: {
    flex: 1,
    backgroundColor: "red",
  },
  blue: {
    flex: 1,
    backgroundColor: "blue",
  },
  orange: {
    flex: 1,
    backgroundColor: "orange",
  },
});
