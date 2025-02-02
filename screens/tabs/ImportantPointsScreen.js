import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ImportantPointScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>1. Parts of Speech 📚</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="account" size={20} color="black" /> Nouns: व्यक्तियों, स्थानों, वस्तुओं, या विचारों के नाम।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="account-group" size={20} color="black" /> Pronouns: जो nouns की जगह उपयोग होते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="tag" size={20} color="black" /> Adjectives: जो nouns को वर्णित करते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="gesture" size={20} color="black" /> Verbs: क्रियाएँ या होने की स्थिति।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="text" size={20} color="black" /> Adverbs: जो verbs, adjectives, या अन्य adverbs को modify करते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="shape" size={20} color="black" /> Prepositions: जो noun या pronoun और अन्य शब्दों के बीच संबंध दिखाते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="link" size={20} color="black" /> Conjunctions: जो शब्दों या वाक्यांशों को जोड़ते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="emoticon-happy" size={20} color="black" /> Interjections: जो शब्द मजबूत भावनाएँ व्यक्त करते हैं।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>2. Tenses और उनका उपयोग ⏳</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="clock" size={20} color="black" /> Present Tense: वर्तमान में हो रही क्रियाओं को व्यक्त करता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="clock-outline" size={20} color="black" /> Past Tense: वह क्रियाएँ जो पहले हो चुकी हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="calendar-clock" size={20} color="black" /> Future Tense: वह क्रियाएँ जो भविष्य में होंगी।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>3. वाक्य संरचना और गठन 📝</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="format-align-left" size={20} color="black" /> Simple Sentence: एक वाक्य जिसमें केवल एक subject और predicate होता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="format-align-center" size={20} color="black" /> Compound Sentence: दो independent clauses को जोड़कर बना वाक्य।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="format-align-right" size={20} color="black" /> Complex Sentence: एक independent clause और एक या अधिक dependent clauses से बना वाक्य।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="check-circle" size={20} color="black" /> Subject-Verb Agreement: subject और verb को संख्या और व्यक्ति के अनुसार मेल खाना चाहिए।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="chat" size={20} color="black" /> Sentence Types: Declarative (वर्णनात्मक), Interrogative (प्रश्नवाचक), Imperative (आज्ञा), Exclamatory (आश्चर्यजनक)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>4. Articles और Determiners 🖊️</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="pencil" size={20} color="black" /> Definite Article (the): वह विशेष वस्तु को व्यक्त करता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="pen" size={20} color="black" /> Indefinite Articles (a, an): सामान्य संदर्भ में उपयोग किया जाता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="arrow-right" size={20} color="black" /> Demonstratives: These/Those, This/That, जो विशेष वस्तु को दर्शाते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="numeric" size={20} color="black" /> Quantifiers: शब्द जो मात्रा को व्यक्त करते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="folder" size={20} color="black" /> Possessives: जो स्वामित्व को दर्शाते हैं।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>5. Active & Passive Voice 🔄</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="swap-horizontal" size={20} color="black" /> Active Voice: विषय क्रिया को करता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="swap-vertical" size={20} color="black" /> Passive Voice: विषय को क्रिया प्राप्त होती है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="book" size={20} color="black" /> Conversion के नियम: Active वाक्य के object को passive वाक्य के subject में बदलना होता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="timeline-variant" size={20} color="black" /> विभिन्न Tenses में उपयोग: यह नियम सभी Tenses—Present, Past, और Future पर लागू होते हैं।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>6. Direct & Indirect Speech 💬</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="comment" size={20} color="black" /> Direct Speech: वह वाक्य जो किसी के द्वारा बोले गए शब्दों को सीधे उद्धृत करता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="message" size={20} color="black" /> Indirect Speech: वह वाक्य जिसमें शब्दों को सीधे उद्धृत नहीं किया जाता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="arrow-right-bold-box" size={20} color="black" /> Direct से Indirect में परिवर्तन: Tenses और pronouns बदलते हैं, और quotation marks हटा दिए जाते हैं।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="text-box" size={20} color="black" /> Reporting Verbs: कहा, बताया, पूछा, आदि का उपयोग किया जाता है।</Text>
        <Text style={styles.text}><MaterialCommunityIcons name="swap-horizontal-circle" size={20} color="black" /> Sentence Transformation: Direct से Indirect Speech में परिवर्तन करते समय वाक्य की संरचना बदल जाती है।</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default ImportantPointScreen;
