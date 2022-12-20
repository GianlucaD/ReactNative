import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import "intl";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { de, enGB, registerTranslation } from "react-native-paper-dates";
import TimePickerPage from "./TimePickerPage";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato", // overload primary color
    secondary: "yellow", // overload secondary color
  },
  fonts: {
    bodyMedium: "Roboto",
  },
};

export default function App() {
  registerTranslation("de", de), registerTranslation("en-GB", enGB);

  const [visible, setVisible] = useState(false);
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
        <TimePickerPage></TimePickerPage>
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
