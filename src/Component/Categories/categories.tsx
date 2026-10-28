import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "./categoryStyles";
type Props = {
  categories: string[];
  selectCategory: string;
  onCategoryPress: (category: string) => void;
};
const Categories = ({ categories, selectCategory, onCategoryPress }: Props) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      style={{ marginHorizontal: -24, flexGrow: 0 }}
      data={categories}
      renderItem={({ item }) => {
        const selected = selectCategory === item;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selectCategory === item ? styles.selectedItemContainer : null,
            ]}
          >
            <Text
              style={[
                styles.item,
                selectCategory === item ? styles.selectedItem : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Categories;
