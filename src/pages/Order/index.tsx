import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { api } from "../../services/api";
import { ModalPicker } from "../../components/ModalPicker";
import { ListItem } from "../../components/ListItem";

type RouteDetailParams = {
  Order: {
    number: number | string;
    order_id: string;
  };
};

type CategoryProps = {
  id: string;
  name: string;
};

type ProductProps = {
  id: string;
  name: string;
};

type ItemProps = {
  id: string;
  name: string;
  amount: number | string;
  product_id: string;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<
    CategoryProps | undefined
  >();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [productSelected, setProductSelected] = useState<
    ProductProps | undefined
  >();
  const [modalProductVisible, setModalProductVisible] = useState(false);
  const [amount, setAmount] = useState("1");
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get("/category");
      setCategory(response.data);
      setCategorySelected(response.data[0]);
    }

    loadInfo();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/category/product", {
        params: {
          category_id: categorySelected?.id,
        },
      });

      setProducts(response.data);
      setProductSelected(response.data[0]);
    }

    loadProducts();
  }, [categorySelected]);

  async function handleCloseOrder() {
    try {
      await api.delete("/order", {
        params: {
          order_id: route.params?.order_id,
        },
      });

      navigation.goBack();
    } catch (err) {
      console.log(err);
    }

    function handleChangeCategory(item: CategoryProps) {
      setCategorySelected(item);
    }

    function handleChangeProduct(item: ProductProps) {
      setProductSelected(item);
    }

    async function handleAdd() {
      const response = await api.post("/order/add", {
        order_id: route.params?.order_id,
        product_id: productSelected?.id,
        amount: Number(amount),
      });

      let data = {
        id: response.data.id,
        name: productSelected?.name as string,
        amount: amount,
        product_id: productSelected?.id as string,
      };

      setItems((oldArray) => [...oldArray, data]);
    }

    async function handleDeleteItem(item_id: string) {
      await api.delete("/order/remove", {
        params: {
          item_id: item_id,
        },
      });

      //após remover da api remove esse item da lista
      let removeItem = items.filter( item => {
        return (item.id !== item_id)
      })

      setItems(removeItem);
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mesa {route.params.number}</Text>
          {items.length === 0 && (
            <TouchableOpacity onPress={handleCloseOrder}>
              <Feather name="trash-2" size={28} color="#ff3f4b" />
            </TouchableOpacity>
          )}
        </View>

        {category.length !== 0 && (
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalCategoryVisible(true)}
          >
            <Text style={{ color: "#fff" }}>{categorySelected?.name}</Text>
          </TouchableOpacity>
        )}

        {products.length !== 0 && (
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalProductVisible(true)}
          >
            <Text style={{ color: "#fff" }}>{productSelected?.name}</Text>
          </TouchableOpacity>
        )}

        <View style={styles.qtdContainer}>
          <Text style={styles.qtdText}>Total: R$ 0,00</Text>
          <TextInput
            style={[styles.input, { width: "60%", textAlign: "center" }]}
            placeholderTextColor="#f0f0f0"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { opacity: items.length === 0 ? 0.3 : 1 }]}
            disabled={items.length === 0}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem data={item} deleteItem={handleDeleteItem} />}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 24 }}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalCategoryVisible}
        >
          <ModalPicker
            handleCloseModal={() => setModalCategoryVisible(false)}
            options={category}
            selectedItem={handleChangeCategory}
          />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalProductVisible}
        >
          <ModalPicker
            handleCloseModal={() => setModalProductVisible(false)}
            options={products}
            selectedItem={handleChangeProduct}
          />
        </Modal>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: "5%",
      backgroundColor: "#1d1d2e",
      paddingEnd: "4%",
      paddingStart: "4%",
    },
    header: {
      flexDirection: "row",
      marginBottom: 12,
      alignItems: "center",
      marginTop: 24,
    },
    title: {
      fontSize: 30,
      color: "#fff",
      marginRight: 14,
      fontWeight: "bold",
    },
    input: {
      backgroundColor: "#101026",
      borderRadius: 4,
      width: "100%",
      height: 40,
      marginBottom: 12,
      justifyContent: "center",
      paddingHorizontal: 8,
      color: "#fff",
      fontSize: 20,
    },
    qtdContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    qtdText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    buttonAdd: {
      backgroundColor: "#3fd1ff",
      borderRadius: 4,
      height: 40,
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#101026",
      fontSize: 18,
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#3fffa3",
      borderRadius: 4,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      width: "75%",
    },
  });
}
