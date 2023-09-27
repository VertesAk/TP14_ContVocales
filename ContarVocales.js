import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContarVocales = () => {
  const [cadena, setCadena] = useState('');
  const [conteoVocales, setConteoVocales] = useState([0, 0, 0, 0, 0]); // [a, e, i, o, u]
  const [mensaje, setMensaje] = useState('');

  const contarVocales = () => {
    if (cadena.trim() === '') {
      setMensaje('Inserte un texto/frase para ver su cantidad de vocales');
      setConteoVocales([0, 0, 0, 0, 0]);
      return;
    }

    const cadenaMinuscula = cadena.toLowerCase(); // Convertir la cadena a minúsculas
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const conteo = [0, 0, 0, 0, 0];

    for (let i = 0; i < cadenaMinuscula.length; i++) {
      const char = cadenaMinuscula.charAt(i);
      const indiceVocal = vocales.indexOf(char);
      if (indiceVocal !== -1) {
        conteo[indiceVocal]++;
      }
    }

    setConteoVocales(conteo);
    setMensaje('');
  };

  const letrasVocales = ['A', 'E', 'I', 'O', 'U'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa una cadena:</Text>
      <TextInput
        style={styles.input}
        value={cadena}
        onChangeText={(text) => setCadena(text)}
      />
      <Button title="Contar Vocales" onPress={contarVocales} />
      {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
      <View style={styles.result}>
        {conteoVocales.map((cantidad, index) => (
          <View key={index} style={styles.vocalContainer}>
            <Text style={styles.numero}>{cantidad}</Text>
            <Text style={styles.vocal}>{letrasVocales[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: 200, 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  vocalContainer: {
    alignItems: 'center',
  },
  numero: {
    fontSize: 24, 
    fontWeight: 'bold', 
  },
  vocal: {
    fontSize: 18, 
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
  },
  mensaje: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
  },
});

export default ContarVocales;
