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

export default class BestSeller extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Card style={styles.bestSellerCard}>
			     <CardItem  cardBody>
              <Body>
          		  <Image source={{uri: this.props.bestSeller.image}}  style={styles.bestSellerImg}/>
                <Text numberOfLines = { 1 } ellipsizeMode = 'tail' style={styles.bestSellerOffers}>{this.props.bestSeller.title}</Text>
                <Text numberOfLines = { 1 } ellipsizeMode = 'tail' style={styles.bestSellerDiscount}>{this.props.bestSeller.subTitle}</Text>
              </Body>
        	</CardItem>
		</Card>
    );
  }
}


