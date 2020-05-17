import React from 'react'
import {Image, View, Text} from 'react-native'
import estilo from './estilo.js'

const Foto = ({info}) => {
  return (
      <View>
          <Image 
              source={{ uri: info.photo}} 
              style={estilo.imagem}
          />
          <View style={estilo.viewImage}>
              <Image style={estilo.like} source={require('../../../res/img/s2.png')} />
              <Text  style={estilo.descricao}>{info.description}</Text>
          </View>
      </View>
  );
};

export default Foto;
