// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, ImageBackground,TouchableOpacity, StyleSheet, TextInput, ToastAndroid, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SideMenu from 'react-native-side-menu-updated';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

import BreadInsert from './scr/BreadInsert.js';
import BreadSearch from './scr/BreadSearch.js';
import BreadDelete from './scr/BreadDelete.js';
import BreadList from './scr/BreadList.js';
import BreadAbout from './scr/BreadAbout';

import bg2 from './assets/bg2.png';
import logo from './assets/logo.png';
import cafe from './assets/cafe.gif';
import menubg from './assets/menu.png';
import home from './assets/home.png';
import insert from './assets/insert.png';
import search from './assets/search.png';
import deleted from './assets/delete.png';
import list from './assets/list.png';
import about from './assets/about.png';

import fb from './assets/fb.png';
import google from './assets/google.png';
import insta from './assets/insta.png';
import twitter from './assets/twitter.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function SideMenuBar(){
  const navigation = useNavigation();
  return(
<View>
<ImageBackground
                source={cafe} 
                resizeMode='cover' 
                style={{
                height: '100%',
                width: '100%'
     }}> 
     <ImageBackground
                opacity={0.40} 
                source={menubg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
     }}>

<Text
    style={{
      fontSize: 30,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color:'white',
      left: 5,
      top: 100
    }}
    > MENU</Text>

  <View style={{
    top: 100,
    alignSelf: 'center',
    width: '100%',
    left: 15,
    paddingTop: 10
  }}>

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
    
    <TouchableOpacity onPress={() => ToastAndroid.show("Page Not Available!",ToastAndroid.SHORT)}>
    <Text style={styles.sidemenunav}>CONTACT</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => ToastAndroid.show("Page Not Available!",ToastAndroid.SHORT)}>
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
     </ImageBackground>
   </View>
);
}

function Bottomtabnav(){
  return(
    <SideMenu 
    openMenuOffset={180} 
    menu={<SideMenuBar/>} 
    bounceBackOnOverdraw={false}
    isOpen={false}
    allowOverlayPressPropagation={true}
    edgeHitWidth={160}>
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
  );
}

function LoginScreen({navigation}) {
  
  const user = 'henly09';
  const pass = '09108076145145';
  
  const [loginuser, setLoginuser] = useState('');
  const [loginpass, setLoginpass] = useState('');

  onLogin = async() => {
    if (user == loginuser && pass == loginpass){
      ToastAndroid.show("Login Successfully!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
      navigation.navigate('HomeHalf');
    }
    else{
      ToastAndroid.show("Username or Password is Invalid!",ToastAndroid.SHORT);
      console.log("user: "+loginuser +" "+"pass: "+loginpass);
    }
  }
    return (
      <View style={{position: 'absolute', height: '100%',width: '100%'}}> 
          <ImageBackground
                  source={cafe} 
                  resizeMode='cover' 
                  style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
       }}/> 
      
        <Text style={styles.bakerytext}> BAKERY {"\n"} ORDERING SYSTEM </Text>
  
          <Text style={styles.sysdat}> System Database for Delivery Management™ </Text>
  
          <Image 
           source= {logo}
           style={styles.logo}/>
  
           <View style={{alignSelf: 'center', justifyContent: 'center', top: 440,justifyContent: 'space-evenly' }}>
  
           <TextInput
                      placeholder={"Username:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      onChangeText={loginuser=>setLoginuser(loginuser)}
                  />
  
            <TextInput
                      placeholder={"Password:"}
                      placeholderTextColor={"white"}
                      style={styles.txtStyle}
                      secureTextEntry={true}
                      onChangeText={loginpass=>setLoginpass(loginpass)}
                  />
  
           </View>
  
           <View style={{alignSelf: 'center', top: 465}}> 
        
           <TouchableOpacity onPress={onLogin}>
             <Text style={styles.loginbutton}>LOGIN</Text>
           </TouchableOpacity>
           </View> 
  
           <View style={{ 
          flexDirection: 'row', 
          top: '125%', 
          justifyContent: 'space-evenly',
          }}>
  
  <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}> 
          <Image source= {fb} style={styles.loginwith} />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin')}> 
          <Image source= {google} style={styles.loginwith}/>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}> 
          <Image source= {insta} style={styles.loginwith}/>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/')}> 
          <Image source= {twitter} style={styles.loginwith}/>
  </TouchableOpacity>

          </View>
  
     
        </View>
    );
  }

export default function App() {
    return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={LoginScreen}/>
            <Stack.Screen name="HomeHalf" component={Slider}/>
            <Stack.Screen name="HomeSecond" component={Bottomtabnav}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

function HomeScreen({ navigation }) {

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

function Slider({ navigation }) {

   const slides = [
    {
      key: 1,
      title: 'SERVICE',
      text: 'We have Breads and Drinks',
      image: require('./assets/cafe.gif'),
      backgroundColor: '#fcc464'
    },
    {
      key: 2,
      title: 'OFFERS',
      text: 'We offer authentic breads with authentic recipes',
      image: require('./assets/breadloopgif.gif'),
      backgroundColor: '#ecd7b5'
    },
    {
      key: 3,
      title: 'CHILL',
      text: 'Order now and review us on Google Play Store.',
      image: require('./assets/chill.gif'),
      backgroundColor: '#dc8e94'
    }
  ];

  onCall = async() => {
    navigation.navigate('HomeSecond');
  }

   _renderItem = ({ item }) => {

    const bg = [styles.slider,styles.slider1,styles.slider2];

    var e;
     
    if ( item.title == 'SERVICE'){e=0;}
    if ( item.title == 'OFFERS'){e=1;}
    if ( item.title == 'CHILL'){e=2;}

    return (
      <View style={bg[e]}>
        <Text style={styles.title}>{item.title}</Text>
              <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      keyExtractor={(item, index) => index.toString()}
      dotClickEnabled={true}
      onDone={onCall}
    />
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
  
  title:{
    alignSelf: 'center',
    top:140,
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    textAlign: 'center'
  },

  slider: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcc464',
    position: 'absolute'
  },

  slider1: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute'
  },

  slider2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ecc434',
    position: 'absolute'
  },

  text:{
    alignSelf: 'center',
    top: 180,
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    textAlign: 'center'
  },

  image: {
   resizeMode: 'cover',
   height: 250,
   width: 250,
   alignSelf: 'center',
   top: '20%',
  },

  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: { 
    height: 180,
    width: 180,
    position: 'absolute',
    top: 100,
    resizeMode: 'center',
    left:120
    },

  sysdat: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontStyle: "italic",
    position: 'absolute',
    alignSelf:'center',
    top: 375,
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
    top: 285,
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





