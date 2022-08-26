import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  IconButton,
  MD3Colors,
  ActivityIndicator,
} from "react-native-paper";
import UserService from "./service/UserService";
import { RandomUser, ResultsEntity } from "./model/RandomUser";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};

export default function App() {
  const [randomUser, setRandomUser] = useState<ResultsEntity>();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setLoading(true);
    UserService()
      .getRandomUser()
      .then((data) => {
        setRandomUser(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refresh]);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="bodyMedium">
          We are using React Paper. Looks nice, doesn't it?
        </Text>

        {!loading ? (
          <Image
            style={styles.logo}
            source={{ uri: randomUser?.picture.medium }}
          ></Image>
        ) : (
          <ActivityIndicator animating={true} color={MD3Colors.secondary0} />
        )}
        <IconButton
          icon="refresh"
          iconColor={theme.colors.primary}
          size={40}
          onPress={() => {
            setRefresh(!refresh);
          }}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
