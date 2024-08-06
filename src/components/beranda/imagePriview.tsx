'use client'
import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

interface ImagePreviewProps {
  media?: File | null;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  mediaRef: React.RefObject<HTMLInputElement>;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ media, setFieldValue, mediaRef }) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const onRemove = () => {
    setFieldValue('media', null)
    if (mediaRef.current) {
        mediaRef.current.value = ''
    }
  }

  React.useEffect(() => {
    if (media) {
      const objectUrl = URL.createObjectURL(media);
      setImageUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageUrl(null);
    }
  }, [media]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <img
        src={imageUrl}
        className="rounded-xl"
        alt="Preview"
        style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }}
      />
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 bg-black bg-opacity-60 text-xl hover:bg-opacity-45 text-white rounded-full p-1"
        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
      >
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default ImagePreview;
