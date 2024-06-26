import { View, Text, FlatList, Image, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const Create = () => {

  const [refreshing, setRefreshing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onRefresh = () => {
      setRefreshing(true)

      setRefreshing(false)
  }

  const [form, setForm] = useState({
    videoTitle: '',
    videoUrl: '',
    thumbnailUrl: '',
    prompt: ''
  })

  const submit = () => {

  }
    return (
        <SafeAreaView className='bg-primary h-full'>
          <ScrollView>
            <View className='w-full min-h-[85vh] px-4 my-6'>
              <Text className='text-2xl font-psemibold text-white'>
                Upload Video
              </Text>

              <FormField 
                title='Video Title'
                value={form.videoTitle}
                handleChangeText={(e: string) => setForm({ ...form, videoTitle: e})}
                otherStyles='mt-7'
                placeholder='Give your video a catchy title'
              />

              <FormField 
                title='AI Prompt'
                value={form.prompt}
                handleChangeText={(e: string) => setForm({ ...form, prompt: e})}
                otherStyles='mt-7'
                placeholder='The AI prompt of your video'
              />

              <CustomButton 
                title='Submit & Publish' 
                containerStyles='w-full mt-10'
                handlePress={submit}
                isLoading={isSubmitting}
              />
            </View>
              
          </ScrollView>
        </SafeAreaView>
    )
}

export default Create
