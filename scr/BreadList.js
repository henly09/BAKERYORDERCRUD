import React, { Component } from 'react';
import bg2 from '../assets/bg2.png';
import { StyleSheet,Button,Image, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com
import bagels from '../assets/bread1/bagels.png';
import breadsticks from '../assets/bread1/breadsticks.png';
import croissant from '../assets/bread1/croissant.png';
import pretzel from '../assets/bread1/pretzel.png';
import ryebread from '../assets/bread1/ryebread.png';
import wheatbread from '../assets/bread1/wheatbread.png';
import whitebread from '../assets/bread1/whitebread.png';
import wholegrainbread from '../assets/bread1/wholegrainbread.png';
import logo from '../assets/logo.png';

export default class BreadList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[],
      isFetching:false
    }
    }

    componentDidMount = async() => {
      this.setState({ isLoading: true });
      try {  
       const responseJson = await fetch('http://10.0.2.2:80/bakery2/display.php')
       const json = await responseJson.json();
          this.setState({
            isLoading: false,
            dataSource: json
          })  
      } catch(error) { 
          console.log(error);
          this.setState({ isLoading: false });
      }
    }

    onRefresh() {
      this.setState({isFetching: true,},() => {this.componentDidMount();});
      this.setState({ isFetching: false })
  }
    
     _renderItem = ({item}) => {

      thumbnail = item.ordered;
     
      const breads = [
       bagels,
       breadsticks,
       croissant,
       pretzel,
       ryebread,
       wheatbread,
       whitebread,
       wholegrainbread];
     
     var e;
     var thumbnail;
     
     if ( thumbnail == 'Bagels'){e=0;}
     if ( thumbnail == 'Pretzel'){e=3;}
     if ( thumbnail == 'Breadsticks'){e=1;}
     if ( thumbnail == 'Croissant'){e=2;}
     if ( thumbnail == 'White Bread'){e=6;}
     if ( thumbnail == 'Wheat Bread'){e=5;}
     if ( thumbnail == 'Whole Grain Bread'){e=7;}
     if ( thumbnail == 'Rye Bread'){e=4;}

       return (
        <TouchableOpacity onPress={() => alert(item.body)}>
            <View>
            <View style={styles.item}>
                <Text style={styles.text}>OrderID#: {item.ID},Price: ${item.price},{"\n"}Order: {item.ordered},Type: {item.Type_}</Text>
            </View>
                <Image style= {styles.thumbnail}source={breads[e]}/>
            </View>
        </TouchableOpacity>
     );}

        render() {
 
            if (this.state.isLoading) {
              return (
                <View style={styles.container}>
                  <ActivityIndicator size="large" animating/>
                </View>
              )
            }
            else {
     
            return (
              <View>
                <ImageBackground 
                source={bg2} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>

                   <Image 
         source= {logo}
         style={{ 
         height: 100,
         width: 100,
         position: 'absolute',
         left: 282,
         top:45,
         resizeMode: 'center',
         }}/>

<View style={{
  width: 100,
  height: 50,
  position: 'absolute',
  top: 100,
  left: 270,
}}>

 
      
</View>

<Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 65,
        left: 8,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> BAKERY APP </Text> 

<Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 110,
        left: 13,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE LIST </Text>
      
                <View style={styles.container}>     
                       <FlatList
                          style={{width: '100%'}}
                          data={ this.state.dataSource }
                          onRefresh={() => this.onRefresh()}
                          refreshing={this.state.isFetching}         
                          renderItem={this._renderItem}
                          keyExtractor={(item, index) => index.toString()}
                        />                
                </View>
                </ImageBackground>
                </View>
                            
                    );
                  }
                }
                }
                 
                const styles = StyleSheet.create({
                 
                  container :{
                    alignItems:'center',
                    backgroundColor: '#F5FCFF',
                    textAlign: 'center',
                    top:160,
                    height: '68%',
                    width: '90%',
                    alignSelf :'center'
                    },
                   
                item:{
                  borderBottomWidth:3,
                  borderBottomColor: '#eee',
                  width: '150%',
                  padding :20,
                  left: 70
                    },
                    
                text:{
                        fontSize: 15,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontStyle: "italic",
                    },
                
                thumbnail:{
                  resizeMode: 'center',
                  position: 'absolute',
                  height: 50, 
                  width: 50, 
                  top: 17,
                  left: 20,
                  backgroundColor:"#382624"
                }
                });