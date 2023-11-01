// BookAppointmentScreen.js
import React from 'react';
import { View, Text, Button, DatePickerIOS } from 'react-native';

function BookAppointmentScreen({ route }) {
  const { doctor } = route.params;
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleAppointmentBooking = () => {
    // Implement appointment booking logic using mock API or other means
    // You can send the selectedDate and doctor information to your backend API.
  };

  return (
    <View>
      <Text>Book an Appointment</Text>
      <Text>Doctor: {doctor.name}</Text>
      <DatePickerIOS date={selectedDate} onDateChange={setSelectedDate} />
      <Button title="Confirm Appointment" onPress={handleAppointmentBooking} />
    </View>
  );
}

export default BookAppointmentScreen;
