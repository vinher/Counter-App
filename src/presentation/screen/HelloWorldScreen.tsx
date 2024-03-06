import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
interface Props{
  name?:string;
}
export const HelloWorldScreen = ({ name = 'name'}:Props) => {
  return (
    <View style={ styles.container }>
        <Text 
        numberOfLines= {1} 
        style={ styles.title }
        ellipsizeMode='clip'> Hello { name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',

    },
    title:{
        fontSize:45,
        textAlign: 'center',
        padding:20
    }
});