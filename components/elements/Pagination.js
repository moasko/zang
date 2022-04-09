import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'


export default function Pagination({ page,setPrev,setNext }) {


    return (

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        }}>
            <TouchableOpacity
            onPress={setPrev}
             style={{
                width: '35%',
                height: 40,
                borderRadius: 20,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                    Precedant
                </Text>
            </TouchableOpacity>
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                    {page}
                </Text>
            </View>

            <TouchableOpacity
            onPress={setNext}
            style={{
                width: '35%',
                height: 40,
                borderRadius: 20,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                  Suivant
                </Text>
            </TouchableOpacity>
        </View>
    )
}