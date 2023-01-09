import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";

export type StackPramsList = {
  Dashboard: undefined;
  Order: {
    number: string | number;
    order_id: string;
  }
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
    </Stack.Navigator>
  );
}
