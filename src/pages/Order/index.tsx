import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

type RouteDetailParams = {
  Order:{
    number: number | string;
    order_id: string;
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Order</Text>
      <Text>
        {route.params.number}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
