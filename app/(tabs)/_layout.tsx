import { Stack } from 'expo-router';
import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  return (
    <Stack>
       <Stack.Screen name='index' options={{ title: 'Home' }} />
       {/* <Stack.Screen name='explore' options={{ title: 'about' }} /> */}
    </Stack>
  )
  
}
