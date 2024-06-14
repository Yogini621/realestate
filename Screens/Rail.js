import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Rail = () => <View style={styles.root} />;

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#9b9b9b',
    // width:responsiveWidth(60)
  },
});
