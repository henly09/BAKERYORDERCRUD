import React, { Component } from 'react';
import bg2 from '../assets/bg2.png';
import { StyleSheet,Button, FlatList, Text, View, ActivityIndicator, TouchableOpacity, ImageBackground} from 'react-native';
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
    
     _renderItem = ({ item }) => (
         
        <TouchableOpacity onPress={() => alert(item.body)}>
            <View style={styles.item}>
                <Text style={styles.text}>OrderID#: {item.ID},Price: ${item.price},{"\n"}Order: {item.ordered},Type: {item.Type_},{"\n"}</Text>
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

<View style={{
  width: 100,
  height: 50,
  position: 'absolute',
  top: 100,
  left: 270,
}}>
      <Button
        color="#382624"
        title={"Refresh"}
        onPress={() => this.componentDidMount()}
      />
      
</View>

        <Text style={{
        fontSize: 50,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 50,
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
        top: 100,
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
                    top:160,
                    height: '68%',
                    width: '90%',
                    left: '5%',
                    padding: 10
                    },
                   
                item:{
                  borderBottomWidth:3,
                  borderBottomColor: '#eee',
                  width: '150%'
                    },
                    
                text:{
                        fontSize: 15,
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        fontStyle: "italic",
                    }
                });