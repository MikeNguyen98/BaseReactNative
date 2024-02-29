import {BlurView} from '@react-native-community/blur';
import React, {useMemo} from 'react';
import {Platform, StyleSheet, View} from 'react-native';

const BlurredBackground = (props: any) => {
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        backgroundColor: '#000',
        opacity: 0.6,
        flex: 1,
      },
      props.styleCustom,
    ],
    [props.styleCustom],
  );
  return Platform.OS === 'ios' ? (
    <View style={containerStyle}>
      <BlurView blurType="chromeMaterial" style={styles.blurView} />
    </View>
  ) : (
    <View style={containerStyle} />
  );
};

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});

export default BlurredBackground;
