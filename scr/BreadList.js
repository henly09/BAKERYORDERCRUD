import React, { Component } from 'react';
import bg2 from '../assets/bg2.png';
import { StyleSheet, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class BreadList extends Component {

    constructor()
    {
      super();
      this.state = { 
      isLoading: true,
      dataSource:[]
    }
    }

    componentDidMount() {
        return fetch('http://10.0.2.2:80/bakery2/display.php')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson
            })  
          });
      }
    
     _renderItem = ({ item }) => (
         
        <TouchableOpacity onPress={() => alert(item.body)}>
            <View style={styles.item}>
                <Text style={styles.text}>ID#:{item.ID}, Name:{item.ordered}, Course:{item.Type_}</Text>
            </View>
        </TouchableOpacity>
     );

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

        <Text style={{
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 70,
        left: 6.5,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> Order </Text>         

        <Text style={{
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 120,
        left: 10,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> List </Text>
                <View style={styles.container}>     
                       <FlatList
                          style={{padding: 5}}
                          data={ this.state.dataSource }         
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
                    top:180,
                    height: '68%',
                    width: '90%',
                    left: '5%',
                    padding: 20

                    },
                   
                item:{
                  paddingBottom: 10,
                  borderBottomWidth:2,
                  borderBottomColor: '#eee',
                    },
                    
                text:{
                        fontSize: 15,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontStyle: "italic",
                    }
                });