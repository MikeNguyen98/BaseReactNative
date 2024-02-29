import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
import {Colors} from '../colors/colors';
const ToastCustom = (props: any) => {
  const toastConfig = {
    success: (rest: any) => (
      <SuccessToast
        {...rest}
        style={{
          borderLeftWidth: 0,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 12,
          gap: 8,
        }}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '500',
          color: Colors.textWhite,
        }}
        // renderLeadingIcon={() => (
        // <Image
        //   source={ImageResources.tick_circle_2}
        //   style={{width: 24, height: 24}}
        // />
        // )}
      />
    ),
    error: (rest: any) => (
      <ErrorToast
        {...rest}
        style={{
          borderLeftWidth: 0,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          minHeight: 50,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '500',
        }}
        // renderLeadingIcon={() => (
        //   <Image
        //     source={ImageResources.danger}
        //     style={{width: 24, height: 24}}
        //   />
        // )}
        text1Props={{
          numberOfLines: 4,
        }}
      />
    ),
    info: (rest: any) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftWidth: 0,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '500',
        }}
        // renderLeadingIcon={() => (
        //   <Image
        //     source={ImageResources.tooltip_circle}
        //     style={{width: 24, height: 24}}
        //   />
        // )}
      />
    ),
    warn: (rest: any) => (
      <BaseToast
        {...rest}
        style={{
          backgroundColor: '#0E1118',
          borderLeftWidth: 0,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '500',
        }}
        // renderLeadingIcon={() => (
        //   <Image
        //     source={ImageResources.info_circle}
        //     style={{width: 24, height: 24}}
        //   />
        // )}
      />
    ),
  };
  return <Toast config={toastConfig} {...props} />;
};
export default ToastCustom;
