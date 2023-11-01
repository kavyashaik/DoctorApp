// DoctorDetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function DoctorDetailsScreen({ route }) {
  const { doctor } = route.params;

  return (
    <View>
      <Text>Doctor Details</Text>
      <Text>Name: {doctor.name}</Text>
      <Text>Specialty: {doctor.specialty}</Text>
      {/* Add more doctor information here */}
      <Button title="Book Appointment" onPress={() => navigation.navigate('BookAppointment')} />
    </View>
  );
}

export default DoctorDetailsScreen;
