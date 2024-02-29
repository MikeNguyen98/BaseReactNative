import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'link';
  circle?: boolean;
  size?: 'large' | 'small';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  style,
  variant = 'primary',
  circle = false,
  size = 'large',
  textStyle,
  children,
  ...props
}) => {
  let backgroundColor = '';
  let textColor = '';
  switch (variant) {
    case 'primary':
      backgroundColor = '#2196F3';
      textColor = 'white';
      break;
    case 'secondary':
      backgroundColor = 'gray';
      textColor = 'black';
      break;
    case 'tertiary':
      backgroundColor = 'transparent';
      textColor = 'black';
      break;
    case 'link':
      backgroundColor = 'white';
      textColor = 'primary';
      break;
    default:
      backgroundColor = '#2196F3';
      textColor = 'white';
      break;
  }
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {
          // backgroundColor: Colors[backgroundColor],
          borderRadius: circle ? 200 : 8,
          paddingHorizontal: circle ? 0 : 20,
          paddingVertical: circle ? 0 : size === 'large' ? 16 : 8,
          aspectRatio: circle ? 1 : undefined,
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 0,
          minHeight: 0,
          backgroundColor: backgroundColor,
        },
        style,
      ]}>
      <Text style={[textStyle, {color: textColor}]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default Button;
