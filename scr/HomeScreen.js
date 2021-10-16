// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import * as React from 'react';
import { View, Text, Button, Image, ImageBackground,TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import logo from '../assets/logo.png';
import bg2 from '../assets/bg2.png';

export default function HomeScreen({ navigation }) {

    return (
      <View>  
       <ImageBackground 
                  source={bg2} 
                  resizeMode="cover" 
                  style={{
                  height: '100%',
                  width: '100%'
       }}>
      
        <Text style={{
          fontSize: 35,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontStyle: "italic",
          position: 'absolute',
          alignSelf:'center',
          top: 300,
          color: 'white',
          textShadowColor:'#0c0d0e',
          textShadowOffset:{width: 10, height: 10},
          textShadowRadius:20,
          textAlign: 'center',
        }}> BAKERY {"\n"} ORDERING SYSTEM </Text>
  
          <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontStyle: "italic",
          position: 'absolute',
          alignSelf:'center',
          top: 395,
          color: 'white',
          textShadowColor:'#0c0d0e',
          textShadowOffset:{width: 10, height: 10},
          textShadowRadius:20,
          textAlign: 'center'
        }}> System Database for Delivery Management™ </Text>
  
          <Image 
           source= {logo}
           style={{ 
           height: 180,
           width: 180,
           position: 'absolute',
           alignSelf:'center',
           top: 100,
           resizeMode: 'center',
           }}/>
  
        <View style={{ 
          flexDirection: 'row', 
          top: '120%', 
          justifyContent: 'space-evenly',
          }}>
  
        <Button
        color="#382624"
          title={"Insert"}
          onPress={() => navigation.navigate('Insert')}
        />
  
        <Button
        color="#382624"
          title={"Search"}
          onPress={() => navigation.navigate('Search')}
        />
  
        <Button
        color="#382624"
          title={"Delete"}
          onPress={() => navigation.navigate('Delete')}
        />
  
        <Button
          color="#382624"
          title={"Bread List"}
          onPress={() => navigation.navigate('List')}
        />
  
        <Button
          color="#382624"
          title={"Menu"}
          onPress={() => navigation.navigate('About')}
        />
      
        </View>
        </ImageBackground>
        </View>
        
    );
  }

  const styles = StyleSheet.create({
  
    sidemenunav: {
      fontSize: 14,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color:'white',
      width: '80%',
      paddingTop: 20
    },
  
    logo: { 
      height: 180,
      width: 180,
      position: 'absolute',
      alignSelf:'center',
      top: 50,
      resizeMode: 'center',
      },
  
    sysdat: {
      fontSize: 20,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontStyle: "italic",
      position: 'absolute',
      alignSelf:'center',
      top: 325,
      color: 'white',
      textShadowColor:'#0c0d0e',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:15,
      textAlign: 'center'
    },
  
    bakerytext: {
      fontSize: 35,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontStyle: "italic",
      position: 'absolute',
      alignSelf:'center',
      top: 235,
      color: 'white',
      textShadowColor:'#0c0d0e',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:15,
      textAlign: 'center',
    },
    
    txtStyle: {
      fontSize: 14,
      backgroundColor: '#f3b344',
      height: 45,
      padding: 10,
      width: 280,
      marginBottom: 10,
      borderBottomColor: 'white',
      borderRadius: 10,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: 'white'
    },
  
    loginbutton: {
      fontSize: 14,
      backgroundColor: '#db7444',
      height: 45,
      padding: 10,
      width: 280,
      marginBottom: 10,
      borderBottomColor: 'white',
      borderRadius: 20,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
  
    loginwith: {
      height: 55,
      width: 55
    }
    
  
  
  
    
    })