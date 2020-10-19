import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';


const BodyImg = (props) => {
    let image
    switch (props.status) {
        case "Default":
            image = require("./images/Default.png")
            break
        case "Pause":
            image = require("./images/Default.png")
            break
        case "Done":
            image = require("./images/Done.png")
            break
        case "Working":
            image = require("./images/Working.png")
            break
        case "Rest":
            image = require("./images/Rest.png")
            break
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 0,
        alignItems: 'center',
    },
    image: {
        width: 310,
        height: 330,
    }
})

export default BodyImg; 