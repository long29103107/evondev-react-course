import { useState } from 'react';
import { uploadFile } from "@uploadcare/upload-client";

const useUploadcareImage = (setValue, getValues, cb = null) => {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState('');
  const [fileId, setFileId] = useState(null);

  if (!setValue || !getValues) return;

  const handleSelectImage = (e) => {    
    const file = e.target.files[0];
    if (!file) return;
    handleUploadImage(file);
  };

  const handleClickImage = (e) => {
    if(fileId) {
      e.preventDefault();
      return;
    }
  };

  const handleUploadImage = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Only image allowed');
      return;
    }

    try {
      const result = await uploadFile(file, {
        publicKey: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY,
        store: 'auto',
        onProgress: (p) => setProgress(Math.round(p * 100)),
      });

    
      setImage(`${import.meta.env.VITE_UPLOADCARE_DOMAIN}/${result.uuid}/`);
      setFileId(result.uuid);
      setValue('image_name', result.uuid);
      cb && cb(result.cdnUrl);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  const handleDeleteImage = async () => {
    if (!fileId) {
      setImage('');
      return;
    }

    // const res = await fetch(`${import.meta.env.VITE_UPLOADCARE_API}/files/${fileId}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Authorization": `Uploadcare.Simple ${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}:${import.meta.env.VITE_UPLOADCARE_SECRET_KEY}`,
    //     "Accept": "application/vnd.uploadcare-v0.7+json"
    //   }
    // });
    // console.log('res', res);

    // if (!res.ok) {
    //   throw new Error('Failed to delete image');
    // }
  
    setImage('');
    setFileId(null);
    setProgress(0);
    cb && cb(null);
  };

  const handleResetUpload = () => {
    setImage('');
    setProgress(0);
    setFileId(null);
  };

  return {
    image,
    setImage,
    fileId,
    progress,
    handleSelectImage,
    handleDeleteImage,
    handleResetUpload,
    handleClickImage,
  };
};

export default useUploadcareImage;
