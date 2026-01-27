import React from 'react';
import { Sliders, Download, RefreshCw, Zap } from 'lucide-react';

const ControlPanel = ({
    contrast,
    setContrast,
    onProcess,
    onDownload,
    isProcessing,
    hasImage,
    hasProcessedImage
}) => {
    return (
        <div className="panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Sliders className="text-accent" />
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Adjustments</h2>
            </div>

            <div className="control-group">
                <label htmlFor="contrast">Contrast: {contrast}</label>
                <input
                    type="range"
                    id="contrast"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={contrast}
                    onChange={(e) => setContrast(parseFloat(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    <span>Low</span>
                    <span>High</span>
                </div>
            </div>

            <div className="control-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={18} color="var(--accent-color)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sharpen is applied automatically</span>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <button
                    onClick={onProcess}
                    disabled={!hasImage || isProcessing}
                    style={{ justifyContent: 'center' }}
                >
                    {isProcessing ? <RefreshCw className="animate-spin" /> : <Zap />}
                    {isProcessing ? 'Processing...' : 'Enhance Image'}
                </button>

                {hasProcessedImage && (
                    <button
                        onClick={onDownload}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid var(--accent-color)',
                            color: 'var(--accent-color)',
                            justifyContent: 'center'
                        }}
                    >
                        <Download /> Download Result
                    </button>
                )}
            </div>
        </div>
    );
};

export default ControlPanel;
