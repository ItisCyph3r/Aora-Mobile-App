import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { createUser } from '@/lib/appwrite'
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [form, setForm] = useState({
        // firstName: '',
        // lastname: '', 
        email: '',
        password: '',
        username: ''
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    // console.log(form)

    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true)

        try {
            const result = await createUser(form.email, form.password, form.username)

            setUser(result);
            setIsLogged(true);

            router.replace('/home')
        } catch (error: any) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text 
                        className='text-2xl text-white text-psemibold mt-10 font-psemibold'
                    >
                        Create An Aora Account
                    </Text>

                    {/* <View className='flex-row justify-between'>
                        <FormField 
                            title='First Name'
                            value={form.firstName}
                            handleChangeText={(e: string) => setForm({ ...form, firstName: e})}
                            otherStyles='flex-1 mr-2 mt-7'

                            // keyboardType='email-address'
                        />
                        <FormField 
                            title='Last Name'
                            value={form.lastname}
                            handleChangeText={(e: string) => setForm({ ...form, lastname: e})}
                            otherStyles='flex-1 ml-2 mt-7'

                            // keyboardType='email-address'
                        />
                    </View> */}

                    <FormField 
                        title='Email'
                        value={form.email}
                        handleChangeText={(e: string) => setForm({ ...form, email: e})}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />
                    <FormField 
                        title='Username'
                        value={form.username}
                        handleChangeText={(e: string) => setForm({ ...form, username: e})}
                        otherStyles='mt-7'
                        keyboardType='username'
                    />
                    <FormField 
                        title='Password'
                        value={form.password}
                        handleChangeText={(e: string) => setForm({ ...form, password: e})}
                        otherStyles='mt-7'
                    />

                    <CustomButton 
                        title='Sign Up' 
                        containerStyles='w-full mt-10'
                        handlePress={submit}
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row'>
                        <Text className='text-gray-100 text-lg font-pregular'>
                            Have an account already? {''}
                        </Text>
                        <Link className='text-lg font-psemibold text-secondary' href='/sign-in'>
                            Sign In
                        </Link>
                    </View>
                </View>
                <StatusBar 
                    backgroundColor="#161622"
                    style="light"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp