import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,Text, View , TextInput} from 'react-native';

const btns = props => {}

export default function App() {
  return (
	<View style={styles.container}>
	  <View style={styles.screen}>
	  </View>
	  <View style={styles.keysContainer}>
	    <View style={[styles.LRKeysCont, styles.LKeysCont]}></View>
	    <View style={[styles.LRKeysCont, styles.RKeysCont]}></View>
	  </View>
	</View>
  );
}

const colors = {
  red : "#FF3124",
  purple : "#AC24FF",
  white1 : "#ffffff",
  white2 : "#929292",
  black1 : "#161616",
  black2 : "#1E1E1E"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black1,
    alignItems: "center",
    padding: 14,
    height: "100%",
    width: "100%",
  },
  screen: {
    padding: 10,
    height: "26%" ,
    width: "100%",
    marginTop: 45,
    backgroundColor: colors.black2,
  },
  keysContainer: {
    width : "100%",
    height : "60%",
    marginTop : "15%",
    backgroundColor : colors.red,
    flexWrap : "wrap"
  },
  LRKeysCont : {
    height : "100%",
    backgroundColor : "#888",
  },
  LKeysCont : {
    width : "75%",
  },
  RKeysCont : {
    width : "25%"
  }
});
