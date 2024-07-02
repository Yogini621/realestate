import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Notifications = () => {
  return (
    <View style = {styles.container}>
                  <View style = {styles.myAccountView}>
                                    <Text>My Account</Text>

                  </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  myAccountView: {
    width: responsiveWidth(90),
    borderWidth: 1,
    borderColor: '#9fc5e9',
    backgroundColor: '#f4faff',
    padding:10,
    alignSelf:'center'
  },
});