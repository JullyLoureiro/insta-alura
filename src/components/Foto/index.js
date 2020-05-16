import React from 'react'
import {Image, View, Text} from 'react-native'
import estilo from './estilo.js'

const Foto = () => {
  return (
      <View>
          <Image 
              source={require('../../../res/img/alura.jpg')} 
              style={estilo.imagem}
          />
          <Text>Descrição da foto</Text>
      </View>
  );
};

export default Foto;
