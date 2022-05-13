import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { jsonData2 } from "../mock";


const SearchComponent = () => {
    const navigation = useNavigation();


    const [search, setSearch ] = useState('');
    const [filterDataSource, setFilterDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const api = jsonData2;

    useEffect(() => {
        fetch(api)
        .then((response) => response.json())
        .then((responseJson) => {
            setFilterDataSource(responseJson);
            setMasterDataSource(responseJson);

        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterDataSource(newData);
            setSearch(text);
        }
        else {
            setFilterDataSource(masterDataSource);
            setSearch(text);
        }
    }

    const ItemSeparatorView = () => {
        return (
            <View style={{
                height: 0.5,
                width: '100%', 
                backgroundColor: '#c8c8c8'
            }}
             />
        )
    }

    const renderHeader = () => {
        return (
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Type Here..."
                value={search}
          />
        )
    }
        return (
        <View style={{
            paddingLeft: 6,
        }}>

            <FlatList
               data={jsonData2}
               keyExtractor={(item, index) => index.toString()}
               ListHeaderComponent={renderHeader}
               ItemSeparatorComponent={ItemSeparatorView}
               renderItem={({ item }) => (
                   <View>
                       <TouchableOpacity
                          style={{
                            paddingTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => navigation.navigate("Orders")}
                       >
                            <Text style={{
                                textAlign: 'center',
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>{'.'}{item.name}</Text>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 100,
                                }}
                            />
                       </TouchableOpacity>
                   </View>
               )}
             />
        </View>
    )
}


export default SearchComponent;