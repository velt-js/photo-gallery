"use client"

import PhotoGallery from "@/components/photo-gallery"
import { VeltCollaboration } from "@/components/velt/VeltCollaboration"
import { VeltProvider } from "@veltdev/react"
export default function Home() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltCollaboration />
      <main className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
        <PhotoGallery />
      </main>
    </VeltProvider>
  )
}

