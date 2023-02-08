import { TextInput, Pressable, View, Text } from "react-native";
import React from "react";

import stylesFn from "./styles";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notesSlice";

const styles = stylesFn();
const AddNote = () => {

    const dispatch = useDispatch();

    const [value, onTextChange] = React.useState('')
    
    const addNoteToStore = (noteText) => {
        console.log(noteText)
        dispatch(
            addNote({
                id: crypto.randomUUID(),
                text: noteText,
            })
        )
        onTextChange('')
        
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.textbox} key={addNoteToStore} placeholder={'Add a new note'} value={value} onChangeText={onTextChange}></TextInput>
            <Pressable style={styles.addBtn} onPress={()=>{addNoteToStore(value)}}>
                <Text>+ Add</Text>
            </Pressable>
        </View>
    )
}

export default AddNote
