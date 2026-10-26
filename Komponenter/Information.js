//importerer komponenter fra React Native og styling fra styles.js
import { View, Text } from 'react-native';
import styles from '../Style/styles';

export default function Information() {
  return (
    <View style={styles.container}>

      <Text style={styles.overskrift}>Om appen</Text>

      <Text style={styles.beskrivelse}>
         Mit Studieoverblik hjælper studerende med at holde styr på dine opgaver og deadlines. 
         Du kan tilføje, markere og slette opgaver. De gemmes automatisk, så du kan finde dem igen.
      </Text>

    </View>
  );
}