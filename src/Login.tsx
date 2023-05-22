import * as React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Home from './Home';
import { useNavigation, } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HomeScreenNavigationProp = NativeStackNavigationProp<
  
  {Home: any}
>;
const Login = () =>{

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handlePress = () => {
        
      navigation.navigate('Home');
    };

   return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome!!</Text>
       <TextInput style={styles.input} placeholder='name' maxLength={50} />

       <TextInput style={styles.input}  placeholder='last name' maxLength={50} />


       <TouchableOpacity style={styles.submit} onPress={handlePress}>
            
            <Text style={styles.inputText}>Submit</Text>
           
        </TouchableOpacity> 

    </View>
   )

}






const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifycontent:'center',
        padding:16,
        height:'100%'
    },

    input:{
        flex:0,
        padding:14,
        marginBottom:7,
        width: '70%',
        height:'10%',
        fontSize:20,
        backgroundColor:'gray',
        borderRadius: 30,

    },

    text:{
        fontSize:45,
        marginBottom:30,
    },

    submit:{
        flex:0,
        padding:14,
        marginBottom:7,
        width: '70%',
        height:'10%',
        fontSize:90,
        backgroundColor:'#005792',
        borderRadius: 30,
        
       
    },

    inputText:{
        flex:0,
        justifyContent:'center',
        alignContent:'center',
        marginLeft:60,
        fontSize:30,
        color:'white'

    }

})
export default Login;