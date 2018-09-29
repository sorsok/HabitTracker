import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from "react-native";
import styles from "./Styles";
import NewHabitScreen from "./NewHabitScreen";
import HabitButton from "./HabitButton";


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.ROW_SIZE = 2;
    this.state = ({
      habits: ["Caffeine", "Nicotine", "Sugar", "TV", "Gaming", "Working Out"]
    })
  }

  renderHabitButton(i) {
    return (
      <HabitButton
        key={i}
        id = {i}
        name={this.state.habits[i]}
      />
    );
  }
  renderAddNewHabitButton(){
    return (
      <HabitButton
        key={this.state.habits.length}
        id = {i}
        name={"Add New"}
      />
    );

  }
  renderRow(n){
    const row = [];
    let rowStyle = styles.row1;
    for (let i = n*this.ROW_SIZE; i < n*this.ROW_SIZE + this.ROW_SIZE; i++) {
      if (i === this.state.habits.length){
        row.push(this.renderAddNewHabitButton())
      }
      else{
        row.push(this.renderHabitButton(i));
      }
    }
    if (n%2==1){
      rowStyle = styles.row2;
    }
    return (
      <View
        style = {rowStyle}
        key = {n}>
        {row}
      </View>
    );
  }
  render() {
    let habits_component = [];
    for (let i = 0; i < Math.ceil(this.state.habits.length/this.ROW_SIZE); i++) {
      habits_component.push(this.renderRow(i));
    }
    return (
      <SafeAreaView style={styles.screen}>
        <View style = {styles.container}>
          <Text style = {styles.headerText}>
            Habits
          </Text>
        </View>
        <View style = {styles.habits}>
            {habits_component}
        </View>
      </SafeAreaView>
    );
  }
}