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
      style={{
        marginTop: 24,
        flexGrow: 0,
        marginHorizontal: -24,
      }}
      data={categories}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selectCategory === item ? styles.selectedItemContainer : null,
              index === 0 ? { marginLeft: 24 } : {},
            ]}
          >
            <Text
              style={[
                styles.item,
                selectCategory === item ? styles.selectedItem : {},
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => String(item)}
    />
  );
};

export default Categories;
