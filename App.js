import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/header'
import Timer from './src/timer'
import ActionBut from './src/actionButton'
import BodyImg from './src/bodyImg'



export default function App() {
  const MIN_TO_MILLISEC = 60000
  const SEC_TO_MILLISEC = 1000

  const [workTime, setWorkTime] = useState(25 * MIN_TO_MILLISEC);
  const [restTime, setRestTime] = useState(5 * MIN_TO_MILLISEC);
  const [status, setStatus] = useState('Default');
  let time = workTime
  let buttons
  let timer
  
  
  

  switch (status) {
    case 'Default':
      buttons = <ActionBut
        status={"Start"}
        message={"time to get back to work"}
        handleClick={() => setStatus('Working')}>
      </ActionBut>
      timer = <Timer status={"Default"} workTime={workTime} restTime={restTime}   setStatus ={(status) => setStatus(status) } ></Timer>
      break

    case 'Rest':
       buttons = <ActionBut
        status={"Skip"}
        message={"have a little break"}
        handleClick={() => setStatus("Default")}>
      </ActionBut>
      timer = <Timer status={"Rest"} workTime={workTime} restTime={restTime}   setStatus ={(status) => setStatus(status)}></Timer>
      break

    case 'Working':
      buttons =
        <View>
          <ActionBut
            status={"Abort"}
            message={"keep it up"}
            handleClick={() => setStatus("Default")}>
          </ActionBut>
          <ActionBut status={"Pause"} handleClick={() => setStatus("Pause")} ></ActionBut>
        </View>
      timer = <Timer status={"Working"} workTime={workTime} restTime={restTime}   setStatus ={(status) => setStatus(status)}></Timer>
      break

    case 'Pause':
      buttons = <View>
        <ActionBut
          status={"Abort"}
          message={"lets get back to it"}
          handleClick={() => setStatus("Default")}>
        </ActionBut>
        <ActionBut status={"Resume"} handleClick={() => setStatus("Working")} ></ActionBut>
      </View>
      
      timer = <Timer status={"Pause"} workTime={workTime} restTime={restTime}   setStatus ={(status) => setStatus(status)} ></Timer>
      break

    case 'Done':
      buttons =
        <View>
          <ActionBut
           status={"Rest"}
           message={"want to take a break?"}
            handleClick={() => setStatus("Rest")} ></ActionBut>
          <ActionBut status={"Skip"} handleClick={() => setStatus("Default")}></ActionBut>
        </View>
      timer = <Timer status={"Pause"} workTime={workTime} restTime={restTime}   setStatus ={(status) => setStatus(status)}  ></Timer>
      break
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header  workTime={workTime} restTime={restTime} setWorkTime={(time) => setWorkTime(time)} setRestTime={(time)=> setRestTime(time) }  setStatus ={(status) => setStatus(status) }></Header>
      {timer}
      <BodyImg status={status} ></BodyImg>
      {buttons}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F2F2',
  },
});






