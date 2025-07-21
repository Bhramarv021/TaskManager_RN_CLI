import React from "react";
import { AppScreens } from "../utils/constants";
import { View, StatusBar, FlatList } from "react-native";
import { Button, Chip } from "react-native-paper";
import TaskItem from "../components/TaskItem";

const HomeScreen = ({tasks, onTaskComplete, onTaskDelete, changeScreen}) => {
    return (
        <View>
            <StatusBar backgroundColor={'black'} barStyle={"dark-content"}/>
            <Button mode="outlined"> ALL TASKS </Button>
            <Chip onPress={()=>changeScreen(AppScreens.AddTaskScreen)}>Add New Task</Chip>
            <FlatList 
                data={tasks}
                keyExtractor={(item, index)=> item.title + index}
                renderItem={(iter)=>{
                    return(
                        <TaskItem 
                            id={iter.item.id} 
                            title={iter.item.title} 
                            date={iter.item.date} 
                            description={iter.item.description} 
                            isComplete={iter.item.isComplete}
                            onComplete={(id)=>onTaskComplete(id)}
                            onDelete={(id)=>onTaskDelete(id)}
                        />
                    )}
                }
            />
        </View>
    )
}

export default HomeScreen;