// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, FlatList } from "react-native";
// import { WebView } from "react-native-webview";
// import Papa from "papaparse";  // Import PapaParse for CSV parsing

// const MCQTestScreen = () => {
//   const [pdfData, setPdfData] = useState({});
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);

//   // Fetch CSV data
//   useEffect(() => {
//     fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRPwKrRySWmV9XOk30busuDiJ8sFMRa11Y3lWfPoSW5Gj-qTzKtdltr-l_dfiBgGanGdeBaTHHce-lu/pub?gid=1740394204&single=true&output=csv")  // Replace with your Google Sheets CSV URL
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
//         const formattedData = {};

//         parsedData.data.forEach((row) => {
//           const { Class, Subject, Year, DriveLink } = row;
//           if (!formattedData[Class]) {
//             formattedData[Class] = {};
//           }
//           if (!formattedData[Class][Subject]) {
//             formattedData[Class][Subject] = {};
//           }
//           formattedData[Class][Subject][Year] = DriveLink;
//         });

//         setPdfData(formattedData);  // Update state with parsed data
//       })
//       .catch((error) => console.error("Error fetching CSV data: ", error));
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       {/* Back Button */}
//       {(selectedClass || selectedSubject || selectedYear) && (
//         <TouchableOpacity
//           style={{
//             padding: 10,
//             backgroundColor: "#e74c3c",
//             borderRadius: 8,
//             marginBottom: 10,
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//           onPress={() => {
//             if (selectedYear) {
//               setSelectedYear(null);
//             } else if (selectedSubject) {
//               setSelectedSubject(null);
//             } else {
//               setSelectedClass(null);
//             }
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 18 }}>Back</Text>
//         </TouchableOpacity>
//       )}

//       {/* Select Class */}
//       {!selectedClass ? (
//         <FlatList
//           data={Object.keys(pdfData)}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#3498db",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedClass(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : !selectedSubject ? (
//         <FlatList
//           data={Object.keys(pdfData[selectedClass])}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#f39c12",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedSubject(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : !selectedYear ? (
//         <FlatList
//           data={Object.keys(pdfData[selectedClass][selectedSubject])}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#2ecc71",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedYear(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         <WebView
//           source={{
//             uri: pdfData[selectedClass][selectedSubject][selectedYear],
//           }}
//           style={{ flex: 1 }}
//         />
//       )}
//     </View>
//   );
// };

// export default MCQTestScreen;
















// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, FlatList } from "react-native";
// import { WebView } from "react-native-webview";
// import Papa from "papaparse"; // Import PapaParse for CSV parsing

// const MCQTestScreen = () => {
//   const [pdfData, setPdfData] = useState({});
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);

//   // Fetch CSV data
//   useEffect(() => {
//     fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRPwKrRySWmV9XOk30busuDiJ8sFMRa11Y3lWfPoSW5Gj-qTzKtdltr-l_dfiBgGanGdeBaTHHce-lu/pub?gid=1740394204&single=true&output=csv")
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
//         const formattedData = {};

//         parsedData.data.forEach((row) => {
//           const { Class, Subject, Year, DriveLink } = row;
//           if (!formattedData[Class]) formattedData[Class] = {};
//           if (!formattedData[Class][Subject]) formattedData[Class][Subject] = {};
//           formattedData[Class][Subject][Year] = DriveLink;
//         });

//         setPdfData(formattedData); // Update state with parsed data
//       })
//       .catch((error) => console.error("❌ Error fetching CSV data: ", error));
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 10 }}>
//       {/* 🔙 Back Button */}
//       {(selectedClass || selectedSubject || selectedYear) && (
//         <TouchableOpacity
//           style={{
//             padding: 10,
//             backgroundColor: "#e74c3c",
//             borderRadius: 8,
//             marginBottom: 10,
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//           onPress={() => {
//             if (selectedYear) {
//               setSelectedYear(null);
//             } else if (selectedSubject) {
//               setSelectedSubject(null);
//             } else {
//               setSelectedClass(null);
//             }
//           }}
//         >
//           <Text style={{ color: "white", fontSize: 18 }}>🔙 Back</Text>
//         </TouchableOpacity>
//       )}

