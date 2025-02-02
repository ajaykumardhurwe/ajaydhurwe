import React, { useState, useEffect } from "react";
import { 
  View, TextInput, Text, TouchableOpacity, Image, Alert 
} from "react-native";
import { auth, db, doc, getDoc, updateDoc, signOut } from "../firebase/firebse";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [exam, setExam] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email); // Fetch user email
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setName(data.name);
          setUsername(data.username);
          setBio(data.bio);
          setExam(data.exam);
        }
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        name, username, bio, exam,
      });
      Alert.alert("Success", "Profile Updated!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Drawer Menu Icon (Top-Right) */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      {/* Profile Avatar */}
      <View style={styles.profileAvatarContainer}>
        <Image 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} 
          style={styles.profileAvatar} 
        />
        <TouchableOpacity style={styles.editAvatarButton}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Heading */}
      <Text style={styles.heading}>👤 Profile</Text>

      {/* Email (Non-Editable) */}
      <View style={styles.emailContainer}>
        <Icon name="email" size={20} color="#000" />
        <Text style={styles.emailText}>{email}</Text>
      </View>

      {/* Editable Profile Fields */}
      <TextInput placeholder="👨‍💼 Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="🔖 Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="📜 Bio" value={bio} onChangeText={setBio} style={styles.input} />
      <TextInput placeholder="📚 Preparing for Exam" value={exam} onChangeText={setExam} style={styles.input} />

      {/* Save & Logout Buttons */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>💾 Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { 
    flex: 1, padding: 16, alignItems: "center", backgroundColor: "#F9F9F9" 
  },
  menuIcon: { 
    position: "absolute", top: 10, right: 10 
  },
  profileAvatarContainer: { 
    position: "relative", marginBottom: 20 
  },
  profileAvatar: { 
    width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: "#000" 
  },
  editAvatarButton: { 
    position: "absolute", bottom: 0, right: 0, backgroundColor: "#007bff", borderRadius: 50, padding: 6 
  },
  heading: { 
    fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#333" 
  },
  emailContainer: { 
    flexDirection: "row", alignItems: "center", backgroundColor: "#EFEFEF", 
    padding: 10, borderRadius: 10, width: "90%", marginBottom: 10 
  },
  emailText: { 
    marginLeft: 10, fontSize: 16, color: "#333" 
  },
  input: { 
    width: "90%", padding: 12, backgroundColor: "#FFF", borderRadius: 10, 
    borderWidth: 1, borderColor: "#ddd", marginBottom: 10, elevation: 3 
  },
  saveButton: { 
    width: "90%", padding: 12, backgroundColor: "green", borderRadius: 10, 
    alignItems: "center", marginTop: 10 
  },
  logoutButton: { 
    width: "90%", padding: 12, backgroundColor: "red", borderRadius: 10, 
    alignItems: "center", marginTop: 10 
  },
  buttonText: { 
    color: "#FFF", fontSize: 16, fontWeight: "bold" 
  }
};





















