import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ItemProps {
    data: {
        id: string;
        name: string;
        amount: number | string;
        product_id: string;
}
}

export function ListItem() {
  return (
    <View style={styles.container}>
      <Text>Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
    