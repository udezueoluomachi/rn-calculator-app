import React, {useState} from 'react';
import { StyleSheet , Text , View, TouchableNativeFeedback} from 'react-native';


export default function App() {
  const [screenValue, setScreenValue] = useState("0");
  
  const BBtn = props => {
    return(
      <TouchableNativeFeedback onPress={() => {
        let str = screenValue;
        if(props.val == "=") {
          setScreenValue(eval(str))
        }
        else {
          str += props.val;
          setScreenValue(str)
        }
      }}>
        <View style={styles.BBtn}>
          <Text style={styles.BtnText}>
            {props.val}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  const SBtn = props => {
    return (
      <TouchableNativeFeedback onPress={() => {
        let str = screenValue;
        if(props.val == "Del") {
          setScreenValue(str.slice(0, -1))
        }
        else {
          str += props.val;
          setScreenValue(str)
        }
      }} onLongPress={() => props.val == "Del" ? setScreenValue("") : null}>
        <View style={[styles.SBtn, {
          backgroundColor :  props.val == "Del" ? colors.red : colors.purple,
          borderRadius : 10,
          }]}>
          <Text style={styles.BtnText}>
            {props.val}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={{color : colors.white2, fontSize : 34}}>
          {screenValue}
        </Text>
      </View>
      <View style={styles.keysContainer}>
        <View style={[styles.LRKeysCont, styles.LKeysCont]}>
          <BBtn val="7"/>
          <BBtn val="8"/>
          <BBtn val="9"/>
          <BBtn val="4"/>
          <BBtn val="5"/>
          <BBtn val="6"/>
          <BBtn val="1"/>
          <BBtn val="2"/>
          <BBtn val="3"/>
          <BBtn val="."/>
          <BBtn val="0"/>
          <BBtn val="="/>
        </View>
        <View style={[styles.LRKeysCont, styles.RKeysCont]}>
          <SBtn val="Del"/>
          <SBtn val="+"/>
          <SBtn val="-"/>
          <SBtn val="/"/>
          <SBtn val="*"/>
        </View>
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
    justifyContent : "center",
    alignItems : "flex-end"
  },
  keysContainer: {
    width : "100%",
    height : "60%",
    marginTop : "15%",
    flexWrap : "wrap"
  },
  LRKeysCont : {
    height : "100%",
    justifyContent : "center",
    alignItems : "center"
  },
  LKeysCont : {
    width : "75%",
    flexDirection : "row",
    flexWrap : "wrap"
  },
  RKeysCont : {
    width : "25%",
    justifyContent : "space-evenly"
  },
  BBtn : {
    height : "21%",
    width : 65,
    margin : "3%",
    borderWidth : 2,
    borderColor :  colors.purple,
    borderRadius : 10,
    justifyContent : "center",
    alignItems : "center"
  },
  BtnText : {
    fontSize : 30,
    color : colors.white1
  },
  SBtn : {
    height : "16%",
    width : 65,
    margin : "3%",
    justifyContent : "center",
    alignItems : "center"
  }
});