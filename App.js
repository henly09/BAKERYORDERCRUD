// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import {useState} from 'react';
import * as React from 'react';
import { View, Text, Button, Image, ImageBackground,TouchableOpacity, TouchableNativeFeedback, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu-updated';

import BreadInsert from './scr/BreadInsert.js';
import BreadSearch from './scr/BreadSearch.js';
import BreadDelete from './scr/BreadDelete.js';
import BreadList from './scr/BreadList.js';
import BreadAbout from './scr/BreadAbout';

import dash from './assets/dash.png';
import logo from './assets/logo.png';
import bg2 from './assets/bg2.png';
import menubg from './assets/menu.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';
import about from './assets/about.png';


function HomeScreen({ navigation }) {

  const pages = ['Insert', 'Search','Delete', 'List','About'];

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

const Tab = createBottomTabNavigator();

export default function Application () {
    return (
    <NavigationContainer>
      <SideMenu 
      openMenuOffset={180} 
      menu={<SideMenuBar/>} 
      bounceBackOnOverdraw={false}
      autoClosing={true}
      allowOverlayPressPropagation={true}>
      <Tab.Navigator
    initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#925d32',
          borderRadius: 10,
          height: 65,
          width: "98%",
          left: 5,
          bottom: 5
        },
        tabBarShowLabel: false,
        showElevation: true,   
      }}>

    <Tab.Screen name="HomeScreen" 
      component={HomeScreen}  
      options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={home}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
        }} />

      <Tab.Screen name="Insert" component={BreadInsert}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={insert}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
        }}/>

        
<Tab.Screen name="About" component={BreadAbout}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={about}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
              
        }}/>

      <Tab.Screen name="Search" component={BreadSearch}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={search}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
        }}/>
      <Tab.Screen name="Delete" component={BreadDelete}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                source={deleted}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="List" component={BreadList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ? '#382624' : 'white'
                }}
                />
              </View>
            ),
              
        }}/>

    </Tab.Navigator>
    </SideMenu>
    </NavigationContainer>

    );
  
}

function SideMenuBar(){
  const navigation = useNavigation();
  return(
<View>
     <ImageBackground 
                source={menubg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
     }}>
  
  <View style={{
    top: 100,
    alignSelf: 'center',
    width: '100%',
    left: 15
  }}>

    <Text
    style={{
      fontSize: 30,
      fontFamily: 'sans-serif',
      paddingTop: 15,
      fontWeight: 'bold',
      color:'white',
      width: '80%',
      paddingBottom: 5,
      right: 10
    }}
    > MENU</Text>

    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> 
    <Text style={styles.sidemenunav}>HOME</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Insert')}> 
    <Text style={styles.sidemenunav}>INSERT</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search')}> 
    <Text style={styles.sidemenunav}>SEARCH</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Delete')}>
    <Text style={styles.sidemenunav}>DELETE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('List')}>
    <Text style={styles.sidemenunav}>DATABASE LIST</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('About')}>
    <Text style={styles.sidemenunav}>MENU</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
    <Text style={styles.sidemenunav}>CONTACT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => alert('Page not available!')}>
    <Text style={styles.sidemenunav}>SERVICES</Text>
    </TouchableOpacity>

  </View>

    
 <View style={{position: 'absolute',top: '74%'}}>        
         <Image 
         source= {logo}
         style={{ 
         height: 80,
         width: 80,
         left: 45,
         top:70,
         resizeMode: 'center',
         position: 'absolute'
         }}/>

    <Text style={{
      fontSize: 10,
      fontFamily: 'sans-serif',
      fontWeight:'normal',
      fontStyle: "italic",
      top: 150,
      left: 40,
      color: 'white',
      textShadowColor:'#0c0d0e',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:15,
      textAlign: 'center',
    }}>
      BAKERY™ SYSTEM{'\n'}SOLUTIONS
    </Text>
</View>
     </ImageBackground>
   </View>
);
}



const styles = StyleSheet.create({
  
  sidemenunav: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    paddingTop: 30,
    color:'white',
    width: '80%',
  }
  
  })





