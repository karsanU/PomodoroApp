import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Platform  } from 'react-native';
import Constants from 'expo-constants';


const Header = (props) => {
    const MIN_TO_MILLISEC = 60000
    let pomoInput
    let restInput
    const invalidNumberAlert = () => {
        if (Platform.OS === 'web') {
            alert(`Please enter a valid number`)
        }
        else {
            Alert.alert(
                "Invalid Number",
                "Please enter a valid 2 digt number",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        }
    }

    const doesMeetMinReq = () => {
        if (Platform.OS === 'web') {
            alert(`Time must between 1 to 99 minutes`)
        }
        else {
            Alert.alert(
                "Invalid Entry",
                "Pomodoro must atleast be 5 mintues ",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                ],
                { cancelable: false }
            );
        }
    }


    function validifyNaturalNum(num) {
        if (!isNaN(num)) {
            if (num <= 1 || num > 99) {
                doesMeetMinReq()
                return false
            } else return true
        } else {
            invalidNumberAlert()
            pomoInput.clear()
            restInput.clear()
            return false
        }

    }

    function handleRestInput(restTime) {
        if (validifyNaturalNum(restTime)) {
            props.setRestTime(restTime * MIN_TO_MILLISEC)
            props.setStatus('Default')
        }
    }
    function handleWorkInput(workTime) {
        if (validifyNaturalNum(workTime)) {
            props.setWorkTime(workTime * MIN_TO_MILLISEC)
            props.setStatus('Default')
        }
    }


    return (
        <View style={styles.header}>
            <Text style={styles.heading} >Pomodoro</Text>

            <View style={styles.pomodTimeContainer}>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText} > Work</Text>
                    <TextInput
                        style={styles.inputBox}
                        ref={input => { pomoInput = input }}
                        keyboardType={'numeric'}
                        maxLength={2}
                        placeholder={props.workTime / MIN_TO_MILLISEC + ''}
                        onSubmitEditing={(event) => handleWorkInput(Number(event.nativeEvent.text))}
                    />
                </View >

                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}> Break</Text>
                    <TextInput
                        style={styles.inputBox}
                        ref={input => { restInput = input }}
                        keyboardType='numeric'
                        maxLength={2}
                        placeholder={props.restTime / MIN_TO_MILLISEC + ''}
                        onSubmitEditing={(event) => handleRestInput(Number(event.nativeEvent.text))}
                    />
                </View>

            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 5,
        paddingLeft: 20,
        width: "100%",
        height: 60 + Constants.statusBarHeight,
        backgroundColor: '#DABBBB',
        flexDirection: "row",
    },
    heading: {
        backgroundColor: '#DABBBB',
        fontSize: 30,
        color: "#707070",
        flexGrow: 1
    },
    inputBox: {
        borderRadius: 35,
        width: 45,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#707070',
        textAlign: 'center',
        marginHorizontal: 5
    },
    inputContainer: {
        paddingTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputText: {
        color: "#707070",
    },

})

export default Header; 