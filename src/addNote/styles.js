import { StyleSheet } from "react-native"

const stylesFn = () => StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    textbox:{
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '85%',
        padding: 10
    },
    addBtn:{
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 10,

    }

})

export default stylesFn