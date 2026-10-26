
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Style/styles';

// Skærm til at tilføje nye opgaver
export default function Tilføjopgave({ navigation }) {
  const [fag, setFag] = useState('');
  const [navn, setNavn] = useState('');
  const [dato, setDato] = useState('');
  const [fejl, setFejl] = useState('');


  // Gemmer den nye opgave
  async function tilføjOpgave() {
    if (!fag.trim() || !navn.trim() || !dato.trim()) {
      setFejl('Udfyld alle felter');
      return;
    }

    // Kontrollerer datoformatet for deadlinen
    const match = dato.trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);

    if (!match) {
      setFejl('Dato skal skrives som DD-MM-ÅÅÅÅ.');
      return;
    }

    const dag = Number(match[1]);
    const måned = Number(match[2]);
    const år = Number(match[3]);
    const gyldigDato = new Date(år, måned - 1, dag);

    if (
      gyldigDato.getFullYear() !== år ||
      gyldigDato.getMonth() !== måned - 1 ||
      gyldigDato.getDate() !== dag
    ) {
      setFejl('Skriv en gyldig dato.');
      return;
    }

    // opretter en ny opgave
    const nyOpgave = {
      id: Date.now().toString(),
      fag: fag.trim(),
      navn: navn.trim(),
      dato: dato.trim(),
      færdig: false
    };

    try {
      // Henter tidligere opgaver
      const data = await AsyncStorage.getItem('opgaver');
      const opgaver = data ? JSON.parse(data) : [];

      // Gemmer alle opgaver
      await AsyncStorage.setItem(
        'opgaver',
        JSON.stringify([...opgaver, nyOpgave])
      );
      
      // Ryder alle felterne efter gemt
      setFag('');
      setNavn('');
      setDato('');
      setFejl('');


      navigation.navigate('Opgaveoversigt');
    } catch (error) {
      console.error('Kunne ikke gemme opgaven:', error);
      setFejl('Opgaven kunne ikke gemmes');
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.overskrift}>Tilføj opgave</Text>

      <Text>Fag</Text>
      <TextInput
        style={styles.input}
        placeholder="F.eks. Innovation"
        value={fag}
        onChangeText={setFag}
      />

      <Text>Opgave</Text>
      <TextInput
        style={styles.input}
        placeholder="F.eks. Godkendelsesopgave 2"
        value={navn}
        onChangeText={setNavn}
      />

      <Text>Deadline</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-ÅÅÅÅ"
        value={dato}
        onChangeText={setDato}
        keyboardType="numbers-and-punctuation"
        maxLength={10}
      />

      {/* Fejlbesked vises */}
      {fejl !== '' && (
        <Text style={{ color: 'red', marginBottom: 10 }}>
          {fejl}
        </Text>
      )}

      <Button title="Gem opgave" onPress={tilføjOpgave} />
    </View>
  );
}
