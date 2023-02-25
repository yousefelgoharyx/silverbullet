import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Container from '../ui/Container';
import SearchInput from '../ui/SearchInput';
import Contact from '../ui/Contact';
import {getImage} from '../utils/getImage';
import AppHead from '../ui/AppHead';
import {createStyles} from '../utils/createStyles';
import {useNavigation} from '@react-navigation/core';
const Home = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <AppHead
        onSettingsPress={() => navigation.navigate('Settings' as never)}
      />
      <View style={{paddingBottom: 16}}>
        <SearchInput placeholder="Search for chat and messages" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 16, paddingVertical: 16}}>
        <Contact
          image={getImage('anthony', 'b6e3f4')}
          name="Anthony"
          message="Hey buddy"
          iam
        />
        <Contact
          image={getImage('Clarice', 'c0aede')}
          name="Clarice"
          message="Yea that was awesome!"
        />
        <Contact
          image={getImage('jessica', 'c0aede')}
          name="Jessica"
          message="Are you free tonight?"
          iam
        />
        <Contact
          image={getImage('Andro', 'ffd5dc')}
          name="Andro"
          message="Thanks for helping me!"
          iam
        />
        <Contact
          image={getImage('angela', 'ffdfbf')}
          name="Angela"
          message="How are you doing today?"
          unread
        />
        <Contact
          image={getImage('darline', 'ffdfbf')}
          name="Darline"
          message="Could you take a look at this?"
          unread
        />
        <Contact
          image={getImage('Jassmine', 'c0aede')}
          name="Jassmine"
          message="I'm glad we met"
          iam
        />
        <Contact
          image={getImage('Jody', 'ffd5dc')}
          name="Jody"
          message="Looool, that's funny"
          unread
        />
        <Contact
          image={getImage('aanet', 'ffdfbf')}
          name="Janet"
          message="Well done!"
        />
        <Contact
          image={getImage('aouise', 'd1d4f9')}
          name="Louise"
          message="This is the recipe I was talking about. It's so good!"
        />
        <Contact
          image={getImage('griffin', 'b6e3f4')}
          name="Peter"
          message="I can't wait to see you again!"
          iam
        />
        <Contact
          image={getImage('Vector', 'c0aede')}
          name="Vector"
          message="That is bad news :( I'm sorry. I hope you feel better soon. Tell me if I can help you with anything."
          iam
        />
      </ScrollView>
    </Container>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.primary,
    },
  }),
);
export default Home;
