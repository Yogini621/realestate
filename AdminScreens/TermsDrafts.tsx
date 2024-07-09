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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialComminityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {
  navigation: any;
}

const TermsDrafts: React.FC<Props> = ({navigation}) => {
  const TermsDrafts = useSelector(
    (state: RootState) => state.termsDraft.termsDraft,
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
              <FontAwesome5 name="grip-lines" size={20} color="#073762" />
            </TouchableOpacity>
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotificationList')}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#073762"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <FontAwesome5 name="grip-lines" size={20} color="#073762" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.privacyText}>Privacy Policy</Text>
        <View style={styles.draftButtonView}>
          <TouchableOpacity style={styles.draftButton}>
            <MaterialComminityIcons
              name="file-edit-outline"
              size={22}
              color="#073762"
            />
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <View style={styles.addAndPublishButtonDirection}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('TermsAndConditions')}>
              <FontAwesome name="plus" size={20} color="white" />
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.publishButton}>
              <Text style={styles.publishText}>Publish</Text>
              <Feather name="chevron-down" size={22} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        {TermsDrafts.map(item => (
          <View style={styles.policyView} key={item.id}>
            <View style={styles.titleAndDateView}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default TermsDrafts;
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
  iconView: {
    width: responsiveWidth(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  privacyText: {
    color: '#000000',
    fontSize: responsiveFontSize(3),
    fontFamily: 'PlusJakartaSans a',
    left: responsiveWidth(4),
    marginTop: responsiveHeight(2.8),
  },
  draftButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3.2),
  },
  addAndPublishButtonDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(42),
  },
  addButton: {
    backgroundColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  draftButton: {
    borderWidth: 1,
    borderColor: '#073762',
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  draftsText: {
    color: '#073762',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  addText: {
    color: 'white',
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans j',
  },
  publishButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  publishText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    right: responsiveWidth(1),
  },
  policyView: {
    backgroundColor: '#ffffff',
    elevation: 3,
    width: responsiveWidth(90),
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10,
  },
  titleText: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'PlusJakartaSans a',
  },
  titleAndDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
  },
  descriptionView: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2.8),
  },
  descriptionText: {
    color: '#727880',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    lineHeight: 21,
  },
});
