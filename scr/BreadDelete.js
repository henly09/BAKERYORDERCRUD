import React, { Component } from 'react';
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
    ImageBackground,
    Image
} from 'react-native';
import bg from '../assets/bg.jpg';
import bagels from '../assets/bread1/bagels.png';
import breadsticks from '../assets/bread1/breadsticks.png';
import croissant from '../assets/bread1/croissant.png';
import pretzel from '../assets/bread1/pretzel.png';
import ryebread from '../assets/bread1/ryebread.png';
import wheatbread from '../assets/bread1/wheatbread.png';
import whitebread from '../assets/bread1/whitebread.png';
import wholegrainbread from '../assets/bread1/wholegrainbread.png';

export default class BreadDelete extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            ID:''
        }
        this.state = { 
            isLoading: true,
            dataSource:[],
            isFetching:false
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

  onRefresh() {
    this.setState({isFetching: true,},() => {this.componentDidMount();});
    this.setState({ isFetching: false })
}

 _renderItem = ({ item }) => {
    awtsgege = item.ordered;
     
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
   var awtsgege;
   
   if ( awtsgege == 'Bagels'){e=0;}
   if ( awtsgege == 'Pretzel'){e=3;}
   if ( awtsgege == 'Breadsticks'){e=1;}
   if ( awtsgege == 'Croissant'){e=2;}
   if ( awtsgege == 'White Bread'){e=6;}
   if ( awtsgege == 'Wheat Bread'){e=5;}
   if ( awtsgege == 'Whole Grain Bread'){e=7;}
   if ( awtsgege == 'Rye Bread'){e=4;}

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

          
        <View style= {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            
        <TextInput
                placeholder={"Enter Order ID#"}
                placeholderTextColor={"#000000"}
                keyboardType={"numeric"}
                style={styles.txtStyle3}
                onChangeText={ID=>this.setState({ID})}
            />
        <TouchableOpacity
                    onPress={() => this.DeleteRecord()}>
                    <Text style={styles.button}>DELETE</Text>
    </TouchableOpacity>
            
        </View>

            <SafeAreaView style={styles.container}>     
                   <FlatList
                      style={{padding: 8,width: '100%'}}
                      data={ this.state.dataSource }   
                      onRefresh={() => this.onRefresh()}
                      refreshing={this.state.isFetching}    
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
        top: '10%',
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
        top: 5,
        textAlign: 'center',
        height: 500,
        width: '100%'
        },

        item:{
            borderBottomWidth:3,
            borderBottomColor: '#eee',
            width: '150%',
            padding :20,
            left: 50
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
            top: 15,
            backgroundColor:"#382624"
          },
          txtStyle3:{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            padding: 10,
            marginBottom: 10,
            backgroundColor: 'white',
            width: 245,
            marginRight: 5
        },
        button:{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: 100,
            backgroundColor: '#382624',
            fontSize: 15,
            height: 48,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 3,
            paddingTop:14
        },



});

