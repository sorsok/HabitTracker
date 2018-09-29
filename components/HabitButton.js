import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StatusBar,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./Styles";


export default class HabitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonStyle = styles.button1;
    if (this.props.id%2 === 1){
      buttonStyle = styles.button2;
    }
    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {buttonStyle}>
          <Text style = {styles.bodyText}>
            {this.props.name}
          </Text>
          <Image
            style = {styles.image}
            source = {require('../assets/images/caffeine.png')}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}