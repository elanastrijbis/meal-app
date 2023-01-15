import { View, Text } from 'react-native';

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>hey - {mealId}</Text>
    </View>
  );
}
