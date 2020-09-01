/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Text as Txt,
} from 'react-native';

import {
  Root,
  Content,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  StyleProvider,
  Header,
  Item,
  Body,
  Title,
  Card,
  CardItem,
  Spinner
} from "native-base";

import { SliderBox } from "react-native-image-slider-box";
import styles from 'FirstProject/Screens/Styles';
import Category from 'FirstProject/Screens/Category';
import ProductCard from 'FirstProject/Screens/ProductCard';


export default class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      loading: true,
      category:'',
      products: '',
      images: []
    
    }
  }

componentDidMount() {

  fetch("https://run.mocky.io/v3/ba30e140-20b9-4b31-8121-77be6d296817")
  .then(response => response.json())
  .then((jsonResponse)=> {
    //alert(jsonResponse.products[2].price);
    this.setState({
      products: jsonResponse.products,
      loading: false,
    })
  })
  .catch(error=>console.log(error));
  this.setState({factory: "Category"});
  //alert(this.state.factory);
  

  fetch("https://run.mocky.io/v3/75fb7b99-da48-4c2b-a617-102ba46c7ac7")
  .then(data => data.json())
  .then((cat)=> {
   // alert(JSON.stringify(cat.category)); //alert(JSON.stringify(this.state.category));
    this.setState({
      category: cat.category,
      loading: false,
    })
  })
  .catch(error=>console.log(error));
  

   fetch("https://run.mocky.io/v3/60e031b6-5708-4612-80e1-db3c0b90e6b8")
  .then(response => response.json())
  .then((jsonResponse)=> {
    //alert(jsonResponse.products[2].price);
    this.setState({
      images: jsonResponse.images,
      loading: false,
    })
  })
  .catch(error=>console.log(error));
  
}

render() {
  return (
    
    <Root>
 
         <StatusBar barStyle="dark-content" />
         {!this.state.loading && (
        <Container style={{paddingBottom:60, backgroundColor: "#fff"}}>
        <Header style={{backgroundColor:"#fff"}}>
        <Left/>
        
            <Body>
                  <Title style={{ alignSelf: "center" }} style={styles.headerTitle}>Shopping</Title>
              </Body>
              <Right>
              <Icon onPress={() => this.props.navigation.navigate('Category')} name="arrow-forward" style={{color: "#000"}}/>
              </Right>
        </Header>
        <Content>
        <SliderBox images={this.state.images} />
         <View>
              <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:10,marginBottom:10}}>
                        <View><Text style={styles.lineText}>{this.state.factory}</Text></View>
                    </View>
                    <FlatList
                    data={this.state.category}
                    renderItem={({item}) =>
                      <Card style={styles.categoryCard}>
                        <CardItem>
                          <Image source={{uri: item.image}}  style={styles.flatListImg}/>
                        </CardItem>
                        <CardItem style={styles.catText}>
                            <Text style={styles.text2}>{item.name} </Text>
                        </CardItem>
                      </Card>}
                    horizontal = { true }
                    initialNumToRender= {3}
                    showsHorizontalScrollIndicator = { false }
                   
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:10,marginBottom:10}}>
                  <View><Text style={styles.lineText}>Top Trends </Text></View>
                </View>
              <FlatList
                horizontal = { true }
                initialNumToRender= {3}
                showsHorizontalScrollIndicator = { false }
                data={this.state.products}
                  renderItem={({item}) =>
                    <ProductCard productInfo={item} {...this.props}/>
                    }
                />
                    </View> 
        </Content>
        </Container>)}

    </Root>
    );
   };
 }