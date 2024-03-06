import React, { useState } from 'react'
import { StyleSheet, Text,View } from 'react-native'
import { globalStyles } from '../../presentation/theme/global.styles';
import { FAB } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const FloatingActionButton = () => {
  const [count, setCount] = useState(10);
    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            {/* <Icon name="accessibility-outline" size={35}/> */}
            <FAB
                icon="add"
                style={styles.fab}
                onPress={()=>setCount( count +1)}
                onLongPress={()=>setCount(0)}
            ></FAB>
        </View>
  )
}

const styles = StyleSheet.create({
    fab:{
        position: 'absolute',
        margin:16,
        right:0,
        bottom:0,
    }
});

