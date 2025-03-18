import { useSetDocuments, useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';
import { getFirstPhoto } from "@/lib/photo-utils";

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
  const { client } = useVeltClient();
  const { setDocuments } = useSetDocuments();
  const rootPhoto = getFirstPhoto();

  // Initialize the document. Document == Photo.
  useEffect(() => {
    if (setDocuments && rootPhoto) {
      console.log('setting documents', rootPhoto);
      setDocuments([
        {
          id: "photo-1",
        },
      ], {
        folderId: 'photo-gallery-folder',
        allDocuments: true,
      });
    }
  }, [setDocuments, rootPhoto]);

  return null;
}
