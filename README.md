# adjustDiv

**adjustDiv** is a JavaScript function that provides easy and flexible control over responsive behavior, lazy loading, and animations for HTML elements.

## Features

- Responsive width adjustment based on a specified breakpoint
- Responsive font size adjustment with a customizable ratio
- Lazy loading of images using the LazySizes library
- Animations using the animate.css library
- Support for applying animations to child elements
- Automatic adjustment on window resize

## Usage

### Installation

To use **adjustDiv**, include the following script tag in your HTML file:

```html
<script src="adjustDiv.js"></script>
```
  
## Example Usage
```javascript
const myDiv = adjustDiv('.my-div', 'my-class', 768, 1.5, true, true);
myDiv.animate('fadeIn', true);
myDiv.adjustDiv();
```


In the above example, we create an instance of adjustDiv with the following parameters:

- Selector: .my-div - The CSS selector for the target element
- Class Name: my-class - The class name to be applied to the target element
- Breakpoint: 768 - The width breakpoint for responsive behavior
- Font Size Ratio: 1.5 - The ratio for responsive font size adjustment
- Responsive Images: true - Enable responsive behavior for images
- Lazy Loading: true - Enable lazy loading of images
- We then apply the 'fadeIn' animation to the target element and its child elements. Finally, we invoke the adjustDiv function to start the responsive behavior, lazy loading, and animation.

## API

- `setResponsiveWidth()`: Adjusts the width of the target element based on the current window width and parent element width.
- `setResponsiveFontSize(baseFontSize)`: Adjusts the font size of the target element based on the current window width and a base font size.
- `applyLazyLoading()`: Applies lazy loading to the images within the target element using the LazySizes library.
- `animate(animation, applyToChildren)`: Applies an animation to the target element and its child elements. The animation parameter specifies the animation name or 'random' for a random animation. The applyToChildren parameter determines whether the animation should be applied to child elements.
- `adjustDiv()`: Initializes the responsive behavior, lazy loading, and animation. It also attaches the window resize event listener to automatically adjust on window resize.

## Dependencies
- [LazySizes](https://github.com/aFarkas/lazysizes): Lazy loading library for images.
- [animate.css](https://animate.style/): CSS animation library.

## Contributing
Contributions to `adjustDiv` are welcome! If you have any suggestions, improvements, or bug fixes, please create a pull request or open an issue on the GitHub repository.
