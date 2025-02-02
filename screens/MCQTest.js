import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv";

export default function MCQTest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [attempts, setAttempts] = useState(0);
  const timerRef = useRef();

  // Fetch questions and initialize timer
  useEffect(() => {
    fetch(GOOGLE_SHEET_URL)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = parseCSV(csvData);
        const formattedQuestions = parsedData.map((item) => ({
          question: item[0],
          options: [item[1], item[2], item[3], item[4]],
          answer: item[5].trim(),
          explanation: item[6],
        }));
        setQuestions(formattedQuestions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Google Sheet data:", error);
        Alert.alert("Error", "Failed to load questions. Please try again later.");
        setLoading(false);
      });

    // Retrieve attempt count from AsyncStorage
    AsyncStorage.getItem("mcq_attempts").then((value) => {
      if (value) {
        setAttempts(parseInt(value, 10));
      }
    });

    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          handleSubmit(); // Auto-submit when time runs out
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current); // Cleanup timer
  }, []);

  // Parse CSV data
  const parseCSV = (csvData) => {
    const rows = csvData.split("\n");
    return rows.slice(1).map((row) => row.split(","));
  };

  // Handle option selection
  const handleOptionPress = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  // Handle navigation
  const handleNavigation = (direction) => {
    if (direction === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle submission
  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setShowResult(true);
    setAttempts((prev) => {
      const newAttempts = prev + 1;
      AsyncStorage.setItem("mcq_attempts", newAttempts.toString());
      return newAttempts;
    });
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Show loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  // Show result screen
  if (showResult) {
    const score = Object.keys(selectedAnswers).reduce((acc, key) => {
      const selectedOption = selectedAnswers[key];
      const correctAnswer = questions[key]?.answer;
      const selectedAnswer = questions[key]?.options[selectedOption];
      return selectedAnswer === correctAnswer ? acc + 1 : acc;
    }, 0);

    return (
      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Text style={styles.resultText}>
          Your Score: {score} / {questions.length}
        </Text>
        <Text style={styles.attemptsText}>Attempts: {attempts}</Text>
        {questions.map((q, index) => (
          <View key={index} style={styles.explanationCard}>
            <Text style={styles.question}>{q.question}</Text>
            <Text
              style={{
                color: q.options[selectedAnswers[index]] === q.answer ? "green" : "red",
              }}
            >
              Your Answer: {q.options[selectedAnswers[index]] || "Skipped"}
            </Text>
            <Text style={styles.explanation}>Explanation: {q.explanation}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  // Show question screen
  const currentQ = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {formatTime(timeLeft)}</Text>
      <Text style={styles.questionCounter}>
        Question {currentQuestion + 1} / {questions.length}
      </Text>
      <Text style={styles.question}>{currentQ.question}</Text>
      {currentQ.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedAnswers[currentQuestion] === index &&
              (option === currentQ.answer ? styles.correct : styles.incorrect),
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation("prev")}
          disabled={currentQuestion === 0}
        >
          <Text style={styles.navText}>Prev</Text>
        </TouchableOpacity>

        {currentQuestion === questions.length - 1 ? (
          <TouchableOpacity style={styles.navButton} onPress={handleSubmit}>
            <Text style={styles.navText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation("next")}>
            <Text style={styles.navText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  timer: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginBottom: 8,
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  option: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  optionText: {
    fontSize: 16,
  },
  correct: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },
  incorrect: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007bff",
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#555",
  },
  resultContainer: {
    padding: 16,
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  attemptsText: {
    fontSize: 16,
    marginBottom: 8,
  },
  explanationCard: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
  },
  explanation: {
    fontStyle: "italic",
    marginTop: 8,
  },
});







