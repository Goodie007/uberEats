import React from 'react';
import { View,
   Text, 
   FlatList, 
   StyleSheet, 
   TouchableHighlight,
    Platform, Image,
     TouchableOpacity } from 'react-native';
import { jsonData } from '../mock';
import SearchScreen from '../../screens/SearchScreen';
import { useNavigation } from '@react-navigation/native';




const TopContainer = () => {
  const navigation = useNavigation();

    return (
        <View>
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
                     onPress={() => navigation.navigate("Orders")}
                     
                    >
                    <View style={{ 
                        backgroundColor: 'transparent',
                        marginTop: 20,
                        marginLeft: 10, }}>
                        
                        <Image 
                          source={{ uri: item.image }}
                          style={{
                              width: 120,
                              height: 120,
                              borderRadius: 120,
                              alignContent: 'center',
                              alignItems: "center"
                          }}
                         />
                        <Text style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            textAlign: 'center'
                        }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
              )}
            />
        </View>
    )
}

export default TopContainer;