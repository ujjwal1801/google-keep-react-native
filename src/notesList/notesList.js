import { SafeAreaView } from "react-native";
import { View, Text } from "react-native-web"
import stylesFn from "./styles"
import { useSelector } from "react-redux";

const styles = stylesFn();
const NotesList = () => {


    const data = useSelector(state => state.notes);

    return(
        <SafeAreaView>
            <View style={styles.container}>
                {
                    data.map(item=>{
                        return(
                            <View style={styles.noteContainer} key={item.id}> 
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                        )
                    })
                }
                
            </View>
        </SafeAreaView>
    )
}

export default NotesList