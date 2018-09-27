import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import styles from "./Styles";

export default class NewHabitScreen extends React.Component {
  static navigationOptions = {
    title: "Add New Habit",
    headerStyle: {
      backgroundColor: "blue"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const itemId = this.props.navigation.getParam("itemId", "NO-ID");
    const otherParam = this.props.navigation.getParam(
      "otherParam",
      "some default value"
    );
    return (
      <View style={styles.screen}>
        <Text>New Habit Screen</Text>
        <Text>{itemId + ": " + otherParam}</Text>
        <Button
          title="Create New Habit"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
