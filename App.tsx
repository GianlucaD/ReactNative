import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import "./i18n/config";

export default function App() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{t("title")}</Text>
      <Text>{t("description.welcome")}</Text>
      <StatusBar style="auto" />
    </View>
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
