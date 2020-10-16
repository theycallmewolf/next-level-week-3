import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import {Feather} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap(){
  
  const [ orphanages, setOrphanages ] = useState<Orphanage[]>([]); //start each state with the right type of variable
  const navigation = useNavigation();

  console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  function handleNavigateToOrphanageDetails(id: number){
    navigation.navigate("OrphanageDetails", { id })
  }
  
  function handleNavigateToCreateOrphanage(){
    navigation.navigate("SelectMapPosition")
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 38.7029921,
          longitude: -9.2333917,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        {orphanages.map(orphanage =>{
          return (
            <Marker 
            key={ orphanage.id }
            icon={ mapMarker }
            calloutAnchor={{
              x: 2.7,
              y: .8,
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}>
            <Callout tooltip onPress={ () =>{ handleNavigateToOrphanageDetails(orphanage.id) } }> 
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
          )
        })}
        </MapView>
        <View style={styles.footer}>
      <Text style={styles.footerText}>{orphanages.length} orfanato{ orphanages.length > 1 ? 's' : ''} encontrados</Text>
          <RectButton
            style={styles.createOrphanageButton}
            onPress={ handleNavigateToCreateOrphanage }>
            <Feather name="plus" size={20} color="#fff" />
          </RectButton>
        </View>
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
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderRadius: 16,
    justifyContent: 'center',

    // shadow for android
    elevation: 3, 
    
    // shadow for iOS 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: .2
  },
  calloutText: {
    fontFamily: 'nunito700',
    color: '#0089a5',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText:{
    fontFamily: 'nunito700',
    color: '#8fa7b3',
    fontSize: 16
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
})