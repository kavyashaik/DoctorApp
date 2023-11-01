import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>User Profile</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          // Add logic to sign the user out
        }}
      />
    </View>
  );
};

export default ProfileScreen;
