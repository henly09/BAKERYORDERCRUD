import React,{Component,useState} from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text,Platform } from 'react-native';
import bg from '../assets/bg.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

// Ownded and Created by : Montera, John Henly A.
// FB: fb.com/mhax.ter
// Gmail: monterahens@gmail.com 

export default function BreadInsert()
{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textdate, setTextdate] = useState('yyyy-dd-mm');
    const [texttime, setTexttime] = useState('hh:mm:ss');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
  
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getFullYear() + '-' + tempDate.getDate() + '-' + (tempDate.getMonth() + 1);
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setOrderdate(fDate);
        setOrdertime(fTime);
        setTextdate(fDate)
        setTexttime(fTime)
  
        console.log('CheckerDate:'+ fDate + ' (' + fTime + ')');
      }
  
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      }

    const [ordered1, setOrdered] = useState('');
    const [pieces1, setPieces] = useState('');
    const [Type_1, setType_] = useState('');
    const [orderdate1, setOrderdate] = useState('');
    const [ordertime1, setOrdertime] = useState('');
    const [fullname1, setFullname] = useState('');
    const [email1, setEmail] = useState('');
    const [phonenumber1, setPhonenumber] = useState();
    const [address1, setAddress] = useState('');

    const InsertRecord=()=>
    {
        var ordered=ordered1;
        var pieces=pieces1;   
        var price = 0;

        if (ordered == 0){
            ordered = "Bagels";
            price = 2 * pieces;}

            if (ordered == 1){
                ordered = "Pretzel";
                price = 25 * pieces;}

                if (ordered == 2){
                    ordered = "Breadsticks";
                    price = 3 * pieces;}

                    if (ordered == 3){
                        ordered = "Croissant";
                        price = 5 * pieces;}

                        if (ordered == 4){
                            ordered = "White Bread";
                            price = 5 * pieces;}

                            if (ordered == 5){
                                ordered = "Wheat Bread";
                                price = 5 * pieces;}

                                if (ordered == 6){
                                    ordered = "Whole Grain Bread";
                                    price = 10 * pieces;}

                                    if (ordered == 7){
                                        ordered = "Rye Bread";
                                        price = 5 * pieces;}    

        var Type_= Type_1;

            if (Type_ == 0){
                Type_ = "Deliver";}
            else{
                Type_ = "Pickup";}
 
        var orderdate=orderdate1;
        var ordertime=ordertime1;
        var fullname=fullname1;
        var email=email1;
        var phonenumber=phonenumber1;
        var address=address1;

        if( 
            ordered==null || 
            pieces==null || 
            Type_==null || 
            orderdate ==null ||
            ordertime==null || 
            fullname==null || 
            email==null || 
            phonenumber==null || 
            address ==null)
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

                            <Text style={{
        fontSize: 30,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: "italic",
        position: 'absolute',
        top: 70,
        color: 'white',
        textShadowColor:'#0c0d0e',
        textShadowOffset:{width: 10, height: 10},
        textShadowRadius:20,
        alignSelf: 'flex-start',
        left:4
      }}> SYSTEM ORDER FORM </Text>    
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
            borderRadius: 5
      }}
      isFullWidth={true}
        options={[
            'Bagels', 'Pretzel','Breadsticks', 'Croissant',
            'White Bread','Wheat Bread','Whole Grain Bread','Rye Bread']}
        defaultValue={"Ordered                                                                                        V"}
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
        onSelect = {(ordered1)=> setOrdered(ordered1)}/>
                
               
                 <TextInput
                    placeholder={"Pieces"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={pieces1=>setPieces(pieces1)}
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
            borderRadius: 5
      }}
      defaultTextStyle={{
          fontSize: 14
      }}
        options={['Delivery','Pickup']}
        defaultValue={"Type                                                                                              V"}
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
        onSelect = {(Type_1)=> setType_(Type_1)}/>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#382624" title='Date' onPress={() => showMode('date')}/>
      </View>
      {show && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={false}
        display='default'
        onChange={onChange}
        />
      )}
    <Text style={styles.txtStyle5}> {textdate} </Text> 
</View>

<View style= {{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={styles.txtStyle4}>
          <Button color="#382624" title='Time' onPress={() => showMode('time')}/>
      </View>
        <Text style={styles.txtStyle5}> {texttime} </Text> 
</View>
                 <TextInput
                    placeholder={"Customer's Name"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={fullname1=>setFullname(fullname1)}
                />
                 <TextInput
                    placeholder={"Email"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={email1=>setEmail(email1)}
                />
                 <TextInput
                    placeholder={"Phone Number"}
                    placeholderTextColor={"black"}
                    keyboardType={"numeric"}
                    style={styles.txtStyle}
                    onChangeText={phonenumber1=>setPhonenumber(phonenumber1)}
                />
                 <TextInput
                    placeholder={"Address"}
                    placeholderTextColor={"black"}
                    style={styles.txtStyle}
                    onChangeText={address1=>setAddress(address1)}
                />

                <Button
                    color="#382624"
                    title={"Save Record"}
                    onPress={InsertRecord}
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
        top: '17%'
    },

    txtStyle:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    txtStyle4:{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '50%',
        borderRadius: 5
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
        fontSize: 13,
        borderRadius: 5
        
    },


});