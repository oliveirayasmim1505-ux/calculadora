import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (value: string) => setInput(input + value);
  const handleClear = () => setInput("");
  const handleEqual = () => {
    try { setInput(eval(input).toString()); }
    catch { setInput("Erro"); }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>

      {/* Teclado */}
      <View style={styles.keyboard}>
        {/** Linha 1: C / / * */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handleClear}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress("/")}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress("*")}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress("-")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        {/** Linha 2: 7 8 9 + */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("7")}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("8")}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("9")}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress("+")}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        </View>

        {/** Linha 3: 4 5 6 = */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("4")}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("5")}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("6")}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={handleEqual}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        </View>

        {/** Linha 4: 1 2 3 0 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("1")}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("2")}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("3")}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress("0")}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
