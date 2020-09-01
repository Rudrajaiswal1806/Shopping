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
  Left,
  Right,
} from "native-base";

export default class NewArrival extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={styles.newArrivalCard}>
           <CardItem cardBody>
            <Left>
              <Image source={{uri: this.props.productInfo.image}}  style={styles.newArrivalImg}/>
              <Body>
                <Text numberOfLines={1} ellipsizeMode = 'tail' style={styles.productNameTxt}>{this.props.productInfo.name}</Text>
                <Text numberOfLines={2} style={styles.productPriceTxt1}>{this.props.productInfo.desc}</Text>
                <Text style={styles.productNameTxt}>{this.props.productInfo.price}</Text>
                <Icon name="pluscircle" type="AntDesign" style={styles.plusCircleArrivals} />
              </Body>
            </Left>
          </CardItem>
    </Card>
    );
  }
}


