import React, { useState } from 'react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  section: 'home' | 'nicks-journey';
  uploadedAt: Date;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  columns?: 2 | 3 | 4;
  showCaptions?: boolean;
}

export default function PhotoGallery({ 
  photos, 
  title, 
  columns = 3, 
  showCaptions = true 
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (photos.length === 0) {
    return null;
  }

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          {title}
        </h3>
      )}
      
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            
            {showCaptions && photo.caption && (
              <p className="mt-2 text-sm text-gray-600 text-center">
                {photo.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {selectedPhoto.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <p className="text-center">{selectedPhoto.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
