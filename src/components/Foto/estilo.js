import { StyleSheet, Dimensions} from 'react-native'
const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create({
    imagem: {
        width: largura, 
        height: largura
    }, 
    descricao:{
        padding: 10
    },
    like:{
        width: 30,
        height: 30,
    },
    viewImage: {
        flexDirection: 'row',
        padding: 10
    }
})

export default estilo
