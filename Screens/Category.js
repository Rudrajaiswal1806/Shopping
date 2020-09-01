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
  Input,
  CardItem,
  Spinner
} from "native-base";

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SliderBox } from "react-native-image-slider-box";
import ProductCard from 'FirstProject/Screens/ProductCard';
import NewArrival from 'FirstProject/Screens/NewArrival';
import BestSeller from 'FirstProject/Screens/BestSeller';
import styles from "FirstProject/Screens/Styles";

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      bestSeller: []    
    };
  }

  componentDidMount() {

  fetch("https://run.mocky.io/v3/61faa972-1b07-46b1-9ebb-082c380e5e62")
  .then(response => response.json())
  .then((jsonResponse)=> {
    //alert(jsonResponse.products[2].price);
    this.setState({
      bestSeller: jsonResponse.bestSeller,
      loading: false,
    })
  })
  .catch(error=>console.log(error));

   fetch("https://run.mocky.io/v3/b124f261-874a-46de-920d-e5f909e68e41")
  .then(response => response.json())
  .then((jsonResponse)=> {
    //alert(jsonResponse.products[2].price);
    this.setState({
      products: jsonResponse.products,
      loading: false,
    })
  })
  .catch(error=>console.log(error));
}

  _onChangeSearchText(text) {

    //do something

}

render() {


  return (
    <Root>
      <StatusBar barStyle="dark-content" />
       {!this.state.loading && (
        <Container style={{paddingBottom:60, backgroundColor: "#fff"}}>
          <Header style={{backgroundColor:"#fff"}}>
              <Left>
                <Icon name="arrow-back" style={styles.headerTitle} onPress={() => this.props.navigation.navigate('Home')} />
              </Left>
              <Body>
                <Title style={styles.headerTitle}>First</Title>
              </Body>
              <Right>
                  <Icon  name="shopping-outline" type="MaterialCommunityIcons" style={styles.headerTitle} />
              </Right>
            </Header>
            <View style={styles.searchBar}>
              <Item regular style={styles.searchBar}> 
                <Icon name="search" />
                <Input onChangeText={this._onChangeSearchText.bind(this)} placeholder="Search"/>
              </Item>
           </View>
            <Content style={{paddingLeft:15}}>
            <View>
               <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:10,marginBottom:10}}>
                  <View><Text style={styles.lineText}>Modern</Text></View>
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
             
                <View style={{ paddingTop:10,marginBottom:10}}>
                  <View><Text style={styles.lineText}>New Arrivals </Text></View>
                </View>
                    <View>
              <FlatList
                data={this.state.products}
                renderItem={({item}) =>
                  <NewArrival productInfo={item} {...this.props}/>
                }
                horizontal = { true }
                initialNumToRender= {3}
                showsHorizontalScrollIndicator = { false }
               
                />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:10,marginBottom:10}}>
                  <View><Text style={styles.lineText}>Best Sellers </Text></View>
                </View>
                    <View>
              <FlatList
                data={this.state.bestSeller}
                renderItem={({item}) =>
                  <BestSeller bestSeller={item} {...this.props}/>
                  }
                horizontal = { true }
                initialNumToRender= {3}
                showsHorizontalScrollIndicator = { false }
               
                />
                </View>
               
            </Content>
      </Container>)}
    </Root>
  );
}
};
