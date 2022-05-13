import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../screens/SearchScreen";
import RootNavigator from "./RootNavigator";
import Orders from "../../screens/Orders";
import Payment from "../payment/Payment";



const Stack = createNativeStackNavigator();


const StackNav = () => {
    return (
         <Stack.Navigator>
             {/* <Stack.Screen name="drawer" component={DrawerNav} options={{
                 headerShown: false
             }} /> */}
             <Stack.Screen name="Root" component={RootNavigator} options={{
                 headerShown: false
             }} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Payments"  component={Payment} />
         </Stack.Navigator>
        
    )
}


export default StackNav;