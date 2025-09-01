import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  display: {
    flex: 2,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    borderRadius: 10,
  },
  displayText: {
    color: '#fff',
    fontSize: 40,
  },
  keyboard: {
    flex: 5,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,             // ocupa espaço igual na linha
    aspectRatio: 1,      // mantém quadrado
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  operatorButton: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9500',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});
