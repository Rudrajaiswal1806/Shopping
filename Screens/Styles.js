const React = require("react-native");
const { StyleSheet, Platform, Dimensions } = React;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

// Main page

banner: { 
  height:deviceHeight/4,
  width:100,
  //flex: 0,
  marginBottom:2,
  backgroundColor: "#dfddfd"
},

headerTitle: {
  fontSize: 25,
  fontWeight: "bold",
   color: "#000"
},



   catCard:{
    marginTop:0,
    paddingTop:5,
    paddingRight:5,
    paddingLeft:5,
    paddingBottom:5,
    marginLeft:5,
    flexWrap: "nowrap"
  },

  catText:{
    alignSelf: "center",
    paddingTop:1,
    paddingBottom:0,
  },

  // Common
  padding5: {
    paddingLeft: 5,
    backgroundColor: "#fff",
  },

  ribbon : {
    color: "#fff",
    backgroundColor: "red",
    fontSize:14,
    position: 'absolute',
    top:0,
    left:0,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:5,
    paddingRight:5
  },

  
  noLeftMargin: {
    marginLeft:0,
  },

  noPadding: {
    paddingBottom:0,
    paddingTop:0
  },

  listCardItem: {
    paddingBottom:0,
    paddingTop:4,
  },

  cartCount: {
    height: 22,
    width: 22,
    position: 'absolute',
    right:0,
    top:2
  },

  lineText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20
  },

  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  text2: {
    
    fontSize: 12,
    marginLeft: 5
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  heading:{
    padding : 5,
    backgroundColor: "#dfddfd"
  },


// SubCategory Page Css
  flatListImg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('8%'),
    width:wp('20%'),
  },

  categoryCard: {
    marginTop:0,
    paddingTop:2,
    paddingRight:0,
    paddingLeft:1,
    paddingBottom:5,
    marginLeft:5,
    flexWrap: "nowrap"
  },

  // Product Card Mini Css Start

   catCard:{
    borderRadius: 10,
    marginTop:0,
    paddingTop:10,
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:10,
    marginLeft:3,
    flexWrap: "wrap",
    height: hp('35%'),
    width:wp('50%')
  },

  productCardTitle: {
    fontSize:wp('4.5%'),
    color: '#333',
    width:wp('36%'),
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight:'bold',
    marginTop:2,
    marginBottom:2
  },

  productListImg: {
    borderRadius: 10,
    height: hp('20%'),
    width:wp('44%'),
    marginBottom:5,
  },

  productNameTxt: {
    fontSize:wp('4%'),
    color: '#333',
    width:wp('36%'),
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight:'bold'
  },

  productOldPriceTxt: {
    fontSize:12,
    color: '#333',
    marginTop:2,
    alignSelf: 'center',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },

productPriceTxt1: {
    fontSize:10,
    color:'grey',
    marginTop:2,

    alignSelf: 'center',
  },
  productPriceTxt: {
    fontSize:20,
    fontWeight: '700',
    marginTop:2,
    marginLeft:5
  },

  productPlusCircle: {
  position: 'absolute',
  right: 0,
  bottom: 0,
  fontSize: 25,
},


// Search 
searchBar: {
  borderRadius: 5,
  paddingTop:4,
  paddingRight:4,
  paddingLeft:4,
  paddingBottom:4,
  width:wp('90%'),
  marginLeft: 10,
  marginRight: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 }, // change this for more shadow
  shadowOpacity: 0.4,
  shadowRadius: 6,

},

// New Arrival card
newArrivalCard: {
    borderRadius: 5,
    marginTop:0,
    paddingTop:4,
    paddingRight:1,
    paddingLeft:4,
    paddingBottom:4,
    marginLeft:5,
    flexWrap: "nowrap",
    height: hp('10%'),
    width:wp('70%')
},

newArrivalImg: {
  borderRadius: 5,
  height: hp('8%'),
  width:wp('20%'),
},

plusCircleArrivals: {
  position: 'absolute',
  right: 4,
  bottom: 4,
  fontSize: 16,
},

// New Arrival card
bestSellerCard: {
    borderRadius: 10,
    marginTop:0,
    marginLeft:10,
    flexWrap: "nowrap",
    height: hp('20%'),
    width:wp('70%')
},

bestSellerImg: {
    borderRadius: 10,
    height:hp('20%'),
    width:wp('70%'),
    marginBottom:5,

},

bestSellerOffers: {
  position: 'absolute',
  left: 10,
  top: 10,
  fontSize: 16,
  fontWeight: "bold",
  color: "#fff"

},

bestSellerDiscount: {
  position: 'absolute',
  left: 10,
  top: 30,
  fontSize: 12,
  fontWeight: "bold",
  color: "#fff"
},
   // Product Card Mini Css End
};