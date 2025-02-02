import React from 'react';
import { View, Text, Linking, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

const AboutUs = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9f9f9', padding: 20 }}>
      
      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        About <Text style={{ color: '#007bff' }}>Ajaydhurwe.tech</Text>
      </Text>

      {/* Who We Are */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        👨‍💻 Who We Are
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Ajaydhurwe.tech is dedicated to providing high-quality study materials, PYQ series, and MCQ tests 
        to help students and aspirants prepare effectively for competitive exams. Our mission is to make 
        learning easy, accessible, and result-oriented. In addition, we specialize in web development, 
        app development, graphic design, and digital marketing solutions to empower businesses in the digital era.
      </Text>

      {/* Mission */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🚀 Our Mission
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        To empower students and professionals by providing high-quality study materials, innovative digital solutions, 
        and the latest technological advancements that enhance learning and business growth.
      </Text>

      {/* Vision */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🌍 Our Vision
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        To become a leading educational and digital solutions provider, helping individuals and businesses 
        achieve their goals with excellence and innovation.
      </Text>

      {/* Services */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📚 Our Core Services
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        📖 Study Material: Comprehensive notes, guides, and reference materials for exam preparation.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        📜 PYQ Series: Previous Year Question papers with detailed solutions to enhance preparation.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        🎯 MCQ Tests: Subject-wise and full-length MCQ tests with detailed explanations.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        <FontAwesome5 name="code" size={18} color="blue" /> Web Development: Custom websites, e-commerce solutions, CMS development, and responsive design.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        <Ionicons name="phone-portrait" size={18} color="blue" /> App Development: Native and cross-platform apps, custom solutions, and maintenance.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>
        🎨 Graphics Designing: Logo & branding, marketing collaterals, UI/UX design, and custom illustrations.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        📢 Digital Marketing: SEO, social media marketing, content marketing, PPC ads, email marketing, and analytics.
      </Text>

      {/* Why Choose Us */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        🌟 Why Choose Ajaydhurwe.tech?
      </Text>
      
      <Text style={{ fontSize: 16 }}>📚 High-Quality Study Resources</Text>
      <Text style={{ fontSize: 16 }}>🎯 Exam-Focused PYQ Series</Text>
      <Text style={{ fontSize: 16 }}>📝 Well-Designed MCQ Tests</Text>
      <Text style={{ fontSize: 16 }}>👨‍💻 Experienced Team</Text>
      <Text style={{ fontSize: 16 }}>🤝 Student & Customer-Centric Approach</Text>
      <Text style={{ fontSize: 16 }}>⚡ Latest Technology</Text>
      <Text style={{ fontSize: 16 }}>🔄 End-to-End Solutions</Text>
      <Text style={{ fontSize: 16 }}>💬 Transparent Communication</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>💰 Affordable Pricing</Text>

      {/* Contact Us */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
        📞 Contact Us
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }} onPress={() => Linking.openURL('mailto:contact@ajaydhurwe.tech')}>
        📧 Email: contact@ajaydhurwe.tech
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }} onPress={() => Linking.openURL('tel:+919301084259')}>
        📱 Phone: +91 9301084259
      </Text>
      <Text style={{ fontSize: 16, color: 'blue' }} onPress={() => Linking.openURL('https://www.ajaydhurwe.tech')}>
        🌐 Website: www.ajaydhurwe.tech
      </Text>

    </ScrollView>
  );
};

export default AboutUs;
