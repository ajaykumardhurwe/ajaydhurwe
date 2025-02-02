import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function JobDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { job } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Job Title */}
      <Card style={styles.card}>
        <Text style={styles.jobTitle}>💼 {job['Job Title']}</Text>
      </Card>

      {/* Job Description */}
      <Card style={styles.card}>
        <Text style={styles.heading}>📝 Job Description:</Text>
        <Text style={styles.text}>{job['Description']}</Text>
      </Card>

      {/* Start Date & End Date */}
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={[styles.text, { color: 'green' }]}>📅 Start Date: {job['Start Date']}</Text>
          <Text style={[styles.text, { color: 'red' }]}>⏳ End Date: {job['End Date']}</Text>
        </View>
      </Card>

      {/* Location */}
      <Card style={styles.card}>
        <Text style={styles.heading}>📍 Location:</Text>
        <Text style={styles.text}>{job['Location']}</Text>
      </Card>

      {/* Organization/Company Name */}
      <Card style={styles.card}>
        <Text style={styles.heading}>🏢 Organization:</Text>
        <Text style={styles.text}>{job['Organization/Company Name']}</Text>
      </Card>

      {/* Official & Notification Links */}
      <Card style={styles.card}>
        <Text style={styles.heading}>🔗 Official & Notification Links:</Text>
        <TouchableOpacity onPress={() => Linking.openURL(job['Official Link'])}>
          <Text style={styles.link}>🌐 {job['Official Link']}</Text>
        </TouchableOpacity>
        {job['Notification Link'] ? (
          <TouchableOpacity onPress={() => Linking.openURL(job['Notification Link'])}>
            <Text style={styles.link}>📜 {job['Notification Link']}</Text>
          </TouchableOpacity>
        ) : null}
      </Card>

      {/* Job Image */}

{/* i just cooment out images */}
      
      {/* {job['Image Link'] ? (
        <Card style={styles.card}>
          <Text style={styles.heading}>🖼️ Job Image:</Text>
          <Image source={{ uri: job['Image Link'] }} style={styles.image} />
        </Card>
      ) : null} */}


<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('JobConsultancy')}>
        <Text style={styles.buttonText}> 💼   Job Consulting</Text>
      </TouchableOpacity>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>🔙 Back to Jobs</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
  card: { padding: 10, marginBottom: 10, backgroundColor: '#fff', borderRadius: 10, elevation: 3 },
  jobTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  heading: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  text: { fontSize: 14, marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  link: { color: '#007bff', fontSize: 14, textDecorationLine: 'underline', marginBottom: 5 },
  image: { width: '100%', height: 200, resizeMode: 'cover', borderRadius: 10, marginTop: 5 },
  backButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginTop: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
