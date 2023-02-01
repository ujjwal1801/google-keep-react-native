import { SafeAreaView } from "react-native";
import { View, Text } from "react-native-web"
import stylesFn from "./styles"

const styles = stylesFn();
const NotesList = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.noteContainer}> 
                    <Text style={styles.text}>Lorem Ipsum ahsvfhas fhbsahj fbjh asvjhva jh Lorem abskbas kfjbsaf</Text>
                </View>
                <View style={styles.noteContainer}> 
                    <Text style={styles.text}>Lorem Ipsum ahsvfhas fhbsahj fbjh asvjhva jh Lorem abskbas kfjbsaf</Text>
                </View>
                <View style={styles.noteContainer}> 
                    <Text style={styles.text}>Lorem Ipsum ahsvfhas fhbsahj fbjh asvjhva jh Lorem abskbas kfjbsaf</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NotesList