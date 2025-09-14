import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card, Text, Button, Chip } from "react-native-paper";
import ChildHeader from "../../Components/Headers/ChildHeader"; // ✅ apna header import

const initialOrders = [
  {
    id: "1",
    product: "The Great Gatsby",
    buyer: "John Doe",
    email: "john@example.com",
    address: "123 Main St, New York, NY 10001",
    price: "$25.99",
    date: "2024-01-15",
    status: "Pending",
  },
  {
    id: "2",
    product: "1984",
    buyer: "Bob Johnson",
    email: "bob@example.com",
    address: "789 Pine Rd, Chicago, IL 60601",
    price: "$22.00",
    date: "2024-01-14",
    status: "Pending",
  },
  {
    id: "3",
    product: "To Kill a Mockingbird",
    buyer: "Jane Smith",
    email: "jane@example.com",
    address: "221B Baker Street, London",
    price: "$18.50",
    date: "2024-01-14",
    status: "Shipped",
  },
  {
    id: "4",
    product: "Pride and Prejudice",
    buyer: "Alice Brown",
    email: "alice@example.com",
    address: "742 Evergreen Terrace, Springfield",
    price: "$19.95",
    date: "2024-01-13",
    status: "Delivered",
  },
];

export default function OrderManagementScreen({ navigation }) {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id && order.status === "Pending"
        ? { ...order, status: "Shipped" }
        : order
    );
    setOrders(updatedOrders);
  };

  const renderPendingOrder = ({ item }) => (
    <Card style={styles.pendingCard}>
      <Card.Content>
        <View style={styles.rowBetween}>
          <Text style={styles.product}>{item.product}</Text>
          <Chip style={styles.pendingChip} textStyle={{ color: "#b76e00" }}>
            {item.status}
          </Chip>
        </View>
        <Text>{item.buyer}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.shipTo}>Ship to: {item.address}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained"
          onPress={() => updateStatus(item.id)}
          style={styles.shipButton}
        >
          Mark as Shipped
        </Button>
      </Card.Actions>
    </Card>
  );

  const renderAllOrder = ({ item }) => (
    <Card style={styles.allCard}>
      <Card.Content style={styles.rowBetween}>
        <View>
          <Text style={styles.product}>{item.product}</Text>
          <Text>{item.buyer}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        {item.status === "Shipped" && (
          <Chip style={styles.shippedChip} textStyle={{ color: "#0066cc" }}>
            Shipped
          </Chip>
        )}
        {item.status === "Delivered" && (
          <Chip style={styles.deliveredChip} textStyle={{ color: "#0a7d3b" }}>
            Delivered
          </Chip>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* ✅ ChildHeader added back */}
      <ChildHeader title="Order Management" navigation={navigation} />

      {/* Pending Orders */}
      <Text style={styles.sectionTitle}>Pending Orders</Text>
      <FlatList
        data={orders.filter((o) => o.status === "Pending")}
        keyExtractor={(item) => item.id}
        renderItem={renderPendingOrder}
        ListEmptyComponent={<Text>No pending orders 🎉</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* All Orders */}
      <Text style={styles.sectionTitle}>All Orders</Text>
      <FlatList
        data={orders.filter((o) => o.status !== "Pending")}
        keyExtractor={(item) => item.id}
        renderItem={renderAllOrder}
        ListEmptyComponent={<Text>No orders yet</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    color: "#333",
  },
  product: { fontSize: 16, fontWeight: "600", marginBottom: 2 },
  email: { fontSize: 12, color: "#666" },
  date: { fontSize: 12, color: "#999" },
  price: { fontSize: 14, fontWeight: "600", color: "#444" },
  shipTo: { marginTop: 4, fontSize: 13, color: "#333" },
  pendingCard: {
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#ff9800",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  allCard: { marginBottom: 10, borderRadius: 8, marginHorizontal: 16 },
  shipButton: { backgroundColor: "#546E7A" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pendingChip: { backgroundColor: "#fff3e0" },
  shippedChip: { backgroundColor: "#e3f2fd" },
  deliveredChip: { backgroundColor: "#e8f5e9" },
});
