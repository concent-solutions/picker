import * as React from 'react';
import {TextStyle, StyleProp} from 'react-native';
import type {ViewPropTypes as ViewProps} from 'deprecated-react-native-prop-types';
import {ItemValue} from './Picker';

export interface PickerIOSItemProps {
  label?: string;
  value?: number | string;
  color?: string;
  testID?: string;
}

declare class PickerIOSItem extends React.Component<PickerIOSItemProps, {}> {}

export interface PickerIOSProps extends ViewProps {
	itemStyle?: StyleProp<TextStyle>;
	style?: StyleProp<TextStyle>;
	onChange?: React.SyntheticEvent<{itemValue: ItemValue, itemIndex: number}>;
	onValueChange?: (itemValue: ItemValue, itemIndex: number) => void;
	selectedValue?: ItemValue;
	testID?: string;
	numberOfLines?: number;
	themeVariant ?: string;
}

declare class PickerIOS extends React.Component<PickerIOSProps, {}> {
  static Item: typeof PickerIOSItem;
}

export {PickerIOS};
