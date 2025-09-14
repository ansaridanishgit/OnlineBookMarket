import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-paper";
import ChildHeader from "../../Components/Headers/ChildHeader";

export default function SalesDashboard({ navigation }) {
  const [orders] = useState([
    {
      id: "1",
      product: "The Great Gatsby",
      buyer: "John Doe",
      status: "completed",
      date: "2024-01-15",
      price: "$25.99",
    },
    {
      id: "2",
      product: "To Kill a Mockingbird",
      buyer: "Jane Smith",
      status: "shipped",
      date: "2024-01-14",
      price: "$18.50",
    },
    {
      id: "3",
      product: "1984",
      buyer: "Bob Johnson",
      status: "pending",
      date: "2024-01-14",
      price: "$22.00",
    },
  ]);

  const [stats] = useState([
    { id: "1", label: "Total Revenue", value: "$2,547", change: "+12.5% from last month" },
    { id: "2", label: "Orders", value: "43", change: "+8.2% from last month" },
    { id: "3", label: "Books Sold", value: "67", change: "+15.3% from last month" },
    { id: "4", label: "Customers", value: "28", change: "-5.1% from last month" },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return { backgroundColor: "#E6F4EA", color: "#1E8E3E" };
      case "pending":
        return { backgroundColor: "#FFF8E1", color: "#F9A825" };
      case "shipped":
        return { backgroundColor: "#E3F2FD", color: "#1565C0" };
      case "cancelled":
        return { backgroundColor: "#FFEBEE", color: "#C62828" };
      default:
        return { backgroundColor: "#ECEFF1", color: "#37474F" };
    }
  };

  const renderStatCard = ({ item }) => (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
      <Text style={styles.statChange}>{item.change}</Text>
    </View>
  );

  const renderOrder = ({ item }) => {
    const statusStyle = getStatusStyle(item.status);
    return (
      <View style={styles.orderRow}>
        <View>
          <Text style={styles.orderProduct}>{item.product}</Text>
          <View style={styles.statusRow}>
            <View style={[styles.statusBadge, { backgroundColor: statusStyle.backgroundColor }]}>
              <Text style={[styles.statusText, { color: statusStyle.color }]}>
                {item.status}
              </Text>
            </View>
          </View>
          <Text style={styles.orderBuyer}>{item.buyer}</Text>
          <Text style={styles.orderDate}>{item.date}</Text>
        </View>
        <Text style={styles.orderPrice}>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ChildHeader navigation={navigation} title="Sales Dashboard" />

      {/* Stats Section */}
      <View style={styles.statsGrid}>
        {stats.map((s) => (
          <View key={s.id} style={styles.statCard}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
            <Text style={styles.statChange}>{s.change}</Text>
          </View>
        ))}
      </View>

      {/* Recent Orders */}
      <View style={styles.ordersCard}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
  },
  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  statLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  statChange: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  ordersCard: {
    backgroundColor: "#fff",
    margin: 12,
    borderRadius: 10,
    padding: 14,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111827",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
  },
  orderProduct: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  statusRow: {
    flexDirection: "row",
    marginTop: 4,
  },
  statusBadge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 2,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  orderBuyer: {
    fontSize: 13,
    color: "#374151",
    marginTop: 2,
  },
  orderDate: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 6,
  },
});
