import React from "react";
import { FlatList, Image, Linking, ScrollView, Text, TouchableOpacity, View,  } from 'react-native'

const Netflix = () => {
    const app = [
        {
            name: 'Flash',
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyEPU_bl10D0_Ux6PtoY3wajfb4zPrXPzGvXttOZv1b3UBgUl1uUqgh4&s' },
            desc: 'I am the flash and i am a fast man in the world',
            lk: 'http://www.netflix.com'
        },
        {
            name: 'Flash',
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyEPU_bl10D0_Ux6PtoY3wajfb4zPrXPzGvXttOZv1b3UBgUl1uUqgh4&s' },
            desc: 'I am the flash and i am a fast man in the world',
            lk: 'http://www.netflix.com'
        },
        {
            name: 'Flash',
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyEPU_bl10D0_Ux6PtoY3wajfb4zPrXPzGvXttOZv1b3UBgUl1uUqgh4&s' },
            desc: 'I am the flash and i am a fast man in the world',
            lk: 'http://www.netflix.com'
        },
        {
            name: 'Flashfg',
            img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyEPU_bl10D0_Ux6PtoY3wajfb4zPrXPzGvXttOZv1b3UBgUl1uUqgh4&s' },
            desc: 'I am the flash and i am a fast man in the world',
            lk: 'http://www.netflix.com'
        },
    ]
    return (
        <>
        <ScrollView  nestedScrollEnabled={true}>
            <View style={{ margin: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={app}
                    renderItem={(itm) => {
                        return (<View style={{ marginHorizontal: 5, width: 150, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
                            <Image source={itm.item.img} style={{ width: 146, height: 200, borderWidth: 1, borderColor: 'green' }} />
                            <Text style={{ alignItems: "center" }}>{itm.item.name}</Text>
                            <Text>{itm.item.desc}</Text>
                        </View>)
                    }}
                />
            </View>
            <View style={{ margin: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={app}
                    renderItem={(itm) => {
                        return (<View style={{ marginHorizontal: 5, width: 150, borderWidth: 2, justifyContent: 'center', alignItems: "center" }}>
                            <Image source={itm.item.img} style={{ width: 146, height: 200, borderWidth: 1, borderColor: 'green' }} />
                            <Text style={{ alignItems: "center" }}>{itm.item.name}</Text>
                            <Text>{itm.item.desc}</Text>
                        </View>)
                    }}
                />
            </View>
            <View style={{ margin: 10 }}>
                <FlatList
                    keyExtractor={(item, index) => `key-${index}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={app}
                    renderItem={(itm) => {
                        return (<ScrollView horizontal={true} style={{ marginHorizontal: 5, width: 150, borderWidth: 2,marginBottom:2}}>
                            <TouchableOpacity onPress={()=>{Linking.openURL('http://www.netflix.com')}}>
                            <Image source={itm.item.img} style={{ width: 146, height: 200, borderWidth: 1, borderColor: 'green' }} /></TouchableOpacity>
                            <Text style={{ alignItems: "center" }}>{itm.item.name}</Text>
                            <Text>{itm.item.desc}</Text>
                        </ScrollView>)
                    }}
                />
            </View>
            </ScrollView>
        </>
    )
}

export default Netflix;