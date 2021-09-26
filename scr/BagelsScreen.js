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

import bagels from '../assets/bread2/bagels.jpg';
import bg from '../assets/bg123.jpg';

export default function BagelsScreen() {
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
     source={bagels}/>
     <Text
     style={styles.textimagebgsecond} 
     >Bagels</Text>
    <Text
     style={styles.textimagebgsecondonepointtwo} 
     > $NA/ea</Text>
     <Text style={styles.textimagebgsecond2}>
       <Text>        </Text>
        Bagels are widely associated with Ashkenazi Jews from the 17th century;
         it was first mentioned in 1610 in Jewish community ordinances in Kraków,
          Poland. However, bagel-like bread known as obwarzanek was common earlier
           in Poland as seen in royal family accounts from 1394 Plain. Crisp on the 
           outside, chewy on the inside, slightly sweet, somewhat salty, undeniably
            pristine. No matter how you eat it with cream cheese, butter, lox—the plain
             bagel is more than a baked ring of dough; it's a flavor vehicle and a 
             testament to the engenuity of immigrants.. 
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