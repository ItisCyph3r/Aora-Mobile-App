import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons, images} from '@/constants'




const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }: any) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return (

        <View 
            className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
            <TextInput 
            className='flex-1 text-white font-pregular text-base mt-0.5' 
            value={value}
            placeholder={'Search for a video topic'}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry={ title === 'Password' && !showPassword}
            />

            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
            
        </View>
        
    )
}

export default SearchInput

// title='Email'
// value={form.email}
// handleChangeText={(e: string) => setForm({ ...form, email: e})}
// otherStyles='mt-7'
// keyboardType='email-address'