import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EFormFillupScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/"); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="document-text" size={60} color="#FF5733" />
      <Text style={styles.header}>📄 फॉर्म भरने की सेवा</Text>
      <Text style={styles.text}>✅ सरकारी नौकरी, बैंकिंग, रेलवे, SSC, UPSC और अन्य परीक्षा फॉर्म भरने की सुविधा।</Text>
      <Text style={styles.text}>✅ Form verification और error checking सेवाएँ।</Text>
      <Text style={styles.text}>✅ अंतिम तिथि से पहले submission सुनिश्चित करना।</Text>
      <Text style={styles.text}>✅ Documents upload, signature & photo resizing सहायता।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5D9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#FF5733",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EFormFillupScreen;
