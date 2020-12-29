import React from 'react';
import {View, FlatList, Text, Image} from 'react-native'
import styles from './styles'

import feed from '../../../assets/data/feed'
import Post from '../Post';

const SearchResults = (props) => {

    return(
        <View>
            <FlatList
            data = {feed}
            renderItem={({item}) => <Post post={item}/>}
        />
        </View>
    )
};

export default SearchResults;