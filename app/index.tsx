import React from 'react'; // Добавьте этот импорт
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

import App from './../app';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx 123 to edit this screen.</Text>
    </View>
  );
}