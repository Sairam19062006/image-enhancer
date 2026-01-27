import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ControlPanel from './components/ControlPanel';
import ImagePreview from './components/ImagePreview';
import { Camera } from 'lucide-react';
import './index.css';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [originalImageFile, setOriginalImageFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [processedBlob, setProcessedBlob] = useState(null);
  const [contrast, setContrast] = useState(1.2);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (file) => {
    setOriginalImageFile(file);
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setProcessedBlob(null);
  };

  const handleProcess = async () => {
    if (!originalImageFile) return;

    setIsProcessing(true);
    const formData = new FormData();
    formData.append('image', originalImageFile);
    formData.append('contrast', contrast);

    try {
      const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Processing failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
      setProcessedBlob(blob);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedBlob) {
      const url = window.URL.createObjectURL(processedBlob);
      const link = document.createElement('a');
      link.href = url;
      const filename = originalImageFile ? `enhanced_${originalImageFile.name}` : 'enhanced_image.jpg';
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };

  return (
    <div className="container">
      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', background: 'var(--accent-color)', borderRadius: '1rem', display: 'flex' }}>
            <Camera size={28} color="white" />
          </div>
          <div>
            <h1>Luminary</h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>AI-Powered Image Enhancement</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <aside>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="panel">
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>

            <ControlPanel
              contrast={contrast}
              setContrast={setContrast}
              onProcess={handleProcess}
              onDownload={handleDownload}
              isProcessing={isProcessing}
              hasImage={!!originalImage}
              hasProcessedImage={!!processedImage}
            />
          </div>
        </aside>

        <section className="panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ImagePreview
            originalImage={originalImage}
            processedImage={processedImage}
            isLoading={isProcessing}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
