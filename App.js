// Importerer navigation fra react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importerer vores fire skærme
import Forside from './Komponenter/Forside';
import Opgaveoversigt from './Komponenter/Opgaveoversigt';
import Information from './Komponenter/Information';
import Tilføjopgave from './Komponenter/Tilføjopgave';

// Opretter en navigator i bunden 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        {/* Forside skærmen*/}
        <Tab.Screen
          name="Forside"
          component={Forside}
        />

        {/* Skærmen med opgaver og deadlines */}
        <Tab.Screen
          name="Opgaveoversigt"
          component={Opgaveoversigt}
        />
       
        {/* Skærmen til at tilføje opgaver */}
        <Tab.Screen
          name="Tilføj opgave"
          component={Tilføjopgave}
        />

        {/* Skærmen med information om appen */}
        <Tab.Screen
          name="Information"
          component={Information}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}