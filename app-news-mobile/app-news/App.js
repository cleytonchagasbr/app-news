import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';

import Logo from './components/Title.js'
import News from './components/News.js'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView>
          <View style={styles.container}>
            <Logo />
            <News />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  containerSafe: {
    flex: 1,
    padding: 0
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 45,
    marginStart: 25,
    marginEnd: 25
  }

});