import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import MainContainer from "../components/mainContainer/mainContainer";
import MainWrapper from "../components/mainWrapper/MainWrapper";
import TopContainer from "../components/topContainer/TopContainer";
import SearchScreen from "./SearchScreen";


const HomeScreen = () => {
    return (
        <View>
            <TopContainer />
            <MainWrapper />
        </View>
    )
}


export default HomeScreen;