import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { AppScreens } from "../utils/constants";
import { Button, TextInput } from "react-native-paper";


const CreateTask = ({createNewTask}) => {
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
        <SafeAreaView>
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
        </SafeAreaView>
    )
}

export default CreateTask;