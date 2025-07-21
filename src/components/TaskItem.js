import React from "react";
import { Image } from "react-native";
import { Button, Card, Chip, Text } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TaskItem = ({id, title, description, onComplete, onDelete, isComplete}) => {
    return (
        <Card>
            <Card.Title title={title} />
            {/* {isComplete && <Chip icon={'tag'}> Task Completed </Chip>}
            {isComplete && (<Icon name='check-square' size={20} color="#4F8EF7" />)} */}
            {isComplete && <Image source={require('./favicon.png')} />}
            <Card.Content>
                <Text variant="titleLarge">{description}</Text>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions style={[{width: '100%', justifyContent: 'space-between'}]}>
                <Button onPress={()=>onDelete(id)} style={[{backgroundColor: 'green'}]}>Delete</Button>
                <Button onPress={()=>onComplete(id)} >Complete</Button>
            </Card.Actions>
        </Card>
    )
}

export default TaskItem;