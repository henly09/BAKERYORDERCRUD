// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View, Text, Button, Image, ImageBackground,TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import BreadInsert from './scr/BreadInsert.js';
import BreadSearch from './scr/BreadSearch.js';
import BreadDelete from './scr/BreadDelete.js';
import BreadList from './scr/BreadList.js';
import BreadAbout from './scr/BreadAbout';
import dash from './assets/dash.png';
import logo from './assets/logo.png';
import bg2 from './assets/bg2.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';
import about from './assets/about.png';


function HomeScreen({ navigation }) {


  const pages = ['Insert', 'Search','Delete', 'BreadList','BreadAbout'];

  return (
    <View>
     <ImageBackground 
                source={bg2} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
     }}>

      <ModalDropdown 
        style={{
        top: 35,
        width: 100,
        right: 10,
        position: 'relative',
      }}
        options={['Insert', 'Search','Delete', 'Bread List','Menu']}
        animated
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        dropdownStyle={{
          height: 190,
          width: 130,
          marginBottom: 100,
          marginLeft: 20,
          marginTop: -80,
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#925d32'
        }}

        dropdownTextStyle={{
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          backgroundColor: '#925d32',
          color: 'white'
        }}
        onSelect = {(e)=> navigation.navigate(pages[e])}>

         <Image 
         source= {dash}
         style={{ 
         height: 80,
         width: 80,
         }}/>

        </ModalDropdown>


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
        top: '100%', 
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
        onPress={() => navigation.navigate('BreadList')}
      />

      <Button
        color="#382624"
        title={"Menu"}
        onPress={() => navigation.navigate('BreadAbout')}
      />

      </View>
      </ImageBackground>
        </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
    initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          backgroundColor: '#925d32',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          height: 60,
          width: "100%"
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
                }}
                />
              </View>
            ),
        }}/>

        
<Tab.Screen name="BreadAbout" component={BreadAbout}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={about}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
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
                }}
                />
              </View>
            ),
        }}/>

    
      <Tab.Screen name="BreadList" component={BreadList}  options = {{
            headerShown: false,
            tabBarIcon: ({focused}) => (    
              <View>
                <Image
                source={list}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                }}
                />
              </View>
            ),
              
        }}/>

        
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

