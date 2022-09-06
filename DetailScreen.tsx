import { NavigationContext, StackActions } from "@react-navigation/native";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";

export function DetailScreen() {
  const navigation = useContext(NavigationContext);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.dispatch(StackActions.pop());
      }}
    >
      <Card>
        <Card.Content>
          <Title>
            <Text>Detail-Screen</Text>
          </Title>
          <Paragraph>
            <Text>Go back home!</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
