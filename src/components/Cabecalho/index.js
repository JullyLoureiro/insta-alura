import React from 'react'
import {View, Text, Image} from 'react-native'
import estilo from './estilo.js'

const Cabecalho = ({user}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image style={estilo.fotoUsuario} source={{uri: user.photo}} />
            <Text>{user.userName}</Text>
        </View>
    )
}

export default Cabecalho