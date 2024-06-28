import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props {
  navigation: any;
}

const Tenants: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
            <FontAwesome5 name="grip-lines" size={20} color="#073762" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
            <FontAwesome5 name="grip-lines" size={20} color="#073762" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.tenancyApplicationText}>Tenancy Application</Text>
      <View>
        <View>
          <AntDesign name="search1" color="#6c727f" size={18} />
          <TextInput
            placeholder="Search tenant by name"
            placeholderTextColor="#6c727f"
            style={styles.input}
          />
        </View>
        <View>
          <Text>All tenants</Text>
          <TouchableOpacity>
            <Entypo name="chevron-small-down" color="#6c727f" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tenants;

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
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  tenancyApplicationText: {
    color: '#1a202c',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(2),
  },
  input: {},
});
