import React, { useRef, useState } from 'react';
import {View, Text, SectionList, TouchableOpacity, StyleSheet} from 'react-native';
import test from '../../model/test';
import OneCard from '../../components/OneCard';
import option from '../../model/option';
import { ScrollView } from 'react-native';
import COLORS from '../../model/colors';

const MenuList = () => {

    let mylist = useRef(null);

    const handleClick = (index) => {
        console.log(index);
        mylist.current.scrollToLocation({animated:true, sectionIndex:index-1, itemIndex: 1, vewPosition: 0});
    };

    function renderMenuTypes(){
        return (
            <View style={styles.container_category}>
                <ScrollView
                    showsHorizontalScrollIndicator={false} 
                    horizontal={true}>
                        <View style={styles.categroyList}>
                        { option.map((item, id) => {
                            return (
                                <TouchableOpacity 
                                     key={item.id}
                                     activeOpacity={0.8} onPress={(key) => {handleClick(item.id)}}>  
                                    <View style={styles.initialBtn}>
                                    <Text style={styles.title}>{item.type}</Text>
                                    </View>
                                </TouchableOpacity>
                            ) }
                        )
                        }
                        </View>
                </ScrollView>
            </View>
        );
     }
    
    const renderItem = ({item}) => {
        return (
            <OneCard
                itemData={item}
            />
        )
    }
    return (
        <View style={styles.container}>
            <SectionList
                ref = {mylist}
                sections = {test}
                keyExtractor={item => item.id}
                ListHeaderComponent= {
                    <View>
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, index } }) => (
                    <Text style={styles.header}>{title} {index}</Text>
                    )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1, 
    },
    header: {
        marginLeft: 14,
        fontWeight: 'bold',
        fontSize: 16,
    },

    container_category: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    categroyList: {
        flex: 1, 
        flexDirection: 'row',
        padding: 7,
        marginVertical: 5,
    },
    title: {color: COLORS.white, fontWeight: 'bold', fontSize: 12},

  initialBtn: {
    backgroundColor: 'grey',
    width: 70,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    width: 70,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default MenuList;
