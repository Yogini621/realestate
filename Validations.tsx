import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const linkRegex = new RegExp('^[a-zA-Z0-9.-]+.(com|org|net|edu|gov|in)(/S*)?$');
const nameRegex = new RegExp('^(?!)([a-zA-Z0-9]+)(?<!_)$');
const mobileRegex = new RegExp('^d{10}$');
const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');

export const userNameValidation = (name: string) => {
  if (name.length === 0) {
    Alert.alert('userName must be enter');
  } else if (nameRegex.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const emailValidation = (email: string) => {
  if (email.length === 0) {
    Alert.alert('email address must be enter');
  } else if (emailRegex.test(email) === true) {
    return true;
  } else {
    return false;
  }
};

export const contactValidation = (contact: string) => {
  if (contact.length === 0) {
    Alert.alert('mobile number must be enter');
  } else if (mobileRegex.test(contact) === true) {
   console.log(true)
    return true;
  } else {
    return false;
  }
};

export const linkValidation = (link: string) => {
  if (linkRegex.test(link) === true) {
    return true;
  } else {
    return false;
  }
};

const styles = StyleSheet.create({});
