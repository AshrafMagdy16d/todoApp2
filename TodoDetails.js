import { useNavigation ,useRoute} from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

export default function TodoDetails() {
    const {goBack}=useNavigation();
    const {params}=useRoute();
  return (
    <div>
      <Text >{params.id}</Text>
      <Text >{params.title}</Text>
    </div>
  )
}
