import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Props {
  question: string;
  answer: string;
}

const QuestionComponent = (props: Props) => {
  const [selectQuestion, setSelectQuestion] = useState(false);

  const toogleQuestionIcon = () => {
    setSelectQuestion(!selectQuestion);
  };
  return (
    <View>
      <View style={styles.questionView}>
        <Text style={styles.questionText}>{props.question}</Text>

        <TouchableOpacity onPress={toogleQuestionIcon}>
          <AntDesign
            name={selectQuestion ? 'up' : 'down'}
            size={24}
            color="#000929"
          />
        </TouchableOpacity>
      </View>
      {selectQuestion && (
        <View style={styles.answerView}>
          <Text style={styles.answerText}>{props.answer}</Text>
        </View>
      )}
    </View>
  );
};

export default QuestionComponent;

const styles = StyleSheet.create({
  questionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(82),
    marginLeft: responsiveWidth(6),
  },
  questionText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    color: '#000929',
  },
  answerText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'PlusJakartaSans j',
    color: '#727880',
    letterSpacing: 0,
    lineHeight: 22,
  },
  answerView: {
    width: responsiveWidth(70),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
});
