export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.zapnode.aora',
    projectId: '66776668001bcb64d61e',
    databaseId: '66776ff90035482a535d',
    userCollectionId: '66777036001ce640e978',
    videoCollectionId: '667770760015d17dfb50',
    storageId: '66777387000ba3770acc'
}

const { endpoint, platform, projectId, databaseId, userCollectionId, videoCollectionId, storageId} = config;

import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
    .setPlatform(platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async( email, password, username ) => {
    try {
        const newAccount = await account.create(
            ID.unique(), 
            email,
            password,
            username
        )
        
        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await SignIn(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;
    } catch (error) {
        console.log(error, 'app1');
        throw new Error(error);
    }
    
}

export const SignIn = async( email, password ) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session
    } catch (error) {
        
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        // console.log(currentAccount.$id)
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        // console.log(currentUser.documents)
        if (!currentUser) throw Error;

        console.log(currentUser.documents)
        return currentUser.documents
    } catch (error) {
        console.log(error, 'app2')
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        )
    
        return posts.documents;
    } catch (error) {
        
    }
}

export const getLatestPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        )
    
        return posts.documents;
    } catch (error) {
        
    }
}