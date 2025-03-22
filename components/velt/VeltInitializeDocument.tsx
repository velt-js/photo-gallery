import { useSetDocuments, useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';
import { getPhotos } from "@/lib/photo-utils";

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
  const { setDocuments } = useSetDocuments();
  const photos = getPhotos(30);

  // Initialize the document. Document == Photo.
  useEffect(() => {
    if (setDocuments && photos.length > 0) {
      console.log('setting documents', photos);
      setDocuments(
        photos.map(photo => ({ id: photo.id })),
        {
          folderId: 'photo-gallery-folder',
        }
      );
    }
  }, [setDocuments, photos]);

  return null;
}
