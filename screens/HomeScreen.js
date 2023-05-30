import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import {
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import { Path, Svg } from 'react-native-svg';
import { AdjustmentIcon, SearchIcon } from '../components/Svg';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from "../sanity";

const HomeScreen = () => {

    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "featured"]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
            }
        `).then(data => {
            setFeaturedCategories(data)
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5" style={{ paddingTop: Constants.statusBarHeight }}>

            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">

                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color={"#00CCBB"} />
                    </Text>
                </View>

                <UserIcon size={35} color={"#00CCBB"} />

            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4">

                <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center mr-2">
                    <SearchIcon />
                    <TextInput placeholder='Restaurants and Cuisines'
                        keyboardType='default'
                    />
                </View>

                <AdjustmentIcon />

            </View>

            {/* Body */}
            <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>

                <Categories />


                {featuredCategories.map(category => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}


                {/*                 
                <FeaturedRow
                    id="1234"
                    title={"Tasty Discounts"}
                    description="Everyone's been enjoying these juicy discounts!"
                />
                <FeaturedRow
                    id="12345"
                    title={"Offers near you!"}
                    description="why not support your local restaurant tonight!"
                /> */}

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen