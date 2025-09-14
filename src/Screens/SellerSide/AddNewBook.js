import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput, Text } from "react-native-paper";
import { ImagePlus } from "lucide-react-native";
import ChildHeader from "../../Components/Headers/ChildHeader";

export default function AddNewBook({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = () => {
    if (!title || !price || !stock) {
      alert("Please fill all required fields");
      return;
    }
    // For now just alert
    alert("Book Added Successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ChildHeader navigation={navigation} title="Add New Book" />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Title */}
        <TextInput
          label="Book Title"
          value={title}
          onChangeText={setTitle}
          mode="outlined"
          style={styles.input}
        />

        {/* Description */}
        <TextInput
          label="Description"
          value={desc}
          onChangeText={setDesc}
          mode="outlined"
          style={styles.input}
          multiline
          numberOfLines={4}
        />

        {/* Price */}
        <TextInput
          label="Price (₹)"
          value={price}
          onChangeText={setPrice}
          mode="outlined"
          style={styles.input}
          keyboardType="numeric"
        />

        {/* Stock */}
        <TextInput
          label="Stock Quantity"
          value={stock}
          onChangeText={setStock}
          mode="outlined"
          style={styles.input}
          keyboardType="numeric"
        />

        {/* Image Upload */}
        <TouchableOpacity
          style={styles.imageUpload}
          onPress={() => alert("Image Picker will open")}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.bookImage} />
          ) : (
            <>
              <ImagePlus color="#546E7A" size={28} />
              <Text style={styles.uploadText}>Upload Book Image</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>Save Book</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  imageUpload: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  bookImage: {
    width: 100,
    height: 120,
    resizeMode: "cover",
    borderRadius: 8,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#546E7A",
    fontWeight: "500",
  },
  saveBtn: {
    backgroundColor: "#546E7A",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
