import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebse';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account Created!");
      navigation.navigate("Profile");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Icon name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>

      <TextInput placeholder="✉️ Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="🔑 Password" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="📝 Sign Up" onPress={handleSignUp} color="blue" />
    </View>
  );
}

const styles = { input: { backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10 } };
