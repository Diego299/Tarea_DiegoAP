import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

//Se Importa la Respectiva BIBLIOTECA :)
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PropsTipos = {
  navigation: NativeStackNavigationProp<any, 'Registro'>;
};

//Se agregan las respectivas Constantes para poder usar :)
const PantallaPrincipal: React.FC<PropsTipos> = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const registrarse = () => {
    if (nombre && email && clave) {
      
      console.log('Datos de registro de inicio:', { nombre, email, clave });
      navigation.navigate('Inicio');
    } else {
      Alert.alert('Todos los Campos son de Obligacion de llenar para avanzar "GRACIAS ATT: Diego"');
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Formulario de Inicio Segundo Desarrollo</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ingresa Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={estilos.input}
        placeholder="Ingresa Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={estilos.input}
        placeholder="Tu clave secreta"
        value={clave}
        onChangeText={setClave}
        secureTextEntry
      />

      <TouchableOpacity style={estilos.boton} onPress={registrarse}>
        <Text style={estilos.textoBoton}>INICIA SESION</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  boton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PantallaPrincipal;