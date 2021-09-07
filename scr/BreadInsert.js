import React,{Component} from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';

// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class StudentInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            price:'',
            ordered:'',
            pieces:'',
            Type_:'',
            orderdate:'',
            ordertime:'',
            fullname:'',
            email:'',
            phonenumber:'',
            address:''
        };
    }

    InsertRecord=()=>
    {

        var ordered=this.state.ordered;
        var pieces=this.state.pieces;   
        var price = 0;

        if (ordered == 0){
            ordered = "Pandesal";
            price = 2 * pieces;}

            if (ordered == 1){
                ordered = "Loaf Bread";
                price = 25 * pieces;}

                if (ordered == 2){
                    ordered = "Choco Lanay";
                    price = 3 * pieces;}

                    if (ordered == 3){
                        ordered = "Spanish Bread";
                        price = 5 * pieces;}

                        if (ordered == 4){
                            ordered = "Turta";
                            price = 5 * pieces;}

                            if (ordered == 5){
                                ordered = "Rye Bread";
                                price = 5 * pieces;}

                                if (ordered == 6){
                                    ordered = "Humburger Bun";
                                    price = 10 * pieces;}

                                    if (ordered == 7){
                                        ordered = "Breadsticks";
                                        price = 5 * pieces;}    

        var Type_=this.state.Type_;

            if (Type_ == 0){
                Type_ = "Deliver";}
            else{
                Type_ = "Pickup";}
 
        var orderdate=this.state.orderdate;
        var ordertime=this.state.ordertime;
        var fullname=this.state.fullname;
        var email=this.state.email;
        var phonenumber=this.state.phonenumber;
        var address=this.state.address;

        if( 
            ordered==null || 
            pieces.length==0 || 
            Type_==null || 
            orderdate.length ==0 ||
            ordertime.length==0 || 
            fullname.length==0 || 
            email.length==0 || 
            phonenumber.length==0 || 
            address.length ==0)
        {
            alert("Required Field is Missing");
        }
        else
        {
            var InsertAPIURL = "http://10.0.2.2:80/bakery2/insertdata.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                price:price,
                ordered:ordered,
                pieces:pieces,
                Type_:Type_,
                orderdate:orderdate,
                ordertime:ordertime,
                fullname:fullname,
                email:email,
                phonenumber:phonenumber,
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
        return(
            <View>
                <ImageBackground 
                source={bg} 
                resizeMode="cover" 
                style={{
                height: '100%',
                width: '100%'
                }}>
            <View style={styles.ViewStyle}>
                
    <ModalDropdown 
        style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingTop: 17,
            paddingBottom: 17,
            paddingRight: 17,
            paddingLeft:11,
            marginBottom: 10,
            backgroundColor: 'white',
      }}
        options={[
            'Pandesal', 'Loaf Bread','Choco Lanay', 'Spanish Bread',
            'Turta','Rye Bread','Humberger Bun','Breadsticks']}
        defaultValue={"Ordered"}
        animated
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 200,
          width: '95%',
          marginTop: -45,
          marginLeft: -11,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        dropdownTextProps={{
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: 'sans-serif',
          fontWeight: 'bold'
        }}
        onSelect = {(ordered)=> this.setState({ordered})}/>
                
               
                 <TextInput
                    placeholder={"Pieces"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={pieces=>this.setState({pieces})}
                />

<ModalDropdown 
        style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingTop: 17,
            paddingBottom: 17,
            paddingRight: 17,
            paddingLeft:11,
            marginBottom: 10,
            backgroundColor: 'white',
      }}
      defaultTextStyle={{
          fontSize: 14
      }}
        options={['Delivery','Pickup']}
        defaultValue={"Type"}
        animated
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        dropdownStyle={{
          height: 100,
          width: '95%',
          marginTop: -45,
          marginLeft: -11,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        dropdownTextStyle={{
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: 'sans-serif',
          fontWeight: 'bold'
        }}
        onSelect = {(Type_)=> this.setState({Type_})}/>

                 <TextInput
                    placeholder={"Date"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={orderdate=>this.setState({orderdate})}
                />
                <TextInput
                    placeholder={"Time"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={ordertime=>this.setState({ordertime})}
                />
                 <TextInput
                    placeholder={"Customer's Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={fullname=>this.setState({fullname})}
                />
                 <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email=>this.setState({email})}
                />
                 <TextInput
                    placeholder={"Phone Number"}
                    placeholderTextColor={"black"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={phonenumber=>this.setState({phonenumber})}
                />
                 <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address=>this.setState({address})}
                />

                <Button
                    title={"Save Record"}
                    onPress={this.InsertRecord}
                />
          
            </View>
            </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    ViewStyle:{
        flex:1,
        padding: 10,
        marginTop:10,
        top: '12%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    }


});