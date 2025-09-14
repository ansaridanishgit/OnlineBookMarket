import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChildHeader from '../../Components/Headers/ChildHeader';
import { ShoppingCart } from 'lucide-react-native';

export default function BookDetails({ navigation }) {
  const insets = useSafeAreaInsets();
  const [inCart, setInCart] = useState(false);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Header */}
      <ChildHeader navigation={navigation} title={'Book Details'} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Cover Image */}
        <Image
          source={require('../../../assests/book2.jpeg')}
          style={styles.shopMainImage}
        />

        {/* Content Card */}
        <View style={styles.contentCard}>
          <Text style={styles.shopName}>The Psychology of Money</Text>
          <Text style={styles.shopDesc}>
            A timeless book on wealth, greed, and happiness. Learn how money
            works and how to make smarter financial decisions.
          </Text>

          {/* Price */}
          <Text style={styles.cardPrice}>₹199</Text>
        </View>
      </ScrollView>

      {/* Fixed Add to Cart Button */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 10 }]}>
        <TouchableOpacity
          style={[
            styles.cartButton,
            { backgroundColor: inCart ? '#E57373' : '#00A3B5' },
          ]}
          onPress={() => setInCart(!inCart)}
        >
          <ShoppingCart size={20} color="#fff" />
          <Text style={styles.cartText}>
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shopMainImage: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    backgroundColor: '#f9f9f9',
  },
  contentCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 18,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  shopName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#37474F',
  },
  shopDesc: {
    fontSize: 15,
    color: '#546E7A',
    marginTop: 10,
    lineHeight: 22,
    textAlign: 'justify',
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00A3B5',
    marginTop: 18,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 26,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  cartText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
  },
});
