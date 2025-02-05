import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const CourseDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📚 कोर्स विवरण (Course Details)</Text>

      {/* 📖 Grammar Section */}
      <Text style={styles.sectionTitle}>
        <MaterialIcons name="library-books" size={22} color="blue" /> व्याकरण (Grammar)
      </Text>
      <Text style={styles.listItem}>🔹 संज्ञा (Nouns), सर्वनाम (Pronouns), विशेषण (Adjectives)</Text>
      <Text style={styles.listItem}>🔹 क्रिया (Verbs) और काल (Tenses) - वर्तमान, भूत, भविष्य</Text>
      <Text style={styles.listItem}>🔹 क्रियाविशेषण (Adverbs) और पूर्वसर्ग (Prepositions)</Text>
      <Text style={styles.listItem}>🔹 उपवाक्य संरचना (Sentence Structure) - सरल, मिश्रित, संयुक्त</Text>
      <Text style={styles.listItem}>🔹 वाच्य (Voice) - कर्तृवाच्य, कर्मवाच्य</Text>
      <Text style={styles.listItem}>🔹 प्रत्यक्ष और अप्रत्यक्ष कथन (Direct & Indirect Speech)</Text>

      {/* 🗣 Vocabulary Section */}
      <Text style={styles.sectionTitle}>
        <FontAwesome5 name="book-open" size={20} color="green" /> शब्दावली (Vocabulary)
      </Text>
      <Text style={styles.listItem}>🔹 पर्यायवाची और विलोम शब्द (Synonyms & Antonyms)</Text>
      <Text style={styles.listItem}>🔹 समानार्थक और बहुअर्थी शब्द (Homophones & Homonyms)</Text>
      <Text style={styles.listItem}>🔹 मुहावरे और वाक्यांश (Idioms & Phrases)</Text>
      <Text style={styles.listItem}>🔹 शब्द निर्माण (Word Formation) - उपसर्ग, प्रत्यय</Text>
      <Text style={styles.listItem}>🔹 अक्सर भ्रमित करने वाले शब्द (Commonly Confused Words)</Text>

      {/* ✍ Writing Skills */}
      <Text style={styles.sectionTitle}>
        <MaterialIcons name="create" size={22} color="purple" /> लेखन कौशल (Writing Skills)
      </Text>
      <Text style={styles.listItem}>🔹 निबंध लेखन (Essay Writing)</Text>
      <Text style={styles.listItem}>🔹 पत्र लेखन (Letter Writing) - औपचारिक और अनौपचारिक</Text>
      <Text style={styles.listItem}>🔹 सार लेखन (Precis Writing)</Text>
      <Text style={styles.listItem}>🔹 रचनात्मक लेखन (Creative Writing) - कहानी, कविता</Text>
      <Text style={styles.listItem}>🔹 रिपोर्ट लेखन (Report Writing)</Text>

      {/* 🎤 Speaking & Listening */}
      <Text style={styles.sectionTitle}>
        <FontAwesome5 name="microphone" size={20} color="red" /> बोलने और सुनने की कला (Speaking & Listening)
      </Text>
      <Text style={styles.listItem}>🔹 संवाद अभ्यास (Conversation Practice)</Text>
      <Text style={styles.listItem}>🔹 सार्वजनिक भाषण (Public Speaking)</Text>
      <Text style={styles.listItem}>🔹 वाद-विवाद (Debates & Discussions)</Text>
      <Text style={styles.listItem}>🔹 श्रवण कौशल (Listening Comprehension)</Text>

      {/* 📖 Reading Comprehension */}
      <Text style={styles.sectionTitle}>
        <MaterialIcons name="menu-book" size={22} color="orange" /> पढ़ने की समझ (Reading Comprehension)
      </Text>
      <Text style={styles.listItem}>🔹 मुख्य बिंदु और विवरण समझना (Main Ideas & Details)</Text>
      <Text style={styles.listItem}>🔹 अनुमान और आलोचनात्मक सोच (Inferencing & Critical Thinking)</Text>

      {/* 📚 Exam-Specific Topics */}
      <Text style={styles.sectionTitle}>
        <FontAwesome5 name="clipboard-list" size={20} color="brown" /> परीक्षा संबंधित विषय (Exam-Specific Topics)
      </Text>
      <Text style={styles.listItem}>🔹 वाक्य पुनर्व्यवस्था (Sentence Rearrangement)</Text>
      <Text style={styles.listItem}>🔹 क्लोज टेस्ट (Cloze Test)</Text>
      <Text style={styles.listItem}>🔹 रिक्त स्थान भरें (Fill in the Blanks)</Text>
      <Text style={styles.listItem}>🔹 त्रुटि पहचान (Spotting Errors)</Text>

      <Text style={styles.footer}>😊 यह कोर्स आपकी अंग्रेज़ी सुधारने में मदद करेगा!</Text>
    </ScrollView>
  );
};

// 🎨 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#34495e',
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 3,
    color: '#555',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    color: '#27ae60',
  },
});

export default CourseDetailsScreen;
