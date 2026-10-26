
import { View, Text, Button } from 'react-native';
import styles from '../Style/styles';

// Appens forside
export default function Forside({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.overskrift}>
        Mit Studieoverblik
      </Text>

      <Text style={styles.beskrivelse}>
        Få et hurtigt overblik over dine opgaver og deadlines.
      </Text>

      <Button
        title="Se mine opgaver"
        onPress={() => navigation.navigate('Opgaveoversigt')}
      />
    </View>
  );
}
