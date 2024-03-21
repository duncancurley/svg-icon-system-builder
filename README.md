# SVG to React Icons Converter

This module provides a utility to convert SVG files to React components representing icons. It utilizes `@svgr/core` library to perform the conversion. The converted components can be used within React applications to render SVG icons.

## Usage

1. **Installation**: Before using this utility, ensure you have installed the required dependencies by running:

    ```bash
    npm install @svgr/core glob
    ```

2. **Input Directory**: Place your SVG files in the `src/icons` directory within your project. Each SVG file will be converted into a React component.

3. **Output Directory**: The converted React components will be generated in the `dist/icons` directory.

4. **Executing the Converter**:

   ```javascript
   const { execute } = require('./svg-to-react-icons-converter');

   execute();
   ```

   This will convert all SVG files in the `src/icons` directory and generate corresponding React components in the `dist/icons` directory.

## Configuration

You can customize the behavior of the converter by modifying the `execute` function in the `svg-to-react-icons-converter.js` file:

- **Icons Source Directory**: Adjust the `iconsSourceDir` variable to specify the directory containing your SVG files.

- **Icons Output Directory**: Modify the `iconsOutputDir` variable to specify the directory where the generated React components will be saved.

- **Additional Configuration**: You can customize the SVG to React component conversion process by passing options to the `svgr` function.

## Example

Suppose you have the following SVG file named `heart.svg` in the `src/icons` directory:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>
```

Executing the converter will generate the following React component in the `dist/icons` directory:

```javascript
// heart.js
import * as React from 'react';

function SvgHeart(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export default SvgHeart;
```

Now, you can import and use the `SvgHeart` component in your React application to render the heart icon.
