import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }: any) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image source={images.empty} 
                resizeMode='contain'
                className='w-[270px] h-[215px]'
            />
            <Text className='text-xl font-psemibold text-white mt-2 text-center'>
                {title}
            </Text> 
            <Text className='font p-medium text-sm text-gray-100'>
                {subtitle}   
            </Text>    
            
            <CustomButton
                title='Create a video'
                handlePress={()=> router.push('/create')}
                containerStyles='my-5 w-full'
            />
        </View>
    )
}

export default EmptyState