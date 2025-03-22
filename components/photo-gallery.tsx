"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import PhotoDetail from "@/components/photo-detail"
import { getPhotos } from "@/lib/photo-utils"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { VeltCommentBubble } from "@veltdev/react"
import { VeltCommentTool } from "@veltdev/react"

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const photos = getPhotos(30)

  return (
    <>
      {/* [VELT] Use data-velt-document-id attribute to set boundary for the document. This is needed because you are rendering multiple documents in the DOM. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            data-velt-document-id={photo.id}
            className="aspect-square relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedPhoto(index)}
          >
            {/* [VELT] Set the DOM ID as the photo ID to bind the comments to the photo */}
            <div
                id={photo.id} 
                className="absolute bottom-2 right-2 z-10"
              >
                {/* [VELT] Comment tool and bubble */}
                <VeltCommentTool targetElementId={photo.id} />
                <VeltCommentBubble targetElementId={photo.id} />
              </div>
              <Image
                src={photo.url || "/placeholder.svg"}
                alt={`Photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                className="object-cover"
                priority={index < 6}
              />
            </div>
        ))}
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-6xl w-[calc(100vw-32px)] p-0 h-[calc(100vh-64px)] overflow-hidden rounded-lg">
          <VisuallyHidden>
            <DialogTitle>{selectedPhoto !== null ? photos[selectedPhoto]?.title || 'Photo Detail' : 'Photo Detail'}</DialogTitle>
            <DialogDescription>View and interact with this photo</DialogDescription>
          </VisuallyHidden>
          {selectedPhoto !== null && (
            <PhotoDetail
              photo={photos[selectedPhoto]}
              onNext={() => setSelectedPhoto((prev) => (prev === photos.length - 1 ? 0 : (prev || 0) + 1))}
              onPrevious={() => setSelectedPhoto((prev) => (prev === 0 ? photos.length - 1 : (prev || 0) - 1))}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

