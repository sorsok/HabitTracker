import React from "react";
import {
  StyleSheet,
} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  button1: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: "stretch",
    padding: 10,
    margin: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  button2: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: "stretch",
    margin: 10,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  habits: {
    flex: 10,
    justifyContent: 'space-evenly',
    alignItems: "stretch",
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    margin: 10
  },
  bodyText: {
    fontSize: 20,
  },
  headerText:{
    fontSize: 30
  }
});