import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { ArrowLeft } from "lucide-react-native";

export default function ChildHeader({ navigation, title }) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:15}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconWrapper}>
            <ArrowLeft size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    height: 70,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    padding: 5,
    marginRight:10
  },
  headerTitle: {
    fontSize: 20,
    color: "#000",
  },
});
