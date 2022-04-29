import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  var loteria = {
    sorteados: [],
    sortearNumero: function () {
        for (let i = 0; i < 6; i++) {
            let numero = Math.round(Math.random() * 59)
            for (let j = 0; j < this.sorteados.length; j++)
                while (numero == this.sorteados[j]) {
                    numero++
                }
            this.sorteados.push(numero)
        }

        console.log(this.sorteados)
     
    }
}
loteria.sortearNumero()


  return (
    <View style={styles.container}>
      <Text style={{marginBottom: '10px'}}>{loteria.sorteados.join(', ')}</Text>
      <Button title="Sortear" onPress={() => loteria.sortearNumero()}/>
      <StatusBar style="auto" />
     
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


