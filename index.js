// Import a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    // since View is the root, we add flex: 1 to it to prevent scrolling
    // from bouncing back to the top for our ScrollView in AlbumsList.  I
    // did not need to do this but instroctor did, so I guess this issue is
    // just an older version of react-native issue.
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it on the device
AppRegistry.registerComponent('albums', () => App);
