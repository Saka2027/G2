
import { useState, useCallback } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Style/styles';

// Skærmen med brugerens opgaver
export default function Opgaveoversigt({ navigation }) {
  const [opgaver, setOpgaver] = useState([]);

  // Henter gemte opgaver, når skærmen åbnes
  useFocusEffect(
    useCallback(() => {
      async function hentOpgaver() {
        const data = await AsyncStorage.getItem('opgaver');
        setOpgaver(data ? JSON.parse(data) : []);
      }

      hentOpgaver();
    }, [])
  );

  // Markerer en opgave som færdig eller ufærdig
  async function markerOpgave(id) {
    const nyeOpgaver = opgaver.map(opgave =>
      opgave.id === id
        ? { ...opgave, færdig: !opgave.færdig }
        : opgave
    );

    setOpgaver(nyeOpgaver);
    await AsyncStorage.setItem('opgaver', JSON.stringify(nyeOpgaver));
  }

  // Sletter en opgave
  async function sletOpgave(id) {
    const nyeOpgaver = opgaver.filter(opgave => opgave.id !== id);

    setOpgaver(nyeOpgaver);
    await AsyncStorage.setItem('opgaver', JSON.stringify(nyeOpgaver));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.overskrift}>Min opgaveoversigt</Text>

      <Pressable
        style={styles.tilfoejKnap}
        onPress={() => navigation.navigate('Tilføj opgave')}
      >
        <Text style={styles.knapTekst}>+ Tilføj opgave</Text>
      </Pressable>

      <FlatList
        data={opgaver}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>Du har ingen opgaver endnu.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.opgaveKort}>

            <View style={styles.opgaveTop}>
              <Text style={styles.fagTekst}>{item.fag}</Text>
              <Text style={styles.datoTekst}>{item.dato}</Text>
            </View>

            <Text style={styles.opgaveNavn}>{item.navn}</Text>

            <View style={styles.opgaveBund}>
              <Pressable onPress={() => markerOpgave(item.id)}>
                <Text style={styles.statusTekst}>
                  {item.færdig ? '✓ Færdig' : '○ Ikke færdig'}
                </Text>
              </Pressable>

              <Pressable onPress={() => sletOpgave(item.id)}>
                <Text style={styles.sletTekst}>Slet</Text>
              </Pressable>
            </View>

          </View>
        )}
      />
    </View>
  );
}
