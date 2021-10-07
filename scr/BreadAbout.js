// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

import * as React from 'react';
import { View,Text, TouchableNativeFeedback, Image, ImageBackground,StyleSheet,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BagelsScreen from './BagelsScreen';
import PretzelsScreen from './PretzelsScreen.js';
import BreadsticksScreen from './BreadsticksScreen.js';
import CroissantScreen from './CroissantScreen.js';
import WhiteBreadScreen from './WhiteBreadScreen.js';
import WheatBreadScreen from './WheatBreadScreen.js';
import WholeGrainBreadScreen from './WholeGrainBreadScreen.js';
import RyeBreadScreen from './RyeBreadScreen.js';

import bagels from '../assets/bread1/bagels.png';
import breadsticks from '../assets/bread1/breadsticks.png';
import croissant from '../assets/bread1/croissant.png';
import pretzel from '../assets/bread1/pretzel.png';
import ryebread from '../assets/bread1/ryebread.png';
import wheatbread from '../assets/bread1/wheatbread.png';
import whitebread from '../assets/bread1/whitebread.png';
import wholegrainbread from '../assets/bread1/wholegrainbread.png';
import cafe2 from '../assets/cafe2.gif';

function BreadsScreen({ navigation }) {
    return (
       <SafeAreaView>
        <View>
        <ImageBackground
                   opacity={0.5}
                   style={styles.imagebackground}
                   source={cafe2}/>
       </View>

       <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:40,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
        left: 20
      }}> BAKERY APP  </Text>

       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.push('Bagels')}>    
           <Image 
           style={styles.breadlogo1}
           source={bagels}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.push('Pretzels')}>
           <Image 
          style={styles.breadlogo2}
           source={pretzel}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.push('Breadsticks')}> 
           <Image 
           style={styles.breadlogo1}
           source={breadsticks}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.push('Croissant')}> 
           <Image 
           style={styles.breadlogo2}
           source={croissant}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.push('White Bread')}>
           <Image 
            style={styles.breadlogo1}
           source={whitebread}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.push('Wheat Bread')}>
           <Image style={styles.breadlogo2}
           source={wheatbread}/>
       </TouchableNativeFeedback>
       </View>
       <View style={styles.arrangement}>
       <TouchableNativeFeedback onPress={() => navigation.push('Whole Grain Bread')}>
           <Image 
           style={styles.breadlogo1}
           source={wholegrainbread}/>
       </TouchableNativeFeedback>
       <TouchableNativeFeedback onPress={() => navigation.push('Rye Bread')}>
           <Image 
           style={styles.breadlogo2}
           source={ryebread}/>
       </TouchableNativeFeedback>
       </View>
       </SafeAreaView>
     );
   }

const Stack = createNativeStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Breads" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Breads" component={BreadsScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Bagels" component={BagelsScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Pretzels" component={PretzelsScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Breadsticks" component={BreadsticksScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Croissant" component={CroissantScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="White Bread" component={WhiteBreadScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Wheat Bread" component={WheatBreadScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Whole Grain Bread" component={WholeGrainBreadScreen} options={{ cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Rye Bread" component={RyeBreadScreen} options={{ cardStyleInterpolator: forFade }}/>  
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  
  breadlogo1: {
    borderWidth: 3,
    borderColor: 'black',
    height: 140, 
    width: 150,
    marginRight: 13,
    margin: 5, 
    borderRadius: 15, 
    bottom: 25 ,
  }, 
  
  breadlogo2: {
    borderWidth: 3,
    borderColor: 'black',
    height: 140, 
    width: 150,
    marginLeft: 13,
    margin: 5, 
    borderRadius: 15, 
    bottom: 25, 
  },
  
  arrangement: {
    flexDirection: 'row', 
    justifyContent: 'center',
    top: 125
  },
  
  imagebackground: {
    height: 1000,
    width: 500,
    backgroundColor: 'black',
    position: 'absolute',
    resizeMode: 'contain'
  },
  
  })
