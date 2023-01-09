import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function Dashboard() {
  const [number, setNumber] = useState('');

  async function openOrder() {
    if(number === '') {
      alert('Digite o numero da mesa')
      return;
    }
    //precisa fazer a requisição e abrir a mesa e navegar para a tela de pedidos
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Numero da mesa"
        placeholderTextColor={"#f0f0f0"}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#101026",
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 22,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
});
