import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';


export default class WalletAmount extends Component {
  render() {
    return (
      <Text style={styles.text}>2,000 ETH</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#D3B7E2',
    fontSize: 60,
    fontWeight: '100',
    textAlign: 'center',
    top: 90,
  },
});
