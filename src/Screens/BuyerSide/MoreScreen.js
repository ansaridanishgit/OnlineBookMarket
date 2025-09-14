import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { BookOpen, BarChart3, ClipboardList, Menu } from "lucide-react-native";
import ChildHeader from "../../Components/Headers/ChildHeader";

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <ChildHeader navigation={navigation} title={"More"} />

      {/* Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('MyBooks')} style={styles.optionCard}>
          <BookOpen size={26} color="#546E7A" />
          <Text style={styles.optionText}>My Books</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('SalesDashboard')} style={styles.optionCard}>
          <BarChart3 size={26} color="#546E7A" />
          <Text style={styles.optionText}>Sales Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('OrderManagement')} style={styles.optionCard}>
          <ClipboardList size={26} color="#546E7A" />
          <Text style={styles.optionText}>Order Management</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#546E7A",
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal:15
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7F8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
