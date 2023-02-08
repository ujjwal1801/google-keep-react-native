import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AddNote from './src/addNote/addNote';
import NotesList from './src/notesList/notesList';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NotesList></NotesList>
        <AddNote></AddNote>
      </View>
    </Provider>
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
