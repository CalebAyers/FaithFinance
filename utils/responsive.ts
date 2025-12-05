import { Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 14/15 - your phone)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

/**
 * Scale value based on screen width
 * Maintains proportions across different device sizes
 */
export const scale = (size: number): number => {
  const scaleRatio = SCREEN_WIDTH / BASE_WIDTH;
  return Math.round(size * scaleRatio);
};

/**
 * Scale value based on screen height
 * Use for vertical spacing/dimensions
 */
export const verticalScale = (size: number): number => {
  const scaleRatio = SCREEN_HEIGHT / BASE_HEIGHT;
  return Math.round(size * scaleRatio);
};

/**
 * Moderate scale - less aggressive scaling
 * Use for fonts and elements that shouldn't scale as much
 * factor: 0 = no scaling, 1 = full scaling
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return Math.round(size + (scale(size) - size) * factor);
};

/**
 * Scale font sizes
 * Uses moderate scaling to prevent fonts from becoming too large/small
 */
export const scaleFont = (size: number): number => {
  return moderateScale(size, 0.4);
};

/**
 * Get responsive dimensions
 */
export const getResponsiveDimensions = () => ({
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  isSmallDevice: SCREEN_WIDTH < 375,
  isMediumDevice: SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414,
  isLargeDevice: SCREEN_WIDTH >= 414,
});

// Export screen dimensions for reference
export { SCREEN_WIDTH, SCREEN_HEIGHT };
