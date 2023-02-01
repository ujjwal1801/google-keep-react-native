import { TextInput, Pressable, View, Text } from "react-native";
import React from "react";

import stylesFn from "./styles";

const styles = stylesFn();
const AddNote = () => {
    const [value, onTextChange] = React.useState('Add new Note')
    return(
        <View style={styles.container}>
            <TextInput style={styles.textbox} key={addNote} value={value} onChangeText={onTextChange}></TextInput>
            <Pressable style={styles.addBtn} onPress={()=>{addNote(value)}}>
                <Text>+ Add</Text>
            </Pressable>
        </View>
    )
}

export default AddNote

const addNote = (noteText) => {

}