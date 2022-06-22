import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const Tag: React.FC<{
  category: String;
  selectedCategory: String;
  setSelectedCategory: Function;
}> = ({category, selectedCategory, setSelectedCategory}) => {
  const textColor = '#fff';

  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  const handleCategory = () => {
    switch (category) {
      case 'business':
        return 'Negócios';
      case 'entertainment':
        return 'Entretenimento';
      case 'general':
        return 'Geral';
      case 'health':
        return 'Saúde';
      case 'science':
        return 'Ciência';
      case 'sports':
        return 'Esportes';
      case 'technology':
        return 'Tecnologia';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedCategory === category && styles.selected,
      ]}
      onPress={handlePress}>
      <Text style={[styles.text, {color: textColor}]}>{handleCategory()}</Text>
    </TouchableOpacity>
  );
};
