import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertExample = () => {
   const showAlert = () =>{
      Alert.alert(
         'Los datos han sido guardados :D'
      )
   }
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text>Guardar Pedido</Text>
      </TouchableOpacity>
   )
}
export default AlertExample

const styles = StyleSheet.create ({
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'pink',
   },
   text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});