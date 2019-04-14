import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ActivityIndicator} from 'react-native';
import Slider from '@react-native-community/slider';
import smallLogo from './images/VegaStar.png';
import WalletAmount from './components/WalletAmount.js';
import SplashScreen from 'react-native-splash-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import {IntroSlides} from './components/Introslides';
import { Link } from 'react-router';


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

export default class App extends Component {
  constructor(props){
    super(props);
    this.cool = new IntroSlides();
    this.state = {
      showRealApp: false
    }
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }


  render() {
    if (this.state.showRealApp) {
      return (
        <View>
          {/* Black Wallet Screen */}
          <View style={styles.myBalance}>
            <Image source={smallLogo} style={styles.smallLogo}/>
            <Text style={styles.myWallet}>Your Wallet</Text>
            <View style={styles.line}></View>
            <WalletAmount />
          </View>
          {/* White Screen with Slider (DAI CONVERSION) */}
          <View style={styles.daiView}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textAlign: 'center', color: '#000', fontSize: 30, fontWeight: '200', right: 80, top: 50}}>
                DAI
              </Text>
              <Slider
                style={{width: 175, right: 80, top: 70}}
                borderRadius={20}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#D3B7E2"
                maximumTrackTintColor="#3C3B3B"
              />
            </View>
            {/* Amount Changing */}
            <View style={styles.vegaValue}>
              <Text style={styles.vegaAmount}>Amount</Text>
              <View style={styles.lineTwo}></View>
            </View>
          </View>
          {/* Screen for Requirements */}
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <View style={styles.requirementBox}>
              <View style={styles.invisbox}>
                <Text style={styles.requirementText}>- Current price on ETH2DAI is >1% different from the median price</Text>
                <Text style={styles.requirementText}>- Current price on ETH2DAI is >1% different from the median of all checkpoint in the last 3.5 minutes</Text>
                <Text style={styles.requirementText}>- The current price on ETH2DAI is >1% differnt from the last checkpoint</Text>
                <Text style={styles.requirementText}>- It has been >3 hours since the last price checkpoint was registered</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
                <CircleButton name='Poke!'/>
              </View>
            </View> 
          </View>
          
        </View>
      );
    } else {
      return <AppIntroSlider renderItem={this.cool._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}

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

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3C3B3B',
  },
  myBalance: {
    backgroundColor: '#3C3B3B',
    height: 220,
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    position: 'absolute',
  },
  smallLogo: {
    height: 30,
    width: 30,
    top: 40,
    justifyContent: 'center',
  },
  myWallet: {
    position: 'absolute', 
    textAlign: 'center', 
    color: '#fff',
    fontSize: 30,
    fontWeight: '100',
    top: 70,
  },
  line: {
    width: 50,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    top: 85,
  },
  lineTwo: {
    width: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    top: 7,
  },
  daiView: {
    alignItems: 'center',
    height: 200,
  },
  requirementBox: {
    height: 400,
    width: 350,
    borderRadius: 10,
    backgroundColor: '#3C3B3B',
  },
  vegaValue: {
    height: 150,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#3C3B3B',
    top: -50,
    left: 100,
    alignItems: 'center',
  },
  vegaAmount: {
    color: '#fff',
    textAlign: 'center', 
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
    top: 5,
  },
  requirementText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '100',
    padding: 6,
    textAlign: 'center'
  },
  invisbox: {
    borderRadius: 10,
    padding: 35,
  },
  SubmitButtonStyle: {
    width: '60%',
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#D3B7E2',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#D3B7E2',
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }
});
