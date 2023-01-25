import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import FinishOrder from "../pages/FinishOrder";

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: string | number;
    order_id: string;
  };
  FinishOrder: undefined;
};

const Stack = createNativeStackNavigator<StackPramsList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
      />
    </Stack.Navigator>
  );
}
