import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Class_Set() {
  const [classes, setClasses] = useState<{ id: number; class: number }[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startPoint, setStartPoint] = useState<number | null>(null);
  const [endPoint, setEndPoint] = useState<number | null>(null);

  const router = useRouter();

  const handlePress = () => {
    router.push('/(add_student)/add_student');
  };

  // Fetch classes from the backend
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://192.168.29.67:5000/classes'); // Replace with your backend URL
        const data = await response.json();
        setClasses(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching classes:', error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  // Handle class selection
  const handleClassSelection = (classId: number) => {
    if (startPoint === null) {
      // First tap sets the starting point
      setStartPoint(classId);
      setSelectedClasses([classId]);
    } else if (endPoint === null) {
      // Second tap sets the ending point and selects the range
      setEndPoint(classId);
      const startIndex = classes.findIndex((cls) => cls.id === startPoint);
      const endIndex = classes.findIndex((cls) => cls.id === classId);
      const [minIndex, maxIndex] = [Math.min(startIndex, endIndex), Math.max(startIndex, endIndex)];
      const selectedRange = classes.slice(minIndex, maxIndex + 1).map((cls) => cls.id);
      setSelectedClasses(selectedRange);
    } else {
      // Reset selection for new range
      setStartPoint(classId);
      setEndPoint(null);
      setSelectedClasses([classId]);
    }
  };

  // Split classes into two columns
  const splitClasses = (classes: { id: number; class: number }[]) => {
    const column1 = classes.filter((_, index) => index % 2 === 0); // Even indices
    const column2 = classes.filter((_, index) => index % 2 !== 0); // Odd indices
    return { column1, column2 };
  };

  const { column1, column2 } = splitClasses(classes);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Pick Your Classes</Text>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <ScrollView>
          <Text style={styles.instructions}>
            {startPoint === null
              ? 'Select the starting class.'
              : endPoint === null
              ? 'Select the ending class.'
              : 'Selection complete. Tap another class to start a new range.'}
          </Text>
          <View style={styles.gridContainer}>
            <View style={styles.column}>
              {column1.map((classItem) => (
                <TouchableOpacity
                  key={classItem.id}
                  style={[
                    styles.checkbox,
                    selectedClasses.includes(classItem.id) && styles.checkboxSelected,
                    startPoint === classItem.id && styles.startPoint,
                    endPoint === classItem.id && styles.endPoint,
                  ]}
                  onPress={() => handleClassSelection(classItem.id)}
                >
                  <Text
                    style={[
                      styles.checkboxText,
                      selectedClasses.includes(classItem.id) && styles.checkboxTextSelected,
                    ]}
                  >
                    Class {classItem.class}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.column}>
              {column2.map((classItem) => (
                <TouchableOpacity
                  key={classItem.id}
                  style={[
                    styles.checkbox,
                    selectedClasses.includes(classItem.id) && styles.checkboxSelected,
                    startPoint === classItem.id && styles.startPoint,
                    endPoint === classItem.id && styles.endPoint,
                  ]}
                  onPress={() => handleClassSelection(classItem.id)}
                >
                  <Text
                    style={[
                      styles.checkboxText,
                      selectedClasses.includes(classItem.id) && styles.checkboxTextSelected,
                    ]}
                  >
                    Class {classItem.class}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.selectedText}>
            Selected Classes: {selectedClasses.map((id) => `${id}`).join(', ') || 'None'}
          </Text>
          <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loading: {
    textAlign: 'center',
    fontSize: width * 0.045,
    color: '#888',
  },
  instructions: {
    textAlign: 'center',
    fontSize: width * 0.045,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  checkbox: {
    marginBottom: 10,
    marginHorizontal: 5,
    padding: width * 0.04,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  checkboxSelected: {
    borderColor: '#007bff',
    backgroundColor: '#e6f7ff',
  },
  startPoint: {
    borderColor: '#28a745',
    backgroundColor: '#d4edda',
  },
  endPoint: {
    borderColor: '#dc3545',
    backgroundColor: '#f8d7da',
  },
  checkboxText: {
    fontSize: width * 0.045,
    color: '#333',
  },
  checkboxTextSelected: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  selectedText: {
    marginTop: 20,
    fontSize: width * 0.05,
    textAlign: 'center',
    color: '#007bff',
  },
  nextButton: {
    marginTop: 50,
    backgroundColor: '#007bff',
    padding: width * 0.04,
    borderRadius: 4,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});
