import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackPramsList } from "../../routes/app.routes";
import { api } from "../../services/api";

type RouteDetailParams = {
  FinishOrder: {
    number: number | string;
    order_id: string;
  };
};

type FinisherOrderRouteProps = RouteProp<RouteDetailParams, "FinishOrder">;

export default function FinishOrder() {
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
  const route = useRoute<FinisherOrderRouteProps>();

  async function handleFinish() {
    try{
      await api.put('/order/send', {
        order_id: route.params?.order_id,
      })

      navigation.popToTop();
    }catch(err){
      console.log('Erro ao finalizar pedido');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.title}>Mesa 20</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Feather name='shopping-cart' size={20} color="#1d1d2e" />
        <Text style={styles.textButton}>Finalizar pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e",
    paddingVertical: '5%',
    paddingHorizontal: '4%',
  },
  alert: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3fffa3",
    width: "65%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  textButton: {
    color: "#1d1d2e",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
});