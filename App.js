import React, {Fragment} from 'react';
import {ScrollView, Dimensions, FlatList} from 'react-native'
import Cabecalho from './src/components/Cabecalho'
import Foto from './src/components/Foto'

const informacoes = [
  {usuario: 'Juliana'},
  {usuario: 'Bruno'},
  {usuario: 'Lucas'},
  {usuario: 'Fernanda'},
]

const App = () => {
  return (
    <ScrollView>

        <FlatList 
          data={informacoes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => 
            <Fragment>
              <Cabecalho nomeUsuario={item.usuario} />
              <Foto />
          </Fragment>
          }
        />
       
    </ScrollView>
  );
};

export default App;
