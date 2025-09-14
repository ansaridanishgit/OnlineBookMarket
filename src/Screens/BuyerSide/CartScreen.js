import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react-native";
import ChildHeader from "../../Components/Headers/ChildHeader";

export default function CartScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  // Demo books in cart
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "The Art of React",
      seller: "TechBooks Store",
      price: 29.99,
      quantity: 1,
      image: require("../../../assests/book2.jpeg"),
    },
    {
      id: "2",
      title: "JavaScript Mastery",
      seller: "Code Academy",
      price: 34.99,
      quantity: 2,
      image: require("../../../assests/book2.jpeg"),
    },
  ]);

  // Increase qty
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease qty
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Subtotal, tax, total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 8.0; // fixed for demo
  const total = subtotal + tax;

  const renderItem = ({ item }) => (
    <View style={styles.cartCard}>
      <Image source={item.image} style={styles.cartImage} />
      <View style={styles.cartInfo}>
        <Text style={styles.cartTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.seller}>{item.seller}</Text>
        <Text style={styles.cartPrice}>${item.price.toFixed(2)}</Text>

        {/* Quantity Controls */}
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => decreaseQty(item.id)}
          >
            <Minus size={16} color="#37474F" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => increaseQty(item.id)}
          >
            <Plus size={16} color="#37474F" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remove Button */}
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => removeItem(item.id)}
      >
        <Trash2 size={20} color="#E57373" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Header */}
            <ChildHeader navigation={navigation} title={'Cart'} />
      

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <ShoppingCart size={60} color="#9E9E9E" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
          {/* Cart Items */}
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            scrollEnabled={false}
          />

          {/* Order Summary */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
            </View>
            <View style={[styles.summaryRow, { marginTop: 6 }]}>
              <Text style={styles.summaryTotalLabel}>Total</Text>
              <Text style={styles.summaryTotalValue}>
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <TouchableOpacity
          style={[styles.checkoutBtn, { marginBottom: insets.bottom + 10 }]}
          onPress={() => alert("Proceed to Checkout")}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#37474F" },
  headerCount: { fontSize: 14, color: "#9E9E9E" },

  // Cart Card
  cartCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  cartInfo: { flex: 1, marginLeft: 12 },
  cartTitle: { fontSize: 16, fontWeight: "600", color: "#37474F" },
  seller: { fontSize: 13, color: "#757575", marginTop: 2 },
  cartPrice: { fontSize: 15, fontWeight: "700", color: "#00A3B5", marginTop: 4 },

  qtyRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  qtyBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 4,
  },
  qtyText: { fontSize: 15, fontWeight: "600", marginHorizontal: 10, color: "#37474F" },

  removeBtn: { padding: 6 },

  // Empty Cart
  emptyCart: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 16, color: "#9E9E9E", marginTop: 10 },

  // Order Summary
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },
  summaryTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10, color: "#37474F" },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", marginVertical: 2 },
  summaryLabel: { fontSize: 14, color: "#555" },
  summaryValue: { fontSize: 14, fontWeight: "600", color: "#37474F" },
  summaryTotalLabel: { fontSize: 15, fontWeight: "700", color: "#37474F" },
  summaryTotalValue: { fontSize: 16, fontWeight: "700", color: "#37474F" },

  // Checkout Btn
  checkoutBtn: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 0,
    backgroundColor: "#546E7A",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
