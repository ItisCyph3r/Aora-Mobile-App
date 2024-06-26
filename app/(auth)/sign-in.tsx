import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SignIn, getCurrentUser } from '@/lib/appwrite'
import { useGlobalContext } from "../../context/GlobalProvider";

const Login = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    
    const submit = async () => {
        if ( !form.email || !form.password ) {
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true)

        try {
            // const result = await SignIn(form.email, form.password)
            // console.log(result)
            // // set it to global state
            // result ? router.replace('/home') : Alert.alert('Error', 'Something went wrong')
            
            await SignIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLoggedIn(true);

            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
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
                        Log in to Aoraaa
                    </Text>
                    <FormField 
                        title='Email'
                        value={form.email}
                        handleChangeText={(e: string) => setForm({ ...form, email: e})}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />
                    <FormField 
                        title='Password'
                        value={form.password}
                        handleChangeText={(e: string) => setForm({ ...form, password: e})}
                        otherStyles='mt-7'
                    />

                    <CustomButton 
                        title='Sign In' 
                        containerStyles='w-full mt-10'
                        handlePress={submit}
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row'>
                        <Text className='text-gray-100 text-lg font-pregular'>
                            Don't have an account? {''}
                        </Text>
                        <Link className='text-lg font-psemibold text-secondary' href='/sign-up'>
                            Sign Up
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

export default Login