// SignUpScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function SignUpScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    // Implement sign-up logic using mock API
    // Navigate to the search doctors screen on successful sign-up
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text onPress={() => navigation.navigate('SignIn')}>Already have an account</Text>
    </View>
  );
}

export default SignUpScreen;
