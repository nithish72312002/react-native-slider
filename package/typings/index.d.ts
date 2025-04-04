import * as React from 'react';
import { FC } from 'react';
import * as ReactNative from 'react-native';
import { ImageURISource } from 'react-native';

type Constructor<T> = new (...args: any[]) => T;

type SliderReferenceType =
  | (React.MutableRefObject<SliderRef> & React.LegacyRef<Slider>)
  | undefined;

export interface SliderPropsAndroid extends ReactNative.ViewProps {
  /**
   * Color of the foreground switch grip.
   */
  thumbTintColor?: string;
}

export interface SliderRef {
  updateValue(value: number): void;
}

export type TrackMarksProps = {
  isTrue: boolean;
  index: number;
  thumbImage?: ImageURISource;
  StepMarker?: FC<MarkerProps> | boolean;
  currentValue: number;
};

export type MarkerProps = {
  stepMarked: boolean;
  currentValue: number;
  index: number;
  min: number;
  max: number;
};

export interface SliderPropsIOS extends ReactNative.ViewProps {
  /**
   * Assigns a maximum track image. Only static images are supported.
   * The leftmost pixel of the image will be stretched to fill the track.
   */
  maximumTrackImage?: ReactNative.ImageURISource;

  /**
   * Assigns a minimum track image. Only static images are supported.
   * The rightmost pixel of the image will be stretched to fill the track.
   */
  minimumTrackImage?: ReactNative.ImageURISource;

  /**
   * Permits tapping on the slider track to set the thumb position.
   * Defaults to false on iOS. No effect on Android or Windows.
   */
  tapToSeek?: boolean;

  /**
   * Sets an image for the thumb. Only static images are supported.
   */
  thumbImage?: ReactNative.ImageURISource;

  /**
   * Assigns a single image for the track. Only static images
   * are supported. The center pixel of the image will be stretched
   * to fill the track.
   */
  trackImage?: ReactNative.ImageURISource;
}

export interface SliderPropsWindows extends ReactNative.ViewProps {
  /**
   * Controls the orientation of the slider, default value is 'false' (horizontal).
   */
  vertical?: boolean;
}

export interface SliderProps
  extends SliderPropsIOS,
    SliderPropsAndroid,
    SliderPropsWindows {
  /**
   * If true the user won't be able to move the slider.
   * Default value is false.
   */
  disabled?: boolean;

  /**
   * The color used for the track to the right of the button.
   * Overrides the default blue gradient image.
   */
  maximumTrackTintColor?: string;

  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue?: number;

  /**
   * The lower limit value of the slider. The user won't be able to slide below this limit.
   */
  lowerLimit?: number;

  /**
   * The upper limit value of the slider. The user won't be able to slide above this limit.
   */
  upperLimit?: number;

  /**
   * The color used for the track to the left of the button.
   * Overrides the default blue gradient image.
   */
  minimumTrackTintColor?: string;

  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue?: number;

  /**
   * Callback that is called when the user picks up the slider.
   * The initial value is passed as an argument to the callback handler.
   */
  onSlidingStart?: (value: number) => void;

  /**
   * Callback called when the user finishes changing the value (e.g. when the slider is released).
   */
  onSlidingComplete?: (value: number) => void;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: number) => void;

  /**
   * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.
   */
  step?: number;

  /**
   * When true, the slider will still display step markers based on the 'step' prop,
   * but will not snap to those values when sliding. This allows for continuous
   * movement while preserving visual indicators.
   * Default value is false.
   */
  disableSnap?: boolean;

  /**
   * Step value to use when disableSnap is true. This determines how smooth the slider movement is.
   * Smaller values provide more continuous movement. Default value is 0.0001.
   */
  continuousStep?: number;

  /**
   * When disableSnap is true, this value determines how close (in units) the final value needs to be to a step
   * for the slider to snap to that step when sliding is complete. For example, if step is 25 and snapThreshold is 5,
   * releasing the slider at value 21 would snap to 25, but releasing at 19 would stay at 19.
   * If not provided, no threshold snapping occurs.
   */
  snapThreshold?: number;

  /**
   * Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.
   */
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>;

  /**
   * Used to locate this view in UI automation tests.
   */
  testID?: string;

  /**
   * Write-only property representing the value of the slider.
   * Can be used to programmatically control the position of the thumb.
   * Entered once at the beginning still acts as an initial value.
   * The value should be between minimumValue and maximumValue,
   * which default to 0 and 1 respectively.
   * Default value is 0.
   *
   * This is not a controlled component, you don't need to update the
   * value during dragging.
   */
  value?: number;

  /**
   * Reverses the direction of the slider.
   */
  inverted?: boolean;

  /**
   * Component to be rendered for each step indicator.
   */
  StepMarker?: FC<MarkerProps>;

  /**
   * 
   */
  renderStepNumber?: boolean;

  /**
   * A string of one or more words to be announced by the screen reader.
   * Otherwise, it will announce the value as a percentage.
   * Requires passing a value to `accessibilityIncrements` to work correctly.
   * Should be a plural word, as singular units will be handled.
   */
  accessibilityUnits?: string;

  /**
   * An array of values that represent the different increments displayed
   * by the slider. All the values passed into this prop must be strings.
   * Requires passing a value to `accessibilityUnits` to work correctly.
   * The number of elements must be the same as `maximumValue`.
   */
  accessibilityIncrements?: Array<string>;

  /**
   * Reference object.
   */
  ref?: SliderReferenceType;
}

/**
 * A component used to select a single value from a range of values.
 */
declare class SliderComponent extends React.Component<SliderProps> {}
declare const SliderBase: Constructor<ReactNative.NativeMethods> &
  typeof SliderComponent;
export default class Slider extends SliderBase {}
export type SliderIOS = Slider;
