// // import { Image, Text, View } from "react-native";
// // import { StatusBar } from "expo-status-bar";
// // import { Link } from "expo-router";
// // import images from '@/constants/images'
// // import { SafeAreaView } from "react-native-safe-area-context";

// // export default function Index() {
// //   return (
// //     <SafeAreaView className="w-screen h-screen bg-primary flex items-center justify-center bg-grey-300 text-white mt-3">
// //       <Image 
// //         source={images.logo}
// //         className='h-14'
// //         resizeMode="contain"

// //       />
// //       <Image 
// //         source={images.cards}
// //         className='h-40'
// //         resizeMode="cover"

// //       />
// //       <Text className="text-3xl font-pblack">
// //         Zapnode
// //       </Text>
// //       {/* <StatusBar style="auto" />
// //       <Link href={'/profile'} className="text-blue-500"> Go to Profile</Link>
// //       <Link href={'/home'} className="text-blue-500"> Go to Home</Link> */}
// //     </SafeAreaView>
// //   );
// // }




// import { Button, Image, ScrollView, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { Link } from "expo-router";
// import images from '@/constants/images'
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Index() {
//   return (
//     <SafeAreaView className="h-full bg-primary">
//       <ScrollView contentContainerStyle={{ height: '100%'}}>
//         {/* <View className="w-full  h-full px-4">
//           <Image 
//             source={images.logo}
//              className="w-[130px] h-[84px]"
//              resizeMode="contain"
//           />
//           <Image 
//             source={images.cards}
//              className="max-w-[380px] h-[300px]"
//              resizeMode="contain"
//           />
//           <View className="relative mt-5 flex">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless Possibilities With {' '}
//             </Text>
//             <Text className="text-secondary-200">Aora</Text>
//           </View> */}
//           <View className="w-full flex justify-center items-center h-full px-4">
//           <Image
//             source={images.logo}
//             className="w-[130px] h-[84px]"
//             resizeMode="contain"
//           />

//           <Image
//             source={images.cards}
//             className="max-w-[380px] w-full h-[298px]"
//             resizeMode="contain"
//           />

//           <View className="relative mt-5">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless{"\n"}
//               Possibilities with{" "}
//               <Text className="text-secondary-200">Aora</Text>
//             </Text>

//             <Image
//               source={images.path}
//               className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
//               resizeMode="contain"
//             />
//           </View>

//           <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
//             Where Creativity Meets Innovation: Embark on a Journey of Limitless
//             Exploration with Aora
//           </Text>

//           {/* <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles="w-full mt-7"
//           /> */}
//         </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }





// import { Image, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { Link } from "expo-router";
// import images from '@/constants/images'
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Index() {
//   return (
//     <SafeAreaView className="w-screen h-screen bg-primary flex items-center justify-center bg-grey-300 text-white mt-3">
//       <Image 
//         source={images.logo}
//         className='h-14'
//         resizeMode="contain"

//       />
//       <Image 
//         source={images.cards}
//         className='h-40'
//         resizeMode="cover"

//       />
//       <Text className="text-3xl font-pblack">
//         Zapnode
//       </Text>
//       {/* <StatusBar style="auto" />
//       <Link href={'/profile'} className="text-blue-500"> Go to Profile</Link>
//       <Link href={'/home'} className="text-blue-500"> Go to Home</Link> */}
//     </SafeAreaView>
//   );
// }




import { Button, Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import images from '@/constants/images'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from '../components/CustomButton'


export default function Index() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
          />
          <Image 
            source={images.cards}
              className="max-w-[380px] h-[300px]"
              resizeMode="contain"
          />
          <View className="relative mt-5 flex">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With {''}
            
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-9"
              resizeMode="contain"
            />
          </View> 
          <Text className="text-gray-100 mt-7 text-center font-pregular"> 
            Where creativity meets innovation: embark on a journey  of limitless exploration with Zapnode
          </Text>
          <CustomButton 
            title='Continue with Email' 
            containerStyles='w-full mt-7'
            handlePress={() => {router.push('/sign-in')}}
          />
        </View>
        {/* <StatusBar 
          backgroundColor="#161622"
          style="light"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

