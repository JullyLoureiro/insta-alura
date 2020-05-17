import React, {Fragment, useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import Cabecalho from './src/components/Cabecalho'
import Foto from './src/components/Foto'

const informacoes = [
  {usuario: 'Juliana'},
  {usuario: 'Bruno'},
  {usuario: 'Lucas'},
  {usuario: 'Fernanda'},
]

const App = () => {
  const [fotos, setFotos] = useState([])

  useEffect(()=>{
    const carregaFotos = async() => {
        const resultHTTP = await fetch("http://www.mocky.io/v2/5ec184132f0000417a4c88a9")
        const fotos = await resultHTTP.json()
        setFotos(fotos)
    }
    carregaFotos() 
  })

  return (
    <View>
        <FlatList 
          data={fotos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => 
            <Fragment>
              <Cabecalho user={item} />
              <Foto info={item}/>
            </Fragment>
          }
        />
    </View>
  );
};

export default App;
