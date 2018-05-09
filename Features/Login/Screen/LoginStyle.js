import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    input: {
        
        alignSelf: 'center',
        width:250,
        alignItems: 'center',
        padding:20,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#d6d7da',
        backgroundColor: '#ff7f50',
        // backgroundColor: 'transparent',
        marginBottom:50,
        marginTop:80,
    },
    username:{
        height:60,
        width:150,
        textAlign:'center',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20
    },
    password:{
        height:60,
        width:150,
        textAlign:'center',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 20
    },
    title:{
        marginTop:100,
        padding:20,
        borderColor: '#620414',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'powderblue',
        alignSelf: 'center',
        justifyContent: 'space-between',
        
        
       
    },
    titleText:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    }
});