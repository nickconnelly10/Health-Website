import React, { useState, useRef } from 'react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  section: 'home' | 'nicks-journey';
  uploadedAt: Date;
}

interface PhotoManagerProps {
  section: 'home' | 'nicks-journey';
  onPhotosUpdate: (photos: Photo[]) => void;
}

export default function PhotoManager({ section, onPhotosUpdate }: PhotoManagerProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    setIsUploading(true);
    
    try {
      const newPhotos: Photo[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
          alert(`File ${file.name} is not an image.`);
          continue;
        }
        
        // Create preview URL
        const src = URL.createObjectURL(file);
        
        const photo: Photo = {
          id: Date.now().toString() + i,
          src,
          alt: file.name,
          section,
          uploadedAt: new Date()
        };
        
        newPhotos.push(photo);
      }
      
      const updatedPhotos = [...photos, ...newPhotos];
      setPhotos(updatedPhotos);
      onPhotosUpdate(updatedPhotos);
      
    } catch (error) {
      console.error('Error uploading photos:', error);
      alert('Error uploading photos. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removePhoto = (photoId: string) => {
    const updatedPhotos = photos.filter(photo => photo.id !== photoId);
    setPhotos(updatedPhotos);
    onPhotosUpdate(updatedPhotos);
  };

  const updatePhotoCaption = (photoId: string, caption: string) => {
    const updatedPhotos = photos.map(photo => 
      photo.id === photoId ? { ...photo, caption } : photo
    );
    setPhotos(updatedPhotos);
    onPhotosUpdate(updatedPhotos);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Photo Manager - {section === 'home' ? 'Home Page' : 'Nick\'s Journey'}
      </h3>
      
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        
        <div className="text-gray-600">
          <p className="text-lg font-medium mb-2">
            {isUploading ? 'Uploading...' : 'Drop images here or click to upload'}
          </p>
          <p className="text-sm">PNG, JPG, GIF up to 10MB each</p>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Choose Files
        </button>
      </div>
      
      {/* Photo Gallery */}
      {photos.length > 0 && (
        <div className="mt-6">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Uploaded Photos ({photos.length})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Caption Input */}
                <input
                  type="text"
                  placeholder="Add caption..."
                  value={photo.caption || ''}
                  onChange={(e) => updatePhotoCaption(photo.id, e.target.value)}
                  className="w-full mt-2 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                
                {/* Remove Button */}
                <button
                  onClick={() => removePhoto(photo.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Instructions:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Upload high-quality images for the best display</li>
          <li>• Add captions to provide context for your photos</li>
          <li>• Photos will be displayed in the order they were uploaded</li>
          <li>• Remove photos you no longer need</li>
        </ul>
      </div>
    </div>
  );
}
