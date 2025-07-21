import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { AppScreens } from "../utils/constants";
import { Button, TextInput } from "react-native-paper";
import { Appbar } from 'react-native-paper';

const CreateTask = ({createNewTask, setCurrentScreen}) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const handleSubmit = () => {
        const newTask = {
            id: Date.now(),
            title: taskTitle, 
            description: taskDescription, 
            date: new Date().toLocaleString(),
            isCompleted: false
        };
        createNewTask(newTask);
    };

    return (
        <View>
            <Appbar style={[{height: 50, top: -5, backgroundColor:'red'}]}>
                <Appbar.BackAction onPress={() => {setCurrentScreen(AppScreens.HomeScreen)}} />
                <Appbar.Content title="Add Task" />
                {/* <Appbar.Action icon="calendar" onPress={() => {}} />
                <Appbar.Action icon="magnify" onPress={() => {}} /> */}
            </Appbar>
            <View style={[{backgroundColor: 'blue'}]}>
                <TextInput 
                    style={[{backgroundColor: 'orange', paddingHorizontal: 5, marginVertical: 10}]} 
                    mode="outlined" label={"Title"} 
                    placeholder="Enter Title" 
                    onChangeText={(text)=>setTaskTitle(text)}
                />
                <TextInput 
                    style={[{backgroundColor: 'green', paddingHorizontal: 5, minHeight: 100}]} 
                    mode="outlined" 
                    label={"Description"} 
                    placeholder="Enter Description" 
                    multiline
                    numberOfLines={5}
                    onChangeText={(text)=>setTaskDescription(text)}
                />
                <Button onPress={handleSubmit}>Save Task</Button>
            </View>
        </View>
    )
}

export default CreateTask;