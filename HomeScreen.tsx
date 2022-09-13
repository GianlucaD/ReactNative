import {
  NavigationContext,
  StackActions,
  TabActions,
} from "@react-navigation/native";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Card, Paragraph, Text, Title } from "react-native-paper";

export function HomeScreen() {
  const navigation = useContext(NavigationContext);

  function gotoDetails() {
    navigation?.dispatch(TabActions.jumpTo("Details"));
  }
  return (
    <TouchableOpacity
      onPress={() => {
        gotoDetails();
      }}
    >
      <Card>
        <Card.Content>
          <Title>
            <Text>Home-Screen</Text>
          </Title>
          <Paragraph>
            <Text>Click for details</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
