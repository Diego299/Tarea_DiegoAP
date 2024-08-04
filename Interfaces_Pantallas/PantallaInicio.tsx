import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
}

const PantallaInicio: React.FC = () => {
  const productos: Producto[] = [
    //En este caso las imagenes se sacaron de la web para mas facilidad pero tambien se podrian descargar
    { id: '1', nombre: 'Desarrolo de Software', precio: 999.99, imagen: 'https://www.starkcloud.com/hubfs/Imported_Blog_Media/Desarrollo-de-Software.webp' },
    { id: '2', nombre: 'Enfermeria', precio: 999.99, imagen: 'https://www.bimedica.com/wp-content/uploads/2020/05/semana-de-la-enfermeria.jpg' },
    { id: '3', nombre: 'Telecomunicaciones', precio: 999.99, imagen: 'https://www.telefonica.com/es/wp-content/uploads/sites/4/2022/02/TELECOS_1250x703.jpg?w=1224&h=673&crop=1' },
    { id: '4', nombre: 'Educacion Basica', precio: 999.99, imagen: 'https://siteal.iiep.unesco.org/sites/default/files/educacion_basica_-_mobile.jpg' },
  ];

  const renderProducto = ({ item }: { item: Producto }) => (
    <TouchableOpacity style={estilos.productoItem}>
      <Image source={{ uri: item.imagen }} style={estilos.productoImagen} />
      <Text style={estilos.productoNombre}>{item.nombre}</Text>
      <Text style={estilos.productoPrecio}>{item.precio.toFixed(2)} €</Text>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>PAGINA DE INICIO DEL INSTITUTO ITSQMET</Text>
      <FlatList
        data={productos}
        renderItem={renderProducto}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={estilos.listaProductos}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    margin: 10,
    top: 50,
    right: 0,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a90e2',
  },
  listaProductos: {
    paddingBottom: 0,
  },
  productoItem: {
    flex: 1,
    margin: 8,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  productoImagen: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  productoNombre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
  },
  productoPrecio: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
});

export default PantallaInicio;