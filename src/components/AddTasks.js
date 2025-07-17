import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const AddTasks = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onInputTask = function(x) {
    console.log("x : ",x);
    setTask(x);
  }

  const addItemToList = () => {
    setTaskList([...taskList, {id: taskList.length, data: task}]);
  }
  console.log("tasklist : ",taskList);
  
  const deleteItem = (id) => {
    console.log('delete id : ',id, taskList);
    taskList.pop(id);
    setTaskList(taskList)
  }

  const renderTaskItems = ({item}) => {
    return (
        <View>
            <Text>
                {item.id}    {item.data}
            </Text>
            <Text onPress={()=>{deleteItem(item.id)}}> Delete </Text> 
        </View>
    )
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput placeholder='enter task' style={styles.inputView} value={task} onChangeText={onInputTask}/>
            <View style={[styles.inputButton]}>
                <Text style={[styles.inputTextView]} onPress={addItemToList}> Add </Text>
            </View>
        </View>
        <FlatList
            data={taskList}
            renderItem={(d)=>renderTaskItems(d)}
            keyExtractor={(x)=>x.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'yellow',
    margin: 10
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor:'yellow',
    margin: 10
  },
  inputView: {
    width: '80%',
    height: 50,
    backgroundColor: 'green',
    color: 'yellow',
  },
  inputButton: {
    width: '20%',
    height: 50,
    backgroundColor: 'orange',
    color: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AddTasks;
