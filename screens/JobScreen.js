import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Share,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function JobScreen() {
  const [activeTab, setActiveTab] = useState("government");
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const navigation = useNavigation();

  const googleSheetUrls = {
    government:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv",
    private:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = googleSheetUrls[activeTab];
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = csvText.split("\n");
        const headers = rows[0].split(",").map((header) => header.trim());
        const data = rows.slice(1).map((row) => {
          const values = row.split(",");
          const job = {};
          headers.forEach((header, index) => {
            job[header] = values[index]?.trim() || "";
          });
          return job;
        });

        const validJobs = data.filter((job) => job["Job Title"]);

        setJobsData(validJobs);
        setFilteredJobs(validJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
        setJobsData([]);
        setFilteredJobs([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleFilter = () => {
    const filtered = jobsData.filter((job) =>
      !locationFilter || job["Location"]?.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const shareJob = async (job) => {
    const message = `📢 *Job Opportunity Available!* 📢

📝 *Job Title:* ${job["Job Title"]}
🏢 *Company:* ${job["Organization/Company Name"]}
📍 *Location:* ${job["Location"]}
📅 *Start Date:* ${job["Start Date"]}
⏳ *End Date:* ${job["End Date"]}
📖 *Description:* ${job["Description"]}

Apply Now! 🚀`;

    try {
      await Share.share({ message });
    } catch (error) {
      console.error("Error sharing job:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💼 Job Listings</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["government", "private"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={styles.tabText}>
              {tab === "government" ? "🏢 Government Jobs" : "💼 Private Jobs"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Location Filter */}
      <Picker
        selectedValue={locationFilter}
        style={styles.picker}
        onValueChange={setLocationFilter}
      >
        <Picker.Item label="🌍 All Locations" value="" />
        {["Bilaspur", "Raipur", "Durg", "Bhilai"].map((location) => (
          <Picker.Item key={location} label={location} value={location} />
        ))}
      </Picker>
      <Button title="🔍 Apply Filter" onPress={handleFilter} />

      {/* Job List */}
      <FlatList
        data={filteredJobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.jobCard}>
            {/* First Row - Job Icon and Title */}
            <View style={styles.row}>
              <Text style={styles.jobIcon}>💼</Text>
              <Text style={styles.jobTitle}>{item["Job Title"]}</Text>
            </View>

            {/* Second Row - Start Date and End Date */}
            <View style={styles.row}>
              <Text style={[styles.date, { color: "green" }]}>
                📅 Start: {item["Start Date"]}
              </Text>
              <Text style={[styles.date, { color: "red" }]}>
                ⏳ End: {item["End Date"]}
              </Text>
            </View>

            {/* Third Row - Location and Salary */}
            <View style={styles.row}>
              <Text style={styles.location}>📍 {item["Location"]}</Text>
              <Text style={styles.salary}>💰 {item["Salary"] || "N/A"}</Text>
            </View>

            {/* Fourth Row - Job Details and Share */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigation.navigate("JobDetails", { job: item })}
              >
                <Text style={styles.buttonText}>📄 Job Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => shareJob(item)}
              >
                <Text style={styles.buttonText}>📤 Share</Text>
              </TouchableOpacity>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f9fa" },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  tabButton: { padding: 10, borderRadius: 5, backgroundColor: "#ddd" },
  activeTab: { backgroundColor: "lightblue" },
  tabText: { fontWeight: "bold" },
  picker: { height: 50, marginVertical: 10 },
  jobCard: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 },
  jobIcon: { fontSize: 24 },
  jobTitle: { fontSize: 16, fontWeight: "bold", textAlign: "center", flex: 1 },
  date: { fontSize: 14 },
  location: { fontSize: 14 },
  salary: { fontSize: 14, fontWeight: "bold", color: "green" },
  detailsButton: { backgroundColor: "#007bff", padding: 8, borderRadius: 5 },
  shareButton: { backgroundColor: "#28a745", padding: 8, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});





