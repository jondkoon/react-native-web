import React from 'react';
import { storiesOf } from '../../ui-explorer';
import { StyleSheet, Text, View } from 'react-native';

const HoverScreen = () => (
  <View>
    <View accessibilityRole="button" style={styles.button}>
      <Text selectable={false} style={{ color: '#333' }}>
        I have a hover and active style
      </Text>
    </View>
    <View accessibilityRole="button" style={[styles.button2, { marginTop: 10 }]}>
      <Text selectable={false} style={{ color: '#333' }}>
        I have a hover and active style
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'transparent',
    ':hover': {
      borderColor: '#AAA'
    },
    ':active': {
      backgroundColor: '#EEE'
    },
    ':focus': {
      outline: 'none',
      borderColor: 'blue'
    }
  },
  button2: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'transparent',
    ':hover': {
      borderColor: '#AAA'
    },
    ':active': {
      backgroundColor: '#EEE'
    },
    ':focus': {
      outline: 'none',
      borderColor: 'blue'
    }
  }
});

storiesOf('Example apps', module).add('Hover', HoverScreen);
