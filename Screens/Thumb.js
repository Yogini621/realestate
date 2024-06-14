import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

const Thumb = () => <View style={styles.root} />;

const styles = StyleSheet.create({
  root: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowOpacity: 0.16,
    shadowRadius: 6,
    borderWidth: 2,
    borderColor: '#073762',
  },
});

export default memo(Thumb);
