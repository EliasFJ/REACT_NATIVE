import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fecha from './Fecha';
import AlertExample from './Alert';
import GfGApp from './Tablas';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require("./Logo.jpg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Seguimiento de Ventas</Text>
      <Button color="pink" title="Nuevo Pedido" onPress={() => navigation.navigate("Pedido")} ></Button>
      <Button color="pink" title="Ver Seguimiento" onPress={() => navigation.navigate("Seguimiento")}></Button>
    </ImageBackground>
    </View>
  );
}

//Hola
function SettingsScreen() {
  const [number, onChangeNumber] = React.useState({
    cliente: '',
    tema: '',
    numero: '',
    precio: '',
    anticipo: '',
  });

  return (
    <SafeAreaView>
      <label>
        Nombre Cliente
      </label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number.cliente}
        placeholder="Nombre Cliente"
        keyboardType="numeric"
      />
      <label>
        Tema de Galletas
      </label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number.tema}
        placeholder="Tema de Galletas"
        keyboardType="numeric"
      />
      <label>
        Numero de Galletas
      </label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number.numero}
        placeholder="Numero de galletas"
        keyboardType="numeric"
      />
      <label>
        Precio por Galleta
      </label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number.precio}
        placeholder="Precio por galleta"
        keyboardType="numeric"
      />
      <label>
        Cantidad de Anticipo
      </label>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number.anticipo}
        placeholder="Cantidad de anticipo"
        keyboardType="numeric"
      />
      <label>
        Fecha
      </label>
      <Fecha/>
      <View>
      <AlertExample/>
      </View>
    </SafeAreaView>
  );
}

function SeguimientoScreen() {
  return (
    <GfGApp/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pedido" component={SettingsScreen} />
        <Tab.Screen name="Seguimiento" component={SeguimientoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Button: {
    justifyContent: 'center',
  }
  
});
