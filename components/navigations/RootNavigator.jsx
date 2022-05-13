import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Feather} from 'expo-vector-icons';
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";


 const Tabs = createBottomTabNavigator();




const RootNavigator = () => {
    return (
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }} />
                <Tabs.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="search" color={color} size={25} />
                    ),
                }}
                 />
                
            </Tabs.Navigator>
    )
}

export default RootNavigator;