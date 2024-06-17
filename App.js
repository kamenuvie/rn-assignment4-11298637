import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react' 
import { StyleSheet, Text, TextInput, View, Button,TouchableOpacity,Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();

const AppScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('HomeScreen', { name, email });
  };
  
  return (
     <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.jobi}>Jobizz</Text>
        <View style={styles.container}>
          <Text style={styles.greeting}>Welcome Back 👋  </Text>
          <Text style={styles.greetingDescript}>Lets log in . Apply for jobs!</Text>
          <View style={styles.loginBox}>
        
            <TextInput style={styles.NameInput}
            placeholder='Name (e.g john kofi )'
            value={name}
            onChange={setName}
            />
        

            <TextInput style={styles.Emailbox}
            placeholder='Email ( john@gmail.com )'
            value={email}
            onChange={setEmail}
         
            />
            
          <Button title="Log in" onPress={handleLogin} />
          </View>
          

        
        </View>
        <View style ={styles.description}>
        <Text style ={styles.description1}>----------or continue with--------- </Text>
        </View>
        <View style={styles.socialButton}>
          <View style={styles.socialButtonbox1}>
          <TouchableOpacity style={styles.facebook}>
             <Image style={styles.facebookImage} source={require('./assets/fb.png')}/>

          </TouchableOpacity>
          </View>
          <View style={styles.socialButtonbox2}>
          <TouchableOpacity style={styles.facebook}>
             <Image style={styles.facebookImage} source={require('./assets/google.png')}/>

          </TouchableOpacity>
          </View>
          <View style={styles.socialButtonbox3}>
          <TouchableOpacity style={styles.facebook}>
             <Image style={styles.facebookImage} source={require('./assets/apple.png')}/>

          </TouchableOpacity>
          </View>
          

        </View>
        <TouchableOpacity>
        <View style ={styles.link}>
            <Text style ={styles.quest}>Haven't an account ? </Text>
            <Button title='register' />
          </View>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppScreen">
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    
 
  },
  jobi: {
      fontSize: 20,
      fontWeight: 'bold',
       paddingTop: "10%",
       paddingBottom:'5%',
       color: 'blue',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    
  },
  greetingDescript: {
    paddingBottom : 20,
    paddingRight: 70,

  },
  loginBox: {
    backgroundColor:"#eee",
    paddingTop: 10,
    paddingBottom: 75,
    borderRadius: 10,
    width: 300,
  },
  NameInput: {
    width: 300,
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 10,
    // backgroundColor: 'skyblue',
  },
  Emailbox: {
    width: 300,
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 10,
    // backgroundColor: 'skyblue',

  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    borderRadius: 60,
    
    
  }, 
  description:{
    alignItems: 'center',
    paddingBottom: 30,
  },
  socialButton: {
    flexDirection:"row",
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 10,
  },
  facebookImage: {
   fontSize: 0.5,
  
  },
  socialButtonbox1:{
    width: 30,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contained',
    flexWrap: 'wrap',
    paddingLeft:15
  },
  socialButtonbox2:{
    width: 30,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap'
  },
  socialButtonbox3:{
    width: 30,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    paddingRight: 60,
    
  },

  quest:{
justifyContent: 'center',
alignItems: 'center',
fontWeight: 'bold',
  },
  link:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
   
  },
  fword:{
    fontWeight: 'bold',
    color: 'blue',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    borderRadius: 60,
  },
  facebookImage : {
    fontSize: 20,
  }
});
