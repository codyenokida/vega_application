
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from '../App.js';
import coin from '../images/coin.png';
import coin2 from '../images/crypto.png';
import arrow from '../images/arrow.png';
import ball from '../images/modernball.png';
import smallLogo from '../images/VegaStar.png';

class CircleButton extends Component {
  render() {
    return (
       <TouchableOpacity
          style = {
            styles.SubmitButtonStyle
          }
          activeOpacity = { 
            .75 
          }
          onPress = { 
            this.props.onPress
          }
       >
        <Text style = {styles.TextStyle}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}



export class IntroSlides extends React.Component {
  constructor(){
  	super();
  	this.state = { showRealApp: false }
  }
  _renderItem = (item) => {
    if (item.key === 'somethun'){
      return (
        <View style={styles.background}>
            <Image source={coin} style={styles.images}/>
            <Image source={coin2} style={styles.image1}/>
            <Text style={styles.text}>{item.text}</Text>
            <Image source={arrow} style={styles.arrow}/>
            <Image source={arrow} style={styles.arrow1}/>
            <Image source={arrow} style={styles.arrow2}/>
            <Text style={styles.text2}>Digital currency regulated by encryption techniques</Text>
        </View>
      );
    }
    else if (item.key === 'somethun-dos'){
      return (
        <View style={styles.background}>
          <Text style={styles.blockchain}>BLOCKCHAIN</Text>
          <Image style={styles.ball} source={ball}/>
          <Text style={styles.blockchain1}>Secure list of records with millions of daily users!</Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.background}>
          <Text style={styles.text4}>Grow with Vega</Text>
          <Image source={smallLogo} style={styles.logo}/>
          <Text style={styles.text3}>Like a star, we shine the light on the truth of cryptocurrency!</Text>
          <Text style={styles.text3}>Welcome to the Vega Fam!</Text>
          <CircleButton name='Learn More!' />
        </View>
      );
    }
  } 
  _onDone = () => {
    this.setState({ showRealApp: true });
  }

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3C3B3B',
    height: '100%',
    alignItems: 'center',
  },
  SubmitButtonStyle: {
    width: '60%',
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#D3B7E2',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#D3B7E2',
    top: 230,
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  logo: {
    height: 250,
    width: 250,
    position: 'relative',
    top: 150
  },
  ball: {
    height: 300,
    width: 300,
    top: 150,
  },
  images: {
    height: 150,
    width: 150,
    position: 'absolute',
    top: 100,
    right: 220,
  },
  image1: {
    height: 150,
    width: 150,
    position: 'absolute',
    top: 100,
    left: 220,
  },
  text: {
    textAlign: 'center', 
    color: '#fff',
    fontSize: 50,
    fontWeight: '200',
    top: 300,
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  text2: {
    textAlign: 'center', 
    color: '#fff',
    fontSize: 35,
    fontWeight: '200',
    top: 450,
    padding: '5%',
  },
  text3: {
    textAlign: 'center', 
    color: '#fff',
    fontSize: 30,
    fontWeight: '100',
    top: 170,
  },
  text4: {
    textAlign: 'center', 
    color: '#fff',
    fontSize: 50,
    fontWeight: '200',
    top: 100,
  },
  blockchain: {
    textAlign: 'center', 
    color: '#D3B7E2',
    fontSize: 50,
    fontWeight: '200',
    top: 100,
  },
  blockchain1: {
    textAlign: 'center', 
    color: '#fff',
    fontSize: 40,
    fontWeight: '200',
    top: 200,
    padding: '5%',
  },
  arrow: {
    height: 50,
    width: 50,
    top: 450,
    padding: 0,
    position: 'absolute'
  },
  arrow1: {
    height: 50,
    width: 50,
    top: 480,
    padding: 0,
    position: 'absolute'
  },
  arrow2: {
    height: 50,
    width: 50,
    top: 510,
    padding: 0,
    position: 'absolute'
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'What is cryptocurrency?',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];