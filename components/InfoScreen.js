import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, AsyncStorage} from 'react-native'

import MenuButton from '../components/MenuButton'

export default class InfoScreen extends Component{
  _signOutAsync =()=> {
    firebase.auth().signOut().then(function() {
        this.props.navigation.navigate('Auth');
    }).catch(function(error) {
        console.log(error)
    });
};

  render() {
    return(
      <View style = {{flex : 1,justifyContent : 'center',}}>
	  	<MenuButton navigation={this.props.navigation}/>
        <Text style = {styles.text}>Team</Text>
		<Image source = {require('../assets/photoprofile.jpg')} style = {styles.image}></Image>
	  	<Text>Name : Nobuatsu Aoki Raihan Dewangga</Text>
		<Text>Position : Direktur </Text>
		<Text>Company : Sekut Company</Text>
		<Text>Education : S2</Text>
		<Text>Address : Jl. Kerto Rahayu Gang Masjid  No.43 B,  Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</Text>
		<Text>Date of Birth : 29/03/2000</Text>
	  </View>
    )
  }


  render() {
    return(
      <View style = {{flex : 1,justifyContent : 'center',}}>
	  	<MenuButton navigation={this.props.navigation}/>
        <Text style = {styles.text}>Team</Text>
		<Image source = {require('../assets/photoprofile.jpg')} style = {styles.image}></Image>
	  	<Text>Name : Muhammad Ilham Firmansyah</Text>
		<Text>Position : Manager Administrasi Keuangan </Text>
		<Text>Company : Sekut Company</Text>
		<Text>Education : S1</Text>
		<Text>Address : Jl. Sunan Kalijaga Dalam  No.21,  Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</Text>
		<Text>Date of Birth : 24/05/1998</Text>
	  </View>
    )
  }

  
  render() {
    return(
      <View style = {{flex : 1,justifyContent : 'center',}}>
	  	<MenuButton navigation={this.props.navigation}/>
        <Text style = {styles.text}>Team</Text>
		<Image source = {require('../assets/photoprofile.jpg')} style = {styles.image}></Image>
	  	<Text>Name : Lalu Maulidin Anugrah</Text>
		<Text>Position : Manager Pemasaran </Text>
		<Text>Company : Sekut Company</Text>
		<Text>Education : S2</Text>
		<Text>Address : Jl. Cikarang  No.14,  Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</Text>
		<Text>Date of Birth : 14/06/1999</Text>
	  </View>
    )
  }

}


const styles = StyleSheet.create( {
    image : {
        width : 120,
        height : 120,
        marginBottom : 40,
		alignSelf : 'center',
    },
	text : {
		alignSelf : 'center',
    }
});