import React, { useState} from 'react'
import { StyleSheet, View, Text, Vibration } from 'react-native'


const Timer = (props) => {
    const MIN_TO_MILLISEC = 60000
    const SEC_TO_MILLISEC = 1000
    const [time, setTime] = useState(props.workTime)
    let timeoutVar
    
    function timeout() {
        timeoutVar = setTimeout(() => setTime(time - 500), 500)
        if (!(props.status === "Working" || props.status === "Rest")) {
            clearTimeout(timeoutVar)
        }
    }

    if (props.status === "Default" && time !== props.workTime) {
        setTime(props.workTime)
    }
    else if (time <= 0) {
        Vibration.vibrate(3 * SEC_TO_MILLISEC)
        if (props.status === "Working") {
            setTime(props.restTime)
            props.setStatus('Done')

        } else {
            props.setStatus('Default')
        }
    } else if (props.status === "Working" || props.status === "Rest") {
        timeout()
    } else if (props.status === "Pause") {
        clearTimeout(timeoutVar)
    }
    return (
        <View View style={styles.parentBox} >
            <View style={styles.box} >
                <Text style={styles.time}>{('0' + (Math.floor((Math.round(time / SEC_TO_MILLISEC) * SEC_TO_MILLISEC) / MIN_TO_MILLISEC))).slice(-2)}:
                {('0' + ((((((Math.round(time / SEC_TO_MILLISEC) * SEC_TO_MILLISEC) % MIN_TO_MILLISEC)) / SEC_TO_MILLISEC)).toFixed(0))).slice(-2)}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    time: {
        textAlign: 'center',
        fontSize: 50,
        color: '#707070',

    },
    box: {
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 36,
        width: 205,
        height: 83,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: '#707070',
        borderRadius: 35,
        borderWidth: 1,
    },
    parentBox: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Timer; 