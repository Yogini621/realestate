import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  navigation: any;
}

const MessageDetails: React.FC<Props> = ({navigation}) => {
  const [message,setMessage] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MenuPageSeller')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" testID='menu'/>
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#073762"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Images/user.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.messageDirectionView}>
          <Image source={require('../Images/users.png')} style={styles.image} />
          <View style={styles.messageView}>
            <Text> Hi Francis,</Text>
            <Text>
              I’m in love with one of your properties, Beverly Springfield and I
              would like to ask is it on the market?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#ffffff',
    elevation: 1,
    justifyContent: 'center',
  },
  iconView: {
    width: responsiveWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: 30,
  },
  messageView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    width:responsiveWidth(60)
  },
  messageDirectionView:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:responsiveWidth(90),
    alignSelf:'center'
  }
});
