import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styles from "./Styles";


export default class HabitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("NewHabit", {
              itemId: 86,
              otherParam: "anything you want"
            })
          }
        >
          <Text> this.props.name </Text>
        </TouchableOpacity>
    );
  }
}