import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const services = [
  { id: "1", title: "Web Development", icon: "code-slash", color: "#FF5733", screen: "WebDevelopment" },
  { id: "2", title: "Graphics Design", icon: "color-palette", color: "#33A1FF", screen: "GraphicsDesign" },
  { id: "3", title: "SEO Optimization", icon: "search", color: "#28A745", screen: "SEOOptimization" },
  { id: "4", title: "MCQ Test", icon: "clipboard", color: "#FFC107", screen: "MCQTest" },
  { id: "5", title: "Job Consultancy", icon: "briefcase", color: "#6610F2", screen: "JobConsultancy" },
  { id: "6", title: "E-Form Fillup", icon: "document-text", color: "#E83E8C", screen: "EFormFillup" },
];

const ServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚀 Our Services</Text>
      <FlatList
        data={services}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.box, { backgroundColor: item.color + "30" }]} // Light version of the color
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={50} color={item.color} />
            <Text style={[styles.text, { color: item.color }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  box: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
