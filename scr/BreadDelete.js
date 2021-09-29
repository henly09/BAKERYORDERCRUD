import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import { 
    Text,
    View,  
    ActivityIndicator, 
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import bg from '../assets/bg.jpg';

export default class BreadDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            ID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[]
          }
    }

/*------------------------------------------------------------------------------*/
    DeleteRecord=()=>
    {
        var ID=this.state.ID;

        if(ID == null)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/bakery2/delete.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                ID:ID
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    this.componentDidMount();
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })

        }
    }
/*------------------------------------------------------------------------------*/

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

/*------------------------------------------------------------------------------*/
    render()
    {
        if (this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ActivityIndicator size="large" animating/>
              </View>
            )
          }
          else{
    return (
        <View>
        <ImageBackground 
                source={bg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>
        <View style={styles.viewStyle}>
            <TextInput
                placeholder={"Enter Order ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={ID=>this.setState({ID})}
            />

        <View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button
                color="#382624"
                title={"Delete Record"}
                onPress={() => this.DeleteRecord()}
            />
             <Button
                color="#382624"
                title={"Refresh"}
                onPress={() => this.componentDidMount()}
            />
        </View>

            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 10}}
                      data={ this.state.dataSource }       
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />                
            </SafeAreaView>
        </View>
        </ImageBackground>
        </View>
    );
    }
}
}

const styles=StyleSheet.create({

    viewStyle:
    {
        padding:20,
        top: '8%',
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'black',
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10
    },
      
    container :{
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        paddingTop: 10,
        top: 5,
        paddingBottom: 10,
        textAlign: 'center',
        height: 500,
        width: '100%'
        },

        item:{
            borderBottomWidth:3,
            borderBottomColor: '#eee',
            width: '100%'
              },

    text:{
            fontSize: 15,
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontStyle: "italic",
        }



});

