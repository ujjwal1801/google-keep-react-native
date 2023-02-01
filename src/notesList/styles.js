import { StyleSheet } from "react-native"


const stylesFn = () => StyleSheet.create({
    text: {
      backgroundColor: '#202124',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '1.125rem',
      fontWeight: 400
    },
    noteContainer:{
        padding: 10,
        borderRadius: 8,
        border: '1px solid #5f6368',
        maxWidth: '45%',
        marginVertical: 10
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap: 'wrap'
    }
})

export default stylesFn
