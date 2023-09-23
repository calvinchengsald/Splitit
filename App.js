
import {View, Text, ScrollView, SafeAreaView, Button, ActivityIndicator, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useState, useEffect, useRef} from 'react'
import MainAddPage from './pages/MainAddPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

    const [queryState, setQueryState] = useState(QUERY_STATE_ENUM.INSIDE)

    const handlePress = (state) => {
        setQueryState(state)
        console.log("pressed me")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {
                    queryState===QUERY_STATE_ENUM.MODE?
                    <>
                        <Button title='Manual' onPress={()=>setQueryState(QUERY_STATE_ENUM.INSIDE)}> Manual</Button>
                        <Button title='Take Picture' onPress={handlePress}> Take Picture</Button>
                        <Button title='Upload Receipt' onPress={handlePress}> Upload Receipt</Button>
                    </>
                    :
                    <>
                        <MainAddPage/>
                    </>
                }
                
                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const QUERY_STATE_ENUM = {
    MODE: "MODE",
    INSIDE: "INSIDE"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5%'
  },
});
