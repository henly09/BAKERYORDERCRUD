import * as React from 'react';
import { View, 
  Text,  
  StyleSheet, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';
// In App.js in a new project
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 


import pretzel from '../assets/bread2/pretzel.jpg';
import bg from '../assets/bg123.jpg';


export default function PretzelsScreen() {

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
       source={pretzel}/>
       <Text
       style={styles.textimagebgsecond} 
       >Pretzels</Text>
       <Text
       style={styles.textimagebgsecondonepointtwo} 
       > $25.00 /ea</Text>
       <Text style={styles.textimagebgsecond2}>
         <Text>        </Text>
         A pretzel, from dialectal German pronunciation, standard German: 
         Breze(l) (About this soundlisten (help·info) and French / Alsatian: 
         Bretzel) is a type of baked pastry made from dough that is commonly 
         shaped into a knot. Salt is the most common seasoning for pretzels, 
         complementing the washing soda or lye treatment that gives pretzels 
         their traditional skin and flavor acquired through the Maillard reaction.
          Other seasonings are cheeses, sugar, chocolate, cinnamon, sweet glazing, 
          seeds, and nuts. Varieties of pretzels include soft pretzels, which
           should be eaten shortly after preparation, and hard-baked pretzels, 
           which have a long shelf life.
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
       left: 275,
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