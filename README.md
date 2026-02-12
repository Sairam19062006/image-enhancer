# Full Stack Image Editor

A powerful web-based image enhancement tool featuring a React frontend and Flask backend. This application allows users to upload images, apply enhancements (sharpening, contrast adjustment), and download the processed results.

## Features

- **Frontend**: Modern React interface built with Vite and Tailwind CSS (via Lucide React).
- **Backend**: Robust Flask server handling image processing with Pillow.
- **Image Processing**:
    - Automatic sharpening.
    - Adjustable contrast enhancement.
    - Format conversion to RGB/JPEG.
- **User Interface**:
    - Drag-and-drop image upload.
    - Real-time preview.
    - Customizable enhancement settings.

## Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules / Standard CSS
- **Icons**: Lucide React
- **HTTP Client**: Native Fetch API

### Backend
- **Framework**: Flask
- **Image Processing**: Pillow (PIL Fork)
- **CORS**: Flask-CORS

## Prerequisites

- **Python**: 3.8 or higher
- **Node.js**: 16.0 or higher
- **npm** (usually comes with Node.js)

## Project Structure

```
projects/img_editor/
├── backend/               # Flask server and image processing logic
│   ├── app.py             # Main application entry point
│   ├── requirements.txt   # Python dependencies
│   ├── uploads/           # Temporary storage for uploaded images
│   └── processed/         # Temporary storage for processed images
├── frontend/              # React frontend application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Node.js dependencies
│   └── vite.config.js     # Vite configuration
└── README.md              # This file
```

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python app.py
   ```
   The backend will start on `http://localhost:5000`.

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will usually start on `http://localhost:5173`.

## Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and go to the frontend URL (e.g., `http://localhost:5173`).
3. Click "Upload Image" or drag and drop an image file.
4. Adjust the "Contrast Factor" if desired.
5. Click "Process Image".
6. Once processed, the enhanced image will automatically prompt for download.

## API Documentation

### `POST /process`

Processes an uploaded image with the specified parameters.

- **URL**: `/process`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Form Data**:
    - `image`: The image file to process (File).
    - `contrast`: Contrast enhancement factor (Float, default: 1.2).
- **Response**: Returns the processed image as a file attachment.

## Development

- **Backend**: The `app.py` file contains the route definitions and image processing logic. Modified images are saved temporarily in `backend/processed`.
- **Frontend**: The React app is structured with components in `src/components`. `App.jsx` handles the main state and layout.

## License

This project is open source and available under the MIT License.
