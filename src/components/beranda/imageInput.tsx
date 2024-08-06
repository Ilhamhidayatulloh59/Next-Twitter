'use client'
import React, { useRef } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { IconMenu } from './icon';

interface ImageInputProps {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    mediaRef: React.RefObject<HTMLInputElement>;
}

const ImageInput: React.FC<ImageInputProps> = ({ setFieldValue, mediaRef }) => {
  const handleClick = () => {
    if (mediaRef.current) {
        mediaRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        setFieldValue('media', file)
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={mediaRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div onClick={handleClick}>
        <IconMenu Icon={CiImageOn} />
      </div>
    </div>
  );
};

export default ImageInput;
