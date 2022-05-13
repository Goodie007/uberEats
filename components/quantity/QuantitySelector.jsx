import React, { useState } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';


const QuantitySelector = () => {
    const [quantity, setQuantity ] = useState('');

    const onMinus = () => {
        setQuantity(Math.max(0, quantity -1))
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.root}>
            <Pressable 
               onPress={onMinus}
               style={styles.button}
            >
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable 
               onPress={onPlus}
               style={styles.button}
            >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
	root: {
        marginLeft: 140,
        marginTop: 40,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#e3e3e3',
		width: 150,
		justifyContent: 'space-between',
        
	},

	button: {
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d1d1d1'
	},

	buttonText: {
		fontSize: 30,
	},

	quantity: {
		color: '#007eb9',
	}
})


export default QuantitySelector;