import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Top 10 - News Brazil',
      checkNew: 'new',
      urlImagem: "https://app-imagens-aws.s3-sa-east-1.amazonaws.com/politica.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      checkNew: '',
      urlImagem: "https://app-imagens-aws.s3-sa-east-1.amazonaws.com/politica.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      checkNew: 'new',
      urlImagem: "https://app-imagens-aws.s3-sa-east-1.amazonaws.com/politica.jpg"
    },
  ];
  function Item({ title, checkNew, urlImagem}) {
    return (
        <View>
            <View style={styles.containerDescription}>
                <Text style={styles.titleNews}> {title} </Text>
                <Text style={styles.new}> {checkNew} </Text>   
            </View>
                <Image source={"https://app-imagens-aws.s3-sa-east-1.amazonaws.com/politica.jpg"} style={styles.imagensNews}/>
        </View>        
    );
  }

export default class News extends Component {
    render() {
      return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item, checkNew, urlImagem }) => 
                <Item title={item.title} checkNew={item.checkNew} urlImagem={item.urlImagem} />}
                keyExtractor={item => item.id}
            />
        </View>

      );
    }
  }

const styles = StyleSheet.create({

    containerDescription: {
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        width: 300,
        height: 100,
        alignItems: 'center',
        padding: 0
    },
    titleNews: {
        fontSize: 18,
        marginEnd: 25,
        color: "#565656",
    },
    new: {
        color: '#19D568',
        fontSize: 17,
        fontWeight: 'bold'
    },
    
    titleLogo: {
        fontSize: 25,
        color: 'black',
        
    },
    imagensNews: {
        width: 300, 
        height: 100,
        borderRadius: 8 
    }


  });