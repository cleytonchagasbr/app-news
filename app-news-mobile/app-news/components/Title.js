import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default class Title extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.titleLogo}>News Brasil</Text>
          <Icon name="newspaper-o" size={30} color="black" />
        </View>
      );
    }
  }

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        margin: 20,
        marginBottom: 45
    },
    titleLogo: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5
    }

  });

  
  