from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from PIL import Image, ImageFilter, ImageEnhance
import os
import io

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = './uploads'
PROCESSED_FOLDER = './processed'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

@app.route('/process', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Open image
        img = Image.open(file.stream)
        img = img.convert('RGB')
        
        # Apply default processing (as per original script)
        # 1. Sharpen
        edit = img.filter(ImageFilter.SHARPEN)
        
        # 2. Contrast
        factor = float(request.form.get('contrast', 1.2)) # Allow customization, default to 1.2
        enhancer = ImageEnhance.Contrast(edit)
        edit = enhancer.enhance(factor)
        
        # Save processed image to buffer
        img_io = io.BytesIO()
        edit.save(img_io, 'JPEG', quality=95)
        img_io.seek(0)
        
        return send_file(img_io, mimetype='image/jpeg', as_attachment=True, download_name=f"enhanced_{file.filename}")

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
