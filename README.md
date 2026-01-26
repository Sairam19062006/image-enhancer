# Image Editor

A simple yet powerful Python-based image enhancement tool that automatically processes and enhances images in bulk.

## Features

- **Batch Processing**: Automatically processes all images in a specified directory
- **Image Sharpening**: Applies sharpening filter to improve image clarity
- **Contrast Enhancement**: Increases contrast by 20% for more vivid images
- **Format Support**: Handles JPG, PNG, and JPEG formats
- **Auto-conversion**: Converts images to RGB color mode for consistent processing
- **Organized Output**: Saves enhanced images to a separate directory with clear naming

## Prerequisites

Before running this project, make sure you have Python installed along with the required dependencies:

```bash
pip install Pillow
```

## Project Structure

```
img_editor/
├── img_editor.py          # Main script
├── images/                # Input folder (place your original images here)
├── enhancedimages/        # Output folder (auto-created, contains processed images)
└── README.md              # Project documentation
```

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/img_editor.git
cd img_editor
```

2. Install the required dependencies:
```bash
pip install Pillow
```

3. Create the input directory and add your images:
```bash
mkdir -p images
# Add your images to the images/ folder
```

## Usage

1. Place your images (JPG, PNG, or JPEG) in the `images/` directory

2. Run the script:
```bash
python img_editor.py
```

3. Find your enhanced images in the `enhancedimages/` directory with `_enhanced.jpg` suffix

## How It Works

The script performs the following operations on each image:

1. **Reads** all image files from the `images/` directory
2. **Converts** images to RGB color mode
3. **Applies** a sharpening filter to enhance edge definition
4. **Increases** contrast by 20% (factor of 1.2)
5. **Saves** the processed images with `_enhanced.jpg` naming convention

## Example

**Before:**
```
images/photo.jpg
```

**After:**
```
enhancedimages/photo_enhanced.jpg
```

The enhanced image will have improved sharpness and contrast while maintaining the original's quality.

## Customization

You can customize the enhancement parameters by modifying the following variables in `img_editor.py`:

- **Contrast Factor**: Change `factor = 1.2` (1.0 = original, >1.0 = more contrast)
- **Input Path**: Modify `path = './images'`
- **Output Path**: Modify `pathto = './enhancedimages'`
- **Additional Filters**: Add more PIL ImageFilter options (BLUR, DETAIL, EDGE_ENHANCE, etc.)

## Dependencies

- **Python 3.x**
- **Pillow (PIL)**: Image processing library

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the functionality.

## Author

Created as part of a Python automation project.

## Acknowledgments

- Built with [Pillow](https://python-pillow.org/) - The friendly PIL fork
