import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Permissions } from "expo";
import * as Notifications from "expo-notifications";
export default function PushNotifications() {
  useEffect(async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <View></View>;
}
