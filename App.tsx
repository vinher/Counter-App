import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { HelloWorldScreen } from './src/presentation/screen/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screen/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import { FloatingActionButton } from './src/components/shared/FloatingActionButton'
import  IonIcon  from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
    settings={{
      icon:(props) => <IonIcon { ...props }/>
      }}>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name='Kevin Hernandez'/> */}
        {/* <CounterScreen/> */}
        <FloatingActionButton></FloatingActionButton>
    </SafeAreaView>
    </PaperProvider>
  )
}
