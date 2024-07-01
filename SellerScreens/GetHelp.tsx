import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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

const GetHelp: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.typeYourQuestionText}>
          Type your question or search keyword
        </Text>
        <View style={styles.inputView}>
          <AntDesign name="search1" color="#7c8493" size={26} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#7c8493"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.questionText}>
            1. How do I start the home buying process?
          </Text>
          <View style={styles.seperator} />
          <Text style={styles.questionText}>
            2. How do I determine the value of a property?
          </Text>
          <View style={styles.seperator} />

          <Text style={styles.questionText}>
            3. How do I sell my property on your website?
          </Text>
          <View style={styles.seperator} />

          <Text style={styles.questionText}>4. What are closing costs?</Text>
          <View style={styles.seperator} />

          <Text style={styles.questionText}>
            5. What's the difference between a buyer's market and a seller's
            market?
          </Text>
        </View>
        <View style={styles.contactView}>
          <View>
            <Text style={styles.DontFindText}>
              Didn't find what you were looking for?
            </Text>
          </View>
          <Text style={styles.contactText}>Contact our customer service</Text>
          <TouchableOpacity style={styles.contactUsButton}>
            <Text style={styles.contactUsText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sortByView}>
          <Text style={styles.sortByText}>Sort by:</Text>
          <View style={styles.mostRelevantAndIconView}>
            <Text style={styles.mostRelevantText}>Most relevant</Text>
            <Entypo name="chevron-small-down" color="#073762" size={26} />
          </View>
        </View>
        <View style={styles.buyingProcessView}>
          <Text style={styles.homeBuyingText}>
            How do I start the home buying process?
          </Text>
          <View style={styles.optionView}>
            {/* <Text>.</Text> */}
            <View style={styles.dot} />
            <Text style={styles.optionText}>
              Determine your budget and get pre-approved for a mortgage.
            </Text>
          </View>
          <View style={styles.optionView}>
            <View style={styles.dot} />
            <Text style={styles.optionText}>
              Make a list of your preferred features and neighborhoods.
            </Text>
          </View>
          <View style={styles.optionView}>
            <View style={styles.dot} />
            <Text style={styles.optionText}>
              Start browsing listings on our website to identify potential
              homes.
            </Text>
          </View>
          <View style={styles.optionView}>
            <View style={styles.dot} />
            <Text style={styles.optionText}>
              Contact a real estate agent to schedule viewings and get expert
              advice.
            </Text>
          </View>
          <View style={styles.optionView}>
            <View style={styles.dot} />
            <Text style={styles.optionText}>
              Once you find a suitable property,make an offer through your
              agent.
            </Text>
          </View>
          <View style={styles.seperator1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GetHelp;
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
  typeYourQuestionText: {
    color: '#7c8493',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2.8),
    left: responsiveWidth(4),
  },
  inputView: {
    borderWidth: 1,
    borderColor: '#9fc5e9',
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(4),
    height: responsiveHeight(6.8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: responsiveHeight(2.8),
  },
  input: {
    width: responsiveWidth(70),
    left: responsiveWidth(2),
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  questionText: {
    color: '#515b6f',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    margin: 10,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  seperator: {
    height: responsiveHeight(0.2),
    backgroundColor: '#d6ddeb',
    width: responsiveWidth(80),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  contactView: {
    backgroundColor: '#073762',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(4),
  },
  DontFindText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  contactText: {
    color: 'white',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(1),
  },
  contactUsButton: {
    backgroundColor: 'white',
    marginBottom: responsiveHeight(2.8),
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(3.2),
    paddingVertical: 10,
  },
  contactUsText: {
    color: '#073762',
    fontFamily: 'PlusJakartaSans m',
    fontSize: responsiveFontSize(1.9),
  },
  sortByView: {
    flexDirection: 'row',
    left: responsiveWidth(4.8),
    alignItems: 'center',
    marginBottom: responsiveHeight(4.8),
  },
  mostRelevantAndIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    width:responsiveWidth(38),
    justifyContent:'space-between'
  },
  sortByText: {
    color: '#7c8493',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
  },
  mostRelevantText: {
    color: '#25324b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(2),
    left:responsiveWidth(2.8)
  },
  buyingProcessView: {
    borderWidth: 1,
    borderColor: '#d6ddeb',
    alignSelf: 'center',
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(4),
  },
  homeBuyingText: {
    color: '#073762',
    left: responsiveWidth(4.8),
    marginTop: responsiveHeight(2.8),
    fontFamily: 'PlusJakartaSans a',
    fontSize: responsiveFontSize(1.9),
  },
  optionView: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignSelf: 'center',
    margin: 5,
  },
  dot: {
    height: responsiveHeight(0.8),
    width: responsiveWidth(1.4),
    borderRadius: 10,
    backgroundColor: '#25324b',
    marginTop: responsiveHeight(1.4),
  },
  optionText: {
    color: '#25324b',
    fontFamily: 'PlusJakartaSans j',
    fontSize: responsiveFontSize(1.9),
    left: responsiveWidth(2),
  },
  seperator1: {
    height: responsiveHeight(0.2),
    backgroundColor: '#d6ddeb',
    width: responsiveWidth(80),
    left: responsiveWidth(6),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(3.2),
  },
});
