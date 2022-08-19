import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
  Alert,
} from 'react-native';


import wheatbread from '../assets/bread2/wheatbread.jpg';
import bg from '../assets/bg123.jpg';
// In App.js in a new project
// Owned and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 


export default function WheatBreadScreen() {
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
       source={wheatbread}/>
       <Text
       style={styles.textimagebgsecond} 
       >Wheat Bread</Text>
       <Text
       style={styles.textimagebgsecondonepointtwo} 
       > $5.00 /ea</Text>
       <Text style={styles.textimagebgsecond2}>
         <Text>        </Text>
         Wheat bread is a type of bread made using flour that is partly or entirely 
         milled from whole or almost-whole wheat grains, see whole-wheat flour and 
         whole grain. It is one kind of brown bread. Synonyms or near-synonyms for 
         whole-wheat bread outside the United States (e.g., the UK) are whole grain 
         bread or wholemeal bread. Some regions of the US simply called the bread 
         wheat bread, a comparison to white bread. Some varieties of whole-wheat 
         bread are traditionally coated with whole or cracked grains of wheat, 
         though this is mostly decorative compared to the nutritional value of a 
         good quality loaf itself.
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