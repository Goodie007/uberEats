import React from "react";
import { View, Text, FlatList, Platform, SafeAreaView, ScrollView } from 'react-native';
import MainContainer from "../mainContainer/MainContainer";


const MainWrapper = () => {
    return (
        <SafeAreaView>
            <ScrollView>
               <MainContainer />
               <MainContainer />
               <MainContainer /> 
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default MainWrapper;