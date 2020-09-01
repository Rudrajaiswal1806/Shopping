import React, { Component } from "react";
import {Image} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";
import {
  Card,
  CardItem,
  Body,
  Text,
  Icon,
} from "native-base";

export default class ProductCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Card style={styles.catCard}>
			     <CardItem cardBody>
             <Body>
          		<Image source={{uri: this.props.productInfo.image}}  style={styles.productListImg}/>
              <Text numberOfLines = { 1 } ellipsizeMode = 'tail' style={styles.productCardTitle}>{this.props.productInfo.name}</Text>
              <Text numberOfLines={2} style={styles.productPriceTxt1}>{this.props.productInfo.desc}</Text>
              <Text style={styles.productCardTitle}>{this.props.productInfo.price}</Text>
              <Icon name="pluscircle" type="AntDesign" style={styles.productPlusCircle}/>
              </Body>
        	</CardItem>
		</Card>
    );
  }
}


