import * as React from 'react';
import { View, 
  Text,  
  StyleSheet,
  TouchableNativeFeedback, 
  Image,  
  SafeAreaView, 
  ImageBackground,
} from 'react-native';

import wholegrainbread from '../assets/bread2/wholegrainbread.jpg';
import bg from '../assets/bg123.jpg';


export default function WholeGrainBreadScreen() {
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
       source={wholegrainbread}/>
       <Text
       style={styles.textimagebgsecond} 
       >Whole Grain </Text>
       <Text
       style={styles.textimagebgsecondonepointtwo} 
       > $NA/ea</Text>
       <Text style={styles.textimagebgsecond2}>
         <Text>        </Text>
         The exact composition of products legally marketable as "whole grain bread" 
         varies from country to country and even within one country. In some cases, 
         the bread is made with whole-grain flour that contains all of the component 
         parts of the grain in the same ratios as they occur in nature, whereas in 
         other cases the bread may include only representative amounts of bran or 
         wheat germ. In Canada, for example, a proportion of the wheat germ may be 
         removed from the flour to reduce the risk of rancidity, but the term 
         "whole-wheat bread" is still used.
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