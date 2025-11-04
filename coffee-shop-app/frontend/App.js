import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

// CHANGE THIS LINE - Use your laptop IP
const API_URL = 'http://192.168.110.173:3000';

export default function CoffeeShopApp() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('full');

  const fetchFullMenu = async () => {
    try {
      setLoading(true);
      console.log('Fetching full menu from:', API_URL);
      const response = await axios.get(`${API_URL}/menu`);
      setMenuItems(response.data);
      setView('full');
      console.log('Menu items received:', response.data.length);
    } catch (error) {
      console.error('Error fetching menu:', error);
      Alert.alert('Error', `Failed to fetch menu items: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomItem = async () => {
    try {
      setLoading(true);
      console.log('Fetching random item from:', API_URL);
      const response = await axios.get(`${API_URL}/menu/random`);
      setMenuItems([response.data]);
      setView('random');
      console.log('Random item received:', response.data.name);
    } catch (error) {
      console.error('Error fetching random item:', error);
      Alert.alert('Error', `Failed to fetch random item: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>Category: {item.category}</Text>
      <Text style={styles.itemPrice}>Price: Rs. {item.price}</Text>
      <Text style={[styles.stock, item.inStock ? styles.inStock : styles.outOfStock]}>
        {item.inStock ? 'In Stock' : 'Out of Stock'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>☕ Coffee Shop Menu</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, view === 'full' && styles.activeButton]}
          onPress={fetchFullMenu}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Full Menu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, view === 'random' && styles.activeButton]}
          onPress={fetchRandomItem}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Surprise Me</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#6F4E37" />
          <Text>Loading menu items...</Text>
        </View>
      ) : (
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.menuList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Press "Full Menu" to load items</Text>
              <Text style={styles.emptySubText}>Backend: {API_URL}</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#6F4E37',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDD',
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#6F4E37',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  menuItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemCategory: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginTop: 5,
  },
  stock: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuList: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  emptySubText: {
    fontSize: 12,
    color: '#999',
  },
});