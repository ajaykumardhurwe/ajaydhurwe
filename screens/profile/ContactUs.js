
import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

const ContactUs = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9', padding: 20 }}>
      
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        📞 Contact Us
      </Text>

      {/* Email Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📧 Email
      </Text>
      <Text 
        style={{ fontSize: 16, marginBottom: 5, color: 'blue' }} 
        onPress={() => Linking.openURL('mailto:contact@ajaydhurwe.tech')}
      >
        <MaterialIcons name="email" size={18} color="blue" /> contact@ajaydhurwe.tech
      </Text>
      <Text 
        style={{ fontSize: 16, marginBottom: 10, color: 'blue' }} 
        onPress={() => Linking.openURL('mailto:ajaykumardhurwe049@gmail.com')}
      >
        <MaterialIcons name="email" size={18} color="blue" /> ajaykumardhurwe049@gmail.com
      </Text>

      {/* Phone Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📱 Phone
      </Text>
      <Text 
        style={{ fontSize: 16, marginBottom: 10, color: 'blue' }} 
        onPress={() => Linking.openURL('tel:+919301084259')}
      >
        <Ionicons name="call" size={18} color="blue" /> +91 9301084259
      </Text>

      {/* Website Section */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🌐 Website
      </Text>
      <Text 
        style={{ fontSize: 16, color: 'blue' }} 
        onPress={() => Linking.openURL('https://www.ajaydhurwe.tech')}
      >
        <FontAwesome name="globe" size={18} color="blue" /> www.ajaydhurwe.tech
      </Text>

    </ScrollView>
  );
};

export default ContactUs;
