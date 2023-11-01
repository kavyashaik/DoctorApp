// SearchDoctorsScreen.js
import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const doctorsData = [
  { id: 1, name: 'Dr. John Smith', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Doe', specialty: 'Dermatologist' },
  // Add more doctor data here
];

function SearchDoctorsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = () => {
    // Implement search logic using mock API or filter the data locally
    const results = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View>
      <Text>Search Doctors</Text>
      <TextInput
        placeholder="Search for doctors"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DoctorDetails', { doctor: item })}
          >
            <Text>{item.name}</Text>
            <Text>{item.specialty}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default SearchDoctorsScreen;