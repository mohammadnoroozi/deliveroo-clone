import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from "../sanity"

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then(data => {
            setCategories(data);
        })
    }, [])

    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" /> */}
            {categories?.map(category => (
                <CategoryCard key={category.name} imgUrl={urlFor(category.image).width(200).url()} title={category.name} />
            ))}
        </ScrollView>
    )
}

export default Categories;