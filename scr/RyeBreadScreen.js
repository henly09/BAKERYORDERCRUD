import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  TouchableNativeFeedback, 
  Image,  
  SafeAreaView, 
  ImageBackground,
  Alert,
} from 'react-native';


import ryebread from '../assets/bread2/ryebread.jpg';
import bg from '../assets/bg123.jpg';

export default function RyeBreadScreen() {
    return (
      <SafeAreaView>
      <View>
      <ImageBackground
                 opacity={0.5}
                 style={styles.imagebackground}
                 source={bg}/>
        <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        alignSelf:'flex-start',
        top:60,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        textAlign: 'center',
        left: 20
      }}> MENU </Text>
       <Image
       style={styles.imagebgsecond}
       source={ryebread}/>
       <Text
       style={styles.textimagebgsecond} 
       >Rye Bread</Text>
       <Text
       style={styles.textimagebgsecondonepointtwo} 
       > $NA/ea</Text>
       <Text style={styles.textimagebgsecond2}>
         <Text>        </Text>
         Rye bread is a type of bread made with various proportions of flour 
         from rye grain. It can be light or dark in color, depending on the 
         type of flour used and the addition of coloring agents, and is typically 
         denser than bread made from wheat flour. It is higher in fiber than white 
         bread and is darker in color and stronger in flavor.Rye bread was considered 
         a staple through the Middle Ages. Many different types of rye grain have come 
         from north-central, western, and eastern European countries such as Iceland, 
         Germany, Austria, Denmark, Sweden, and many more europe countries.
          </Text>
     </View>
     </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
  
    imagebackground: {
      height: 800,
      width: 420,
      backgroundColor: 'black',
      position: 'absolute',
    },
    
    imagebgsecond: {
      borderColor: '#a8886c',
      borderWidth: 5,
      borderRadius: 13,
      height: 215,
      width: 360,
      alignSelf: 'center',
      top: 120
    },
    
    textimagebgsecond: {
           textAlign: 'center',
           alignItems: 'center', 
           position: 'absolute',
           top: 350,
           color: 'white',
           fontSize: 27,
           paddingTop: 3,
           paddingLeft: 10,
           paddingRight: 10,
           backgroundColor: '#a8886c',
           borderColor: '#a8886c',
           borderWidth: 3,
           borderRadius: 13,
           fontStyle: 'italic',
           margin: 5,
           fontWeight: 'bold'
    },
    
    textimagebgsecondonepointtwo: {
       textAlign: 'center',
       alignItems: 'center', 
       position: 'absolute',
       top: 360,
       color: 'white',
       fontSize: 15,
       paddingTop: 3,
       paddingLeft: 10,
       paddingRight: 10,
       backgroundColor: '#a8886c',
       borderColor: '#a8886c',
       borderWidth: 3,
       borderRadius: 13,
       fontStyle: 'italic',
       left: 290,
       margin: 5,
       fontWeight: 'bold'
    },
    
    textimagebgsecond2: {
           position: 'absolute',
           textAlign: 'justify', 
           color: 'white', 
           top: 420,
           fontSize: 15,
           paddingTop: 20,
           paddingLeft: 20,
           paddingRight: 20,
           backgroundColor: '#a8886c',
           borderColor: '#a8886c',
           borderWidth: 5,
           borderRadius: 13,
           fontStyle: 'italic',
           margin: 5,
           fontWeight: 'bold'
    },
    
    })