//       {/* 🎓 Select Class */}
//       {!selectedClass ? (
//         <FlatList
//           data={Object.keys(pdfData)}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#3498db",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedClass(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>📚 {item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : !selectedSubject ? (
//         <FlatList
//           data={Object.keys(pdfData[selectedClass])}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#f39c12",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedSubject(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>📖 {item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : !selectedYear ? (
//         <FlatList
//           data={Object.keys(pdfData[selectedClass][selectedSubject])}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 padding: 15,
//                 backgroundColor: "#2ecc71",
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//               onPress={() => setSelectedYear(item)}
//             >
//               <Text style={{ color: "white", fontSize: 18 }}>📆 {item}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//         <WebView
//           source={{
//             uri: pdfData[selectedClass][selectedSubject][selectedYear],
//           }}
//           style={{ flex: 1 }}
//         />
//       )}
//     </View>
//   );
// };

// export default MCQTestScreen;




















import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import Papa from "papaparse"; // Import PapaParse for CSV parsing

const MCQTestScreen = () => {
  const [pdfData, setPdfData] = useState({});
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch CSV data
  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRPwKrRySWmV9XOk30busuDiJ8sFMRa11Y3lWfPoSW5Gj-qTzKtdltr-l_dfiBgGanGdeBaTHHce-lu/pub?gid=1740394204&single=true&output=csv")
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = Papa.parse(csvData, { header: true, dynamicTyping: true });
        const formattedData = {};

        parsedData.data.forEach((row) => {
          const { Class, Subject, Year, DriveLink } = row;
          if (!formattedData[Class]) formattedData[Class] = {};
          if (!formattedData[Class][Subject]) formattedData[Class][Subject] = {};
          formattedData[Class][Subject][Year] = DriveLink;
        });

        setPdfData(formattedData); // Update state with parsed data
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("❌ Error fetching CSV data: ", error);
        setIsLoading(false); // Stop loading even on error
      });
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* 🔙 Back Button */}
      {(selectedClass || selectedSubject || selectedYear) && (
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#e74c3c",
            borderRadius: 8,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            if (selectedYear) {
              setSelectedYear(null);
            } else if (selectedSubject) {
              setSelectedSubject(null);
            } else {
              setSelectedClass(null);
            }
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>🔙 Back</Text>
        </TouchableOpacity>
      )}

      {/* ⏳ Loading Indicator */}
      {isLoading ? (
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={{ fontSize: 18, marginTop: 10 }}>⏳ Loading...</Text>
        </View>
      ) : !selectedClass ? (
        <FlatList
          data={Object.keys(pdfData)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#3498db",
                marginBottom: 10,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setSelectedClass(item)}
            >
              <Text style={{ color: "white", fontSize: 18 }}>📚 {item}</Text>
            </TouchableOpacity>
          )}
        />
      ) : !selectedSubject ? (
        <FlatList
          data={Object.keys(pdfData[selectedClass])}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#f39c12",
                marginBottom: 10,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setSelectedSubject(item)}
            >
              <Text style={{ color: "white", fontSize: 18 }}>📖 {item}</Text>
            </TouchableOpacity>
          )}
        />
      ) : !selectedYear ? (
        <FlatList
          data={Object.keys(pdfData[selectedClass][selectedSubject])}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#2ecc71",
                marginBottom: 10,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setSelectedYear(item)}
            >
              <Text style={{ color: "white", fontSize: 18 }}>📆 {item}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <WebView
          source={{
            uri: pdfData[selectedClass][selectedSubject][selectedYear],
          }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

export default MCQTestScreen;

















