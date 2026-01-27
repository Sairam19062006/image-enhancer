import React, { useRef, useState } from 'react';
import { Upload, FileImage } from 'lucide-react';

const ImageUploader = ({ onImageUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    } else {
      alert('Please upload a valid image file (JPG, PNG).');
    }
  };

  return (
    <div 
      className={`upload-zone ${isDragOver ? 'drag-active' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
          <Upload size={32} color="var(--accent-color)" />
        </div>
        <div>
          <h3 style={{ margin: 0 }}>Click or Drag to Upload</h3>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Supports JPG, PNG, JPEG
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
