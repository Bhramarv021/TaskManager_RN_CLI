import React, { useState } from "react";
import { View } from "react-native";
import { AppScreens, Dummy_Tasks } from "../utils/constants";
import HomeScreen from "../screens/HomeScreen";
import CreateTask from "../screens/CreateTask";

const AppManager = () => {
    const [currentScreen, setCurrentScreen] = useState(AppScreens.HomeScreen);
    const [tasks, setTasks] = useState([...Dummy_Tasks]);

    const handleTaskComplete = (id) => {
        const completedTaskIndex = tasks.findIndex((t)=>t.id === id);
        const newTasksList = [...tasks];
        newTasksList[completedTaskIndex] = {
            ...newTasksList[completedTaskIndex],
            isComplete: true
        }
        setTasks(newTasksList);
    }

    const handleTaskDelete = (id) => {
        setTasks((prev) => prev.filter((data) => data.id !== id));
    }

    const createNewTask = (task) => {
        setTasks((prev) => [...prev, {...task}]);
        setCurrentScreen(AppScreens.HomeScreen);
    }
    
    return (
        <View>
            {currentScreen === AppScreens.AddTaskScreen ? 
                <CreateTask createNewTask={createNewTask} setCurrentScreen={setCurrentScreen} />
                :
                <HomeScreen 
                    tasks={tasks}
                    onTaskComplete={(id)=>handleTaskComplete(id)}
                    onTaskDelete={handleTaskDelete}
                    changeScreen={(screenName)=>setCurrentScreen(screenName)}
                />
            }
        </View>
    )
}

export default AppManager;