import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Plus } from "lucide-react-native";
import ChildHeader from "../../Components/Headers/ChildHeader";

export default function MyBooksScreen({ navigation }) {
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "React Fundamentals",
      price: "$29.99",
      stock: 15,
      sales: 45,
      image: require("../../../assests/book1.jpg"),
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      price: "$34.99",
      stock: 8,
      sales: 32,
      image: require("../../../assests/book2.jpeg"),
    },
  ]);

  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.bookCard}>
      {/* Book Image */}
      <Image source={item.image} style={styles.bookImage} />

      {/* Book Details */}
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookMeta}>
          Stock: {item.stock} | Sales: {item.sales}
        </Text>
        <Text style={styles.bookPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <ChildHeader navigation={navigation} title="My Books" />

      {/* Books List */}
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderBook}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 15 }}
      />

      {/* Custom Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddNewBook")}
      >
        <Plus color="#fff" size={22} />
        <Text style={styles.floatingText}>Add New Book</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  bookCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  bookImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  bookMeta: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },
  bookPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#009688",
  },
  floatingButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#546E7A",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 18,
    elevation: 4,
  },
  floatingText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8,
  },
});
