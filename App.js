import React from 'react';
import { 
  View,
  StyleSheet } from 'react-native';
import MenuList from './screens/home/MenuList';

const App = () => {
  return (
    <View style={styles.container}>
          <View style={styles.menuList}>
            <MenuList/>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  menuList: {
    flex: 1,
  },
});

export default App;
