import React, { Components } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const actionBtn = (props) => {
    let message = null
    if (props.message !== undefined) {
        message = <Text style={styles.message}>  {props.message} </Text>

    }
    return (

        <View style={styles.container}>
            {message}
             <TouchableOpacity
                title={props.status}
                style={styles.button}
                onPress={props.handleClick}
            >
                <Text style={styles.buttonText}>{props.status}</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginBottom: 10,
        height: 34,
        width: 150,
        borderColor: '#707070',
        borderRadius: 35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    message: {
        marginBottom: 10,
        fontSize: 20,
        color: '#707070',

    },
    buttonText: {
        fontSize: 25,
        color: '#707070',
    }

})

export default actionBtn;