import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/BuyerSide/HomeScreen';
import BookDetails from '../Screens/BuyerSide/BookDetails';
import CartScreen from '../Screens/BuyerSide/CartScreen';
import MoreScreen from '../Screens/BuyerSide/MoreScreen';
import MyBooks from '../Screens/SellerSide/MyBooks';
import AddNewBook from '../Screens/SellerSide/AddNewBook';
import SalesDashboard from '../Screens/SellerSide/SalesDashboard';
import OrderManagement from '../Screens/SellerSide/OrderManagement';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
      <Stack.Screen name="MyBooks" component={MyBooks} />
      <Stack.Screen name="AddNewBook" component={AddNewBook} />
      <Stack.Screen name="SalesDashboard" component={SalesDashboard} />
      <Stack.Screen name="OrderManagement" component={OrderManagement} />
    </Stack.Navigator>
  );
};

export default AppStack;
