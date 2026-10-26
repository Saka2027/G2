//importerer StyleSheet fra react-native  
import { StyleSheet } from 'react-native';

// samler appens styling
const styles = StyleSheet.create({

  // grunddesign til alle skærme
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  // Overskrifter på siderne
  overskrift: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // Forklarende tekst
  beskrivelse: {
    fontSize: 16,
    marginBottom: 20,
  },

  // Inputfelter til nye opgaver
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
  },

  // Knap til at tilføje opgaver
  tilfoejKnap: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  // Tekst på tilføj-knappen
  knapTekst: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Kort til hver opgave
  opgaveKort: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },

  // Fag og deadline på samme linje
  opgaveTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Navnet på faget
  fagTekst: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Opgavens deadline
  datoTekst: {
    fontSize: 13,
    color: '#666',
  },

  // Opgavens navn
  opgaveNavn: {
    fontSize: 15,
    marginVertical: 12,
  },

  // Status og slet-knap på samme linje
  opgaveBund: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Tekst til færdig/ikke færdig
  statusTekst: {
    color: '#2563eb',
  },

  // Tekst til slet-knappen
  sletTekst: {
    color: '#dc2626',
  },

});

// eksporterer styles, så de kan bruges i andre filer
export default styles;