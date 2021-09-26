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


import croissant from '../assets/bread2/croissant.jpg';
import bg from '../assets/bg123.jpg';


export default function CroissantScreen() {
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
       source={croissant}/>
       <Text
       style={styles.textimagebgsecond} 
       >Croissant</Text>
       <Text
       style={styles.textimagebgsecondonepointtwo} 
       > $NA/ea</Text>
       <Text style={styles.textimagebgsecond2}>
         <Text>        </Text>
         A croissant (UK: /ˈkrwʌsɒŋ/;[3] , US: /krəsɒnt/; French pronunciation: 
         [kʁwa.sɑ̃] (About this soundlisten)) is a buttery, flaky, viennoiserie 
         pastry of Austrian origin, but mostly associated with France. 
         Croissants are named for its historical crescent shape and, like 
         other viennoiserie, are made of a layered yeast-leavened dough. 
         The dough is layered with butter, rolled and folded several times 
         in succession, then rolled into a thin sheet, in a technique called 
         laminating. The process results in a layered, flaky texture, similar 
         to a puff pastry.
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
           paddingBottom: 20,
           backgroundColor: '#a8886c',
           borderColor: '#a8886c',
           borderWidth: 5,
           borderRadius: 13,
           fontStyle: 'italic',
           margin: 5,
           fontWeight: 'bold'
    },
    
    })