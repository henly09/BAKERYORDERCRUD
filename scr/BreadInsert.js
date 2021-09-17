import React,{Component} from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';

// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 
export default class BreadInsert extends Component
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
            address:'',
            date:'',
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
 
        var orderdate=this.state.date;
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
      isFullWidth={true}
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
          paddingLeft: 5
        }}
        defaultTextStyle={{
            fontSize: 14
        }}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
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
          paddingLeft: 5
        }}
        dropdownTextStyle={{
            fontSize: 15,
            fontStyle: "italic",
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        }}
        onSelect = {(Type_)=> this.setState({Type_})}/>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
  <Text style={styles.txtStyle5}> Date: </Text> 
  <DatePicker
        style={styles.txtStyle4}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1950-05-01"
        maxDate="2999-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        useNativeDriver= {true}
      />
</View>
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
    },
    txtStyle4:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
        padding: 0,
        width: '59%',
        backgroundColor: 'white',
        
    },

    txtStyle5:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 11,
        marginBottom: 10,
        width: '39%',
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 13
        
    },


});