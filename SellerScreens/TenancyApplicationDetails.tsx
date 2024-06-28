import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

interface Props {
  navigation: any;
}

const TenancyApplicationDetails: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
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
        <Text style={styles.applicationText}>Application Summary</Text>
        <View style={styles.incomeView}>
          <View style={styles.incomeDirectionView}>
            <View>
              <Text style={styles.incomeText}>Total Income</Text>
              <Text style={styles.rentText}>$4,500/mo</Text>
            </View>
            <View>
              <Text style={styles.incomeText}>Income o Rent</Text>
              <Text style={styles.rentText}>2.3X</Text>
            </View>
          </View>
          <View style={styles.incomeDirectionView}>
            <View>
              <Text style={styles.incomeText}>Occupants</Text>
              <Text style={styles.rentText}>1 person</Text>
            </View>
            <View>
              <Text style={styles.incomeText}>Move-in-Date</Text>
              <Text style={styles.rentText}>Dec 18,2021</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <Text style={styles.incomeText}>Vehicles</Text>
          <Text style={styles.rentText}>Porsche 718 Cayman</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TenancyApplicationDetails;

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
  applicationText: {
    color: '#1a202c',
    fontSize: responsiveFontSize(2.4),
    fontFamily: 'PlusJakartaSans a',
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(6),
  },
  incomeView: {
    borderWidth: 1,
    borderColor: '#e0def7',
    borderRadius: 10,
    //     padding: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  incomeText: {
    color: '#394150',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.8),
  },
  rentText: {
    color: '#000929',
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  incomeDirectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  seperator: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(80),
    backgroundColor: '#e0def7',
    marginTop: responsiveHeight(2.8),
    marginBottom: responsiveHeight(2.8),
  },
});
