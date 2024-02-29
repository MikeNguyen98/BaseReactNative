import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import BlurredBackground from '../blurredBackground/BlurredBackground';

const LoadingScreen = () => {
  return (
    <Modal transparent={true} visible={true}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <BlurredBackground />
        <ActivityIndicator />
      </View>
    </Modal>
  );
};

export default LoadingScreen;
