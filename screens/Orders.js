import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MainContainer from "../components/mainContainer/mainContainer";
import QuantitySelector from "../components/quantity/QuantitySelector";



const Orders = () => {
    const navigation = useNavigation();
    
    return (
        <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Payments")}
            >
                <View style={{
                    paddingTop: 30,

                }}>
                    <Text style={{textAlign: 'center',
                               fontSize: 25,
                               fontWeight: 'bold'}}>How many Plates will you love? </Text>
                </View>
                <View  style={{ 
                        backgroundColor: 'white',
                        marginTop: 20,
                        marginLeft: 10, }}
                >
                    <Image
                      source={{uri: "https://thumbs.dreamstime.com/z/white-bowl-african-cereal-nigerian-food-pap-ogi-placed-tray-red-yellow-colorful-pattern-tablecloth-top-view-191917095.jpg"}}
                      style={{
                        width: 390,
                        height: 250,
                        
                        alignContent: 'center',
                        alignItems: "center"
                      }}
                     />
                </View>
            </TouchableOpacity>
            <View>
                <QuantitySelector />
            </View>
        </View>
    )
}


export default Orders;