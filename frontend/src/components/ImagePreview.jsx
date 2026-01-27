import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ImagePreview = ({
    originalImage,
    processedImage,
    isLoading
}) => {
    const [showOriginal, setShowOriginal] = React.useState(false);

    if (!originalImage) {
        return (
            <div className="preview-container" style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>No image selected</p>
                </div>
            </div>
        );
    }

    const currentImage = showOriginal ? originalImage : (processedImage || originalImage);
    const isShowingProcessed = !showOriginal && processedImage;

    return (
        <div className="preview-container">
            <img
                src={currentImage}
                alt="Preview"
                className="preview-image"
            />

            {isLoading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}

            <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                backdropFilter: 'blur(4px)',
                border: '1px solid var(--glass-border)'
            }}>
                <button
                    className="toggle-view"
                    onMouseDown={() => setShowOriginal(true)}
                    onMouseUp={() => setShowOriginal(false)}
                    onMouseLeave={() => setShowOriginal(false)}
                    onTouchStart={() => setShowOriginal(true)}
                    onTouchEnd={() => setShowOriginal(false)}
                    style={{
                        background: 'transparent',
                        padding: '0.25rem',
                        fontSize: '0.8rem',
                        color: 'white'
                    }}
                >
                    <Eye size={16} style={{ marginRight: '0.5rem' }} /> Hold to see Original
                </button>
            </div>

            {isShowingProcessed && (
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-color)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    Enhanced
                </div>
            )}
        </div>
    );
};

export default ImagePreview;
