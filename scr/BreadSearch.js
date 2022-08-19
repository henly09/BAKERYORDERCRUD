import React, {Component } from 'react';
import { render } from 'react-dom';
// In App.js in a new project
// Owned and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
import { 
    StyleSheet, 
    Text,
    View, 
    TextInput,
    Button,
    ImageBackground,
    Alert
} from 'react-native';
import bg from '../assets/bg.jpg';

export default class BreadSearch extends Component {

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
        var ID = this.state.ID;
        
        if(ID.length == 0)
        {
            Alert.alert("Search Info","Required Field is Missing");
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

    UpdateRecord=()=>
    {
        var ID = this.state.ID;
        var price = this.state.price;
        var ordered = this.state.ordered;
        var pieces = this.state.pieces;
        var Type_ = this.state.Type_;
        var address = this.state.address;


        if(ID == null)
        {
            console.log(ID);
            Alert.alert("Update Info","Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/bakery2/update.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                ID:ID,
                price:price,
                ordered:ordered,
                pieces:pieces,
                Type_:Type_,
                address:address
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
                })
                .catch((error)=>
                {
                    alert("Error"+error);
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
                    <Text style={{
        fontSize: 35,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 65,
        left: 8,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> BAKERY APPLICATION </Text> 

<Text style={{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        top: 65,
        left: 13,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
      }}> DATABASE SEARCH SYSTEM </Text>

        <View style={styles.viewStyle}>

            <TextInput
                placeholder={"Enter Order ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle}
                onChangeText={ID=>this.setState({ID})}
            />

            <Text> </Text>

            <Button
                color="#382624"
                title={"Find Record"}
                onPress={this.SearchRecord}
            />

            <Text> </Text>

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Price</Text>
            
            <TextInput
            style={styles.txtStyle}
            value={this.state.price}
            keyboardType={"numeric"}
            onChangeText={price=>this.setState({price})}
            />

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Ordered</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.ordered}
            onChangeText={ordered=>this.setState({ordered})}
            />

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Pieces</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.pieces}
            keyboardType={"numeric"}
            onChangeText={pieces=>this.setState({pieces})}
            />

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Type</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.Type_}
            onChangeText={Type_=>this.setState({Type_})}
            />

            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 13, marginBottom: 5}}>Address</Text>
            <TextInput
            style={styles.txtStyle}
            value={this.state.address}
            onChangeText={address=>this.setState({address})}
            />
        

            <View style={styles.containerbutton}>

            <Button
                color="#382624"
                title={"Update"}
                onPress={this.UpdateRecord}
                style={styles.containerbutton}
            />

            </View>





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
        top: '8%',
        
    },

    txtStyle:
    {
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5
    },

    containerbutton:
    {
        marginTop: 10,
        alignSelf: 'center',
        width: '50%'
    },



});