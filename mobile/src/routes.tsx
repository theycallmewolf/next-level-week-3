import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateMapPosition/SelectMapPosition';
import OrphanageData from './pages/CreateMapPosition/OrphanageData';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#faf3f5'}
      }}>
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
          options={{
            headerShown: false
          }}
        />
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () =><Header showCancel = {false} title="Orfanato" />
          }}
        />
        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () =><Header title="Selecione no mapa" />
          }}
        />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () =><Header title="Adicione os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}