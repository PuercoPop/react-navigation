import React from 'react';
import {
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


function BottomBarIcon(title) {
  return (
    <TabNavigator.Item
      // https://facebook.github.io/react/docs/lists-and-keys.html#keys
      key={title}
      title={title}
      renderIcon={() => <Image source={{ uri: 'https://commons.wikimedia.org/wiki/File:Run.svg' }} />}
    />
  );
}

function BottomBar(_props) {
  const buttonTitles = ['Featured', 'Categories', 'Top Charts', 'Favorites', 'Purchased'];
  return (
    <TabNavigator>
      {buttonTitles.map(BottomBarIcon)}
    </TabNavigator>
  );
}

export default BottomBar;
