import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9', padding: 20 }}>
      
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        🔒 Privacy Policy
      </Text>

      {/* Introduction */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📜 Introduction
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Welcome to <Text style={{ fontWeight: 'bold' }}>Ajaydhurwe.tech</Text>! We value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines the types of personal data we collect and how we use, disclose, and safeguard it.
      </Text>

      {/* Information We Collect */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📝 Information We Collect
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        <FontAwesome5 name="user" size={18} color="blue" /> Personal Identification Information (Name, email address, etc.)
      </Text>

      {/* <Text style={{ fontSize: 16, marginBottom: 5 }}>
        <MaterialIcons name="computer" size={18} color="blue" /> Technical Data (IP address, browser type, etc.)
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        <Ionicons name="stats-chart" size={18} color="blue" /> Usage Data (Pages visited, time spent, etc.)
      </Text> */}

      {/* How We Use Your Information */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🔍 How We Use Your Information
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        We use the information collected to provide and improve our services, communicate with users, and ensure a secure experience on our platform.
      </Text>

      {/* Data Security */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🔐 Data Security
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        We employ security measures to protect your personal data from unauthorized access, alteration, or destruction.
        However, no method of transmission over the Internet or method of electronic storage is 100% secure.
      </Text>

      {/* Changes to Privacy Policy */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        ⚠️ Changes to This Privacy Policy
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the bottom of the page will be updated accordingly.
      </Text>

      {/* Contact Us */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📞 Contact Us
      </Text>
      <Text 
        style={{ fontSize: 16, color: 'blue' }} 
        onPress={() => Linking.openURL('mailto:contact@ajaydhurwe.tech')}
      >
        📧 Email: contact@ajaydhurwe.tech
      </Text>
<Text></Text>
<Text></Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;
