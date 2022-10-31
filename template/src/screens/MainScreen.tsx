import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Main Screen</Text>
    </SafeAreaView>
  );
}
