import {statusBar} from 'expo-status-bar';
import {View, Text, StyleSheet,Image,TextInput,} from 'react-native';
import React from 'react';
// import { Icon } from 'react-native-vector-icons/Icon';

const HomeScreen = ({ route }) => {
    const { name, email } = route.params ; 

    return (
      <View style = {styles.big_container}>
      <View style = {styles.mini_container}>
        <View style = {styles.container1}>
        <Text >Hello: {name}!</Text>
        <Text>Email: {email}</Text>
        </View>
        <View style = {styles.container2}>
          <Image style= {styles.profile} source = {require('./assets/young-woman.png')}/>
        </View>
        </View>

        {/*
            second mini container for search field  */}

        <View style = {styles.search_container}>
        <View style = {styles.Search_field}>
        
        <TextInput style={styles.Search}
            placeholder=' 🔍  Search a job for position'
         
            />
        <View style = {styles.menu}>
        <Image style= {styles.profile} source = {require('./assets/settings.png')}/>

       
        </View>
        </View>
        </View>

        {/*
            third mini container for search field  */}
            
            <View style = {styles.content}>
              <Text style = {styles.F_jobs}>Featured Jobs</Text>
              <Text style = {styles.F_All}> see all</Text>

            </View>
            <View style = {styles.Trans_Card}>
              <View  style = {styles.FB_Soft}>
              <View style = {styles.FB_Icon}>
                <Image style= {styles.fb_icon} source = {require('./assets/fb.png')}/>
              </View>
              
              <View style = {styles.Card_texts} >
              <Text style = {styles.Card_career}>Software Engineer </Text>
              <Text style = {styles.face_buk}>Facebook </Text>
              
              </View>
              
              </View>
              <View  style = {styles.cash_location}>
              <View style = {styles.cash} >
              <Text  style = {styles.money}>$180,00</Text>
              </View >
              <View style = {styles.location} >
              <Text style = {styles.loc} >Accra Ghana</Text>
              </View>
              </View>
              
              
            </View>
           
            <View style = {styles.content}>
              <Text style = {styles.F_jobs}>Popular Jobs</Text>
              <Text style = {styles.F_All}> see all</Text>

            </View>
            <View style = {styles.Job_Roles} >
            <View style = {styles.Icon1}>
                <Image style= {styles.burger} source = {require('./assets/burger-king.png')}/>
              </View>
              <View style = {styles.burg}>
                <Text style = {styles.Jr}>Jr Executive</Text>
                <Text>Burger King</Text>
              </View>
              <View style = {styles.burg1}>
                <Text style = {styles.paint0}>$96,000/y</Text>
                <Text>Los Angels, US</Text>
              </View>
            </View>
            <View style = {styles.Job_Roles} >
            <View style = {styles.Icon1}>
                <Image style= {styles.beats} source = {require('./assets/beats.png')}/>
              </View>
              <View style = {styles.burg}>
                <Text style = {styles.paint} >Product Manager</Text>
                <Text>Beats</Text>
              </View>
              <View style = {styles.burg}>
                <Text style = {styles.paint1}>$84,000/y</Text>
                <Text >Florida, US</Text>
              </View>
            </View>
            <View style = {styles.Job_Roles} >
            <View style = {styles.Icon1}>
                <Image style= {styles.facebook} source = {require('./assets/fb.png')}/>
              </View>
              <View style = {styles.burg}>
                <Text style = {styles.ProMag}>Product Manager</Text>
                <Text>Facebook</Text>
              </View>
              <View style = {styles.burg}>
                <Text style = {styles.paint2}>$86,000/y</Text>
                <Text>Florida, US</Text>
              </View>
            </View>

      </View>
    );
  };
  export default HomeScreen;
  

  const styles = StyleSheet.create(
    {
      big_container: {
        flex: 1,
    // backgroundColor:'#ccc',
    
      },
     
      mini_container:{
        height: '10%',
        width: '100%',
        backgroundColor:'#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
      },
      container1: {
        height: '70%',
        width: '20%',
        // backgroundColor:'skyblue',
        borderColor: 'black',
        
      },
     container2: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      height: '70%',
      width: '20%',
      flexWrap: 'wrap',
      
     },
     profile: {
      height: '100%',
      width: '70%',
      resizeMode: 'cover',
      borderRadius: 100,
     },
     search_container: {
      height: '13%',
        width: '120%',
        backgroundColor:'#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
      },
      Search_field: {
        height: '100%',
        width: '80%',
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        marginTop: 10,
        // borderWidth: 2,
 
     },
     Search: {
      width: 250,
      height: 55,
      padding: 10,
      borderWidth: 2,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 20,
      backgroundColor:'#eee',
      color: '#ccc'
     },
     menu: {
      height: 55,
      width: 60,
      borderRadius: 120,
      borderWidth: 2,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 10,
      marginRight: 10,
      resizeMode: 'cover',
      paddingLeft: 10,
     },
     content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
     },
     F_jobs: {
     fontSize: 15,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
    
     },
     F_All: {
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 30,
      paddingTop: 10,
      paddingBottom: 10,
      color: 'black',
      textDecorationLine: 'underline',
     },
     Trans_Card: {
      height: '27%',
      width: '75%',
      backgroundColor: '#1e90ff',
      borderBlockColor: '#1e90ff',
      borderRadius: 30,
      marginLeft: 10,
      borderWidth: 1,
    
   

      
     },
     FB_Icon: {
      height: 50,
      width: 55,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderRadius: 20,
      marginLeft: 20,
      marginTop: 20,
      borderWidth:1,

 
     },
     fb_icon: {
      height: 30,
      width: 30,
      resizeMode: 'cover',
      borderRadius: 10,
     marginLeft:10,
     justifyContent: 'center',
     marginTop: 10,
     
     },
     Card_texts: {
      paddingTop:24,
      marginLeft:20,
      paddingBottom:15,
      marginBottom:15,
      height:70,
      marginRight: 45,

     },
      // Card_texts1: {
      //   flexDirection: 'row',
      //   justifyContent: 'space-between',
      // } ,
      Card_career: {
        color: '#fff',
        fontWeight: 'bold',
      },
      face_buk: {
        color: '#ccc',
        fontWeight: 'bold',
      },
      FB_Soft:{
        flexDirection: 'row',
        justifyContent:'space-between',
      
       height:80,
       width:280,

      },
      cash_location: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: 10,
      },
      cash: {
        flexDirection: 'row',
        marginTop:60,
        width:60,
        height:20,
        marginLeft: 5,
      },
      location: {
        height:20,
        width:90,
        marginTop: 60,
        marginLeft: 80,
        color: '#ccc',
        fontWeight: 'bold',
      },
      money: {
        color: '#fff',
        fontWeight: 'bold',
      },
      loc: {
        color: '#fff',
        fontWeight: 'bold',
      },
      Job_Roles: {
        height: 70,
        width: '95%',
        backgroundColor: '#eee',
        borderBlockColor: '#1e90ff',
        borderRadius: 10,
        marginLeft: 10,
        // borderWidth: 1,
       
        flexDirection: 'row',
        justifyContent:'space-between',
       
      },
      Icon1: {
        height: 50,
        width: 55,
        borderRadius: 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 10,
        marginTop: 1,
        // borderWidth:1,
      },

      burg: {
    
        height: 50,
        width: 140,
        // borderWidth:1,
        marginLeft: 20,
        marginRight: 20
      },
      burg1:{
        height: 50,
        width: 100,
        // borderWidth:1,
        marginLeft: 10,
        marginRight: 10
      },
        facebook: {
          height: 50,
          width: 53,
          resizeMode: 'cover',
          borderRadius: 10,
          marginLeft: 5,
        },
        paint: {
          fontWeight: 'bold',
          
        },
        paint1: {
          fontWeight: 'bold',
        },
        Jr: {
          fontWeight: 'bold',
        },
        paint0: {
          fontWeight: 'bold',
        },
        ProMag: {
          fontWeight: 'bold',

        },
        paint2: {
          fontWeight: 'bold',
        },
        beats: {
          height: 50,
          width: 53,
          resizeMode: 'cover',
          borderRadius: 10,
          marginLeft:5,
        },
        burger: {
          height: 55,
          width: 60,
          resizeMode: 'cover',
          borderRadius: 10,
          paddingBottom: 10,
        }


      
    


    
    
    } ,
  )