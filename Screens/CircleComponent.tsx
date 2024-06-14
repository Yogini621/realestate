import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props{
  icon:any;
  keyIcon:any;
  propertyText:string;
  descriptionText:string
}

const CircleComponent= (props:Props) => {
  return (
    <View>
      <View style={styles.circlelayOut}>
        <View style={styles.circle1}>
          <Entypo name={props.icon} size={28} color="white" />
          <View style={styles.keyView}>
            <MaterialIcons name={props.keyIcon} color="white" />
          </View>
        </View>
      </View>
      <Text style={styles.PropertyText}>{props.propertyText} </Text>
      <View style={styles.descriptionView1}>
        <Text style={styles.descriptionText}>{props.descriptionText}
         
        </Text>
      </View>
    </View>
  );
}

export default CircleComponent

const styles = StyleSheet.create({
  circlelayOut: {
    height: 51,
    width: 51,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9fc5e9',
    alignItems: 'center',
    justifyContent: 'center',
    left: responsiveWidth(4.4),
  },
  circle1: {
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fc5e9',
  },
  keyView: {
    backgroundColor: '#073762',
    height: responsiveHeight(2.4),
    width: responsiveWidth(4),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: -4,
  },
  PropertyText: {
    color: '#000000',
    fontSize: responsiveFontSize(2.6),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4.4),
    marginTop: responsiveHeight(1),
  },
  descriptionText: {
    color: '#4d5461',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
    left: responsiveWidth(2.8),
  },
  descriptionView1: {
    width: responsiveWidth(96),
    alignSelf: 'center',
  },
});