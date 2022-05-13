import React from "react";
import { View, StyleSheet, Text, FlatList, Platform, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { jsonData } from "../mock";



const MainContainer = () => {
  const navigation = useNavigation();
  
    return (
        <View>
            <Text style={{
                marginTop: 30,
                marginLeft: 10
            }}>Most Popular</Text>
            <FlatList
               ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({ highlighted }) => (
                  <View
                    
                  />
                ))
              } 
              data = { jsonData }
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor = {(item) => item.id}
              renderItem = {({ item, index, separators }) => (
                  <TouchableOpacity
                     onPress={() => navigation.navigate("Orders", {})}
                     
                    >
                    <View style={{ 
                        backgroundColor: 'white',
                        marginTop: 20,
                        marginLeft: 10, }}>
                        
                        <Image 
                          source={{ uri: item.image }}
                          style={{
                              width: 390,
                              height: 250,
                              
                              alignContent: 'center',
                              alignItems: "center"
                          }}
                         />
                        
                    </View>
                  </TouchableOpacity>
              )}
            />
        </View>
    )
}


export default MainContainer;