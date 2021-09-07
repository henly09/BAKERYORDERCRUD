import React, {useState, useEffect, Component } from 'react';
import { render } from 'react-dom';
// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import { 
    StyleSheet, 
    Text,
    View, 
    SafeAreaView, 
    FlatList, 
    ActivityIndicator, 
    TextInput,
    Button,
    ImageBackground
} from 'react-native';
import bg from '../assets/bg.jpg';

export default class StudentSearch extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            ID:'',
            price:'',
            ordered:'',
            pieces:'',
            Type_:'',
            address:''
        };
    }

    SearchRecord=()=>
    {
        var ID=this.state.ID;

        if(ID.length==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var SearchAPIURL="http://10.0.2.2:80/bakery2/search.php";

            var header={
                    'Accept':'application/json',
                    'Content-Type':'application/json'
            };

            var Data={
                ID:ID
            };

            fetch(
                SearchAPIURL,
                {
                    method:'POST',
                    headers:header,
                    body: JSON.stringify(Data)
                }
            )
            .then((response)=>response.json())
            .then((response)=>{
                this.setState({ID:response[0].ID});
                this.setState({price:response[0].price});
                this.setState({ordered:response[0].ordered});
                this.setState({pieces:response[0].pieces});
                this.setState({Type_:response[0].Type_});
                this.setState({address:response[0].address});
            })
            .catch((error)=>{
                alert("Error:"+error);
            })
        }
    }
    render()
    {
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
            <Button
                title={"Find Record"}
                onPress={this.SearchRecord}
            />

            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

            <TextInput
            style={styles.txtStyle}
            value={"Price: "+this.state.price}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Ordered: "+this.state.ordered}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Pieces: "+this.state.pieces}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Delivery Type: "+this.state.Type_}
            />

            <TextInput
            style={styles.txtStyle}
            value={"Address: "+this.state.address}
            />


        </View>
        </ImageBackground>
        </View>
    )
    }
}

const styles=StyleSheet.create({

    viewStyle:
    {
        flex:1,
        padding:20,
        marginTop:20,
        top: '13%',
        
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10
    },
   



});