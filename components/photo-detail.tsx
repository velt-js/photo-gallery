"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MessageSquare, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import type { Photo } from "@/lib/photo-utils"
import { VeltInlineCommentsSection } from "@veltdev/react"

interface PhotoDetailProps {
  photo: Photo
  onNext: () => void
  onPrevious: () => void
}

interface Comment {
  id: string
  author: string
  avatar: string
  text: string
  timestamp: string
}

export default function PhotoDetail({ photo, onNext, onPrevious }: PhotoDetailProps) {

  return (
    <div data-velt-document-id={photo.id} className="flex flex-col md:flex-row h-full">
      {/* Photo View */}
      <div className="relative flex-1 bg-black flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={photo.url || "/placeholder.svg"}
            alt={photo.title || "Photo"}
            fill
            priority
            className="object-contain"
            crossOrigin="anonymous"
          />

          {/* Photo Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            {photo.title && <h2 className="text-xl font-medium">{photo.title}</h2>}
            <div className="flex items-center gap-4 mt-1 text-sm">
              {photo.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{photo.date}</span>
                </div>
              )}
              {photo.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{photo.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
          onClick={onNext}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Comments Panel */}
      <div data-id={photo.id} className="w-full md:w-96 h-full bg-white flex flex-col">
        <div className="border-b py-3 px-4">
          <div className="flex items-center gap-2 font-medium">
            <MessageSquare className="h-5 w-5" />
            <span>Comments</span>
          </div>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto h-full">
          <VeltInlineCommentsSection shadowDom={false} multiThread={false} targetElementId={photo.id} composerPosition="bottom" />
        </div>
      </div>
    </div>
  )
}

