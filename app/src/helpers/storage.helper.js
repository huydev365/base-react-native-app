import {AsyncStorage} from "react-native";

const FCM_TOKEN = "fcm_token";
const KEY_TOKEN = 'access_token';

export const saveFCMToken = fCMToken =>
    AsyncStorage.setItem(FCM_TOKEN, fCMToken);

export const getFCMToken = () => {
    return AsyncStorage.getItem(FCM_TOKEN);
};

export const saveToken = (token) => AsyncStorage.setItem(KEY_TOKEN, token);

export const getToken = () => {
    return AsyncStorage.getItem(KEY_TOKEN)
};

export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);
