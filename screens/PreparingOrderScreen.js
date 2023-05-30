import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';


const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000);
    }, [])

    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <StatusBar backgroundColor='#00CCBB' />
            <Animatable.Image
                source={require("../assets/orderLoding.gif")}
                animation={"slideInUp"}
                iterationCount={1}
                className="w-96 h-96"
            />

            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color='#fff' />

        </SafeAreaView>
    )
}

export default PreparingOrderScreen