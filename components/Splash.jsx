import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing, TouchableOpacity } from 'react-native';



const Splash = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const slideIn = useRef(new Animated.Value(0)).current;
    const width = useRef(new Animated.Value(10)).current;
    const height = useRef(new Animated.Value(10)).current;


    useEffect(() => {
        Animated.timing(
            width, {
                toValue: 100,
                duration: 450,
                useNativeDriver: false,
            },
        ).start();

        Animated.timing(
            height, {
                toValue: 100,
                duration: 450,
                useNativeDriver: false,
            },
        ).start();

        Animated.timing(spinValue, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
        }).start();
    }, [])
       

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'],
      });   

    const slideX = slideIn.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <View style={{
            alignItems: 'center',
            paddingTop: 50,
           
        }}>
            <Animated.Image 
               source={{ uri: "https://i.ibb.co/swrjmGG/Easyshare.png"}}
               style={{
                   width: width,
                   height: height,
                   alignItems: 'center',
                   justifyContent: 'center',
                   transform: [{
                    rotate: spin,
                    },
                    // {
                    //     opacity: spin.interpolate({
                    //         inputRange: [0, 1],
                    //     })
                    // }
                ]
               }}
            />
            
             <Animated.Text
                style={{
                    fontSize: 40,
                    transform: [{
                        translateX: slideX,
                            
                    }]
                }}
            >EasyShare</Animated.Text>
            <Animated.Image 
               source={{ uri: "https://i.ibb.co/dWVvhbB/Group.png"}}
               style={{
                   height: 80,
                   width: '90%',
                   resizeMode: 'contain',
                   alignItems: 'center',
                   justifyContent: 'center',
                   
               }}
            />
        </View>
    )
}

export default Splash;