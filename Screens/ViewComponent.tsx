import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  backgroundColor: string;
  headerText: string;
  descriptionText: string;
  icon: any;
  textColor: string;
  iconColor: string;
  headerTextColor: string;
  onPress: () => void;
}

const ViewComponent = (props: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.homeTourView, {backgroundColor: props.backgroundColor}]}
        onPress={props.onPress}>
        <View style={styles.directionView}>
          <View style={styles.circleView}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={props.icon}
                color={props.iconColor}
                size={28}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.homeTourText, {color: props.headerTextColor}]}>
              {props.headerText}
            </Text>
            <View style={styles.detailsView}>
              <Text style={[styles.detailsText, {color: props.textColor}]}>
                {props.descriptionText}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ViewComponent;

const styles = StyleSheet.create({
  homeTourView: {
    backgroundColor: '#403b77',
    height: responsiveHeight(20),
    width: responsiveWidth(94),
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(3.2),
  },
  circleView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#100a55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(4),
    width: responsiveWidth(70),
  },
  homeTourText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(5.2),
  },
  detailsView: {
    left: responsiveWidth(5.2),
    width: responsiveWidth(70),
    marginTop: responsiveHeight(2),
  },
  detailsText: {
    color: '#9b9b9b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.4),
    lineHeight: 18,
  },
});
