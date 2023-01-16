import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ItemProps {
    data: {
        id: string;
        name: string;
        amount: number | string;
        product_id: string;
}
}

export function ListItem({ data }: ItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{data.amount} - {data.name}</Text>
      <TouchableOpacity>
        <Feather name="trash-2" size={25} color="#ff3f4b" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#101026",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 12, 
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: "#8a8a8a",
    },
});
    