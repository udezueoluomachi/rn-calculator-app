import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  return (
	<View style={styles.container}>
	  <View style={styles.screen}>
	  <Text style={{fontWeight: "800", fontSize: 50, color : "#777"}}>Hello world</Text>
	  </View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: "center",
    //justifyContent: 'center',
    paddingTop: 24,
  },
  screen: {
    padding: 10,
    height: 90,
    width: 310,
    borderColor: "#999",
    borderWidth: 1,
    marginTop: 25,
  },
  maxWidth: {
    width: 310
  }
});
