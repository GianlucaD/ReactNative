import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  IconButton,
  MD3Colors,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Text,
} from "react-native-paper";
import { NotificationService } from "./services/NotificationService";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato", // overload primary color
    secondary: "yellow", // overload secondary color
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="bodyMedium">Hit the icon for notification</Text>
        <IconButton
          icon="thumb-up"
          iconColor={MD3Colors.primary0}
          size={40}
          onPress={() => {
            NotificationService()
              .notify()
              .then((res) => {
                console.log("looks like it worked");
              })
              .catch((err) => {
                console.log("err", err);
              });
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
