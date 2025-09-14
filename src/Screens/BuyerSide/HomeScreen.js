import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import NavigationBar from 'react-native-system-navigation-bar';
import { Text } from 'react-native-paper';
import { Clock, Store, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react-native';
import MainHeader from '../../Components/Headers/MainHeader';

const { width } = Dimensions.get('window');

const updatesData = [
  {
    id: '1',
    title: 'The Great Gatsby',
    description: 'Classic novel by F. Scott Fitzgerald, paperback edition',
    price: '₹299',
    shop: 'City Bookstore',
    time: '2 min ago',
    images: [
      require('../../../assests/book1.jpg'),
      require('../../../assests/book2.jpeg'),
    ],
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    description: 'Harper Lee’s timeless classic – must read',
    price: '₹349',
    shop: 'Readers Hub',
    time: '5 min ago',
    images: [
      require('../../../assests/book2.jpeg'),
      require('../../../assests/book1.jpg'),
    ],
  },
  {
    id: '3',
    title: '1984',
    description: 'George Orwell’s dystopian masterpiece',
    price: '₹249',
    shop: 'Novel World',
    time: '10 min ago',
    images: [
      require('../../../assests/book1.jpg'),
      require('../../../assests/book2.jpeg'),
    ],
  },
  {
    id: '4',
    title: 'Rich Dad Poor Dad',
    description: 'Bestselling personal finance guide by Robert Kiyosaki',
    price: '₹399',
    shop: 'Knowledge Point',
    time: '15 min ago',
    images: [
      require('../../../assests/book2.jpeg'),
      require('../../../assests/book1.jpg'),
    ],
  },
];


export default function HomeScreen({ navigation }) {
const [inCart, setInCart] = useState(false);

const toggleCart = () => {
  setInCart((prev) => !prev);
};
  useEffect(() => {
    NavigationBar.setNavigationColor('#ffffff', true);
  }, []);

  const CardItem = ({ item }) => {
  const [saved, setSaved] = useState(false);

  const toggleSave = () => {
    setSaved((prev) => !prev);
  };

  return (
    <View style={styles.card}>
      {/* Image with heart button */}
      <View style={styles.imageContainer}>
        <Image
          source={item.images[0]}
          style={styles.cardImage}
          resizeMode='contain'
        />
        <TouchableOpacity style={styles.heartButton} onPress={toggleSave}>
          <Text style={{ fontSize: 20 }}>{saved ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={()=>navigation.navigate('BookDetails')}>
        <Text style={styles.cardTitle}>{item.title}</Text>
</TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.rating}>⭐ 4.8 (127)</Text>
        </View>
        <View style={styles.row}>
          <Store size={14} color="#666" />
          <Text style={styles.seller}>{item.shop}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartBtnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


  return (
    <View style={[styles.container]}>
      <MainHeader navigation={navigation} />
      <FlatList
        data={updatesData}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
  backgroundColor: '#fff',
  borderRadius: 12,
  marginBottom: 16,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 6,
},
imageContainer: {
  width: '100%',
  height: 200,
  position: 'relative',
},
cardImage: {
  width: '100%',
  height: '100%',
},
heartButton: {
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: '#fff',
  borderRadius: 20,
  padding: 5,
  elevation: 2,
},
cardContent: {
  padding: 12,
},
cardTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#212121',
  marginBottom: 6,
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 4,
},
rating: {
  fontSize: 13,
  color: '#444',
},
seller: {
  fontSize: 13,
  color: '#666',
  marginLeft: 5,
},
priceRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
},
cardPrice: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#00A3B5',
},
cartBtn: {
  backgroundColor: '#546E7A',
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderRadius: 6,
},
cartBtnText: {
  color: '#fff',
  fontSize: 13,
  fontWeight: '600',
},

});