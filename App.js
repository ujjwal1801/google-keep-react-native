import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddNote from './src/addNote/addNote';
import NotesList from './src/notesList/notesList';

export default function App() {
  return (
    <View style={styles.container}>
      <NotesList></NotesList>
      <AddNote></AddNote>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
