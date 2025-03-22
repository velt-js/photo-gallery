export interface Photo {
  id: string
  url: string
  width: number
  height: number
  title?: string
  date?: string
  location?: string
  folderId?: string
}

// Sample image collection from Unsplash
const sampleImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460627390041-532a28402358?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?w=800&auto=format&fit=crop",
]

// Sample locations for the photos
const locations = [
  "Yosemite National Park",
  "Grand Canyon",
  "Lake Tahoe",
  "Yellowstone National Park",
  "Zion National Park",
  "Glacier National Park",
  "Olympic National Park",
  "Banff National Park",
  "Antelope Canyon",
  "Redwood National Park",
  "Arches National Park",
  "Mount Rainier",
  "Big Sur",
  "Bryce Canyon",
  "Rocky Mountain National Park",
  "Sequoia National Park",
  "Joshua Tree National Park",
  "Great Smoky Mountains",
  "Monument Valley",
  "Grand Teton National Park",
  "Acadia National Park",
  "Crater Lake",
  "Death Valley",
  "Shenandoah Valley",
  "Denali National Park",
]

// Sample titles for the photos
const titles = [
  "Sunset over the mountains",
  "Morning mist on the lake",
  "Autumn colors",
  "Winter wonderland",
  "Spring blossoms",
  "Summer adventure",
  "Reflections in the water",
  "Starry night",
  "Golden hour",
  "Foggy forest",
  "Majestic peaks",
  "Tranquil waters",
  "Vibrant landscape",
  "Serene wilderness",
  "Dramatic skies",
  "Hidden waterfall",
  "Ancient forest",
  "Desert bloom",
  "Mountain stream",
  "Coastal sunrise",
  "Enchanted pathway",
  "Valley vista",
  "Crystal clear waters",
  "Rocky shores",
  "Endless horizon",
]

// Store the generated photos in memory
let cachedPhotos: Photo[] | null = null;

export function generatePhotos(count: number): Photo[] {
  const photos: Photo[] = []

  for (let i = 0; i < count; i++) {
    // Get a random image from our sample collection
    // If we run out of samples, we'll use placeholders
    const imageUrl =
      i < sampleImages.length ? sampleImages[i] : `/placeholder.svg?height=800&width=800&text=Photo+${i + 1}`

    // Generate random dimensions for variety
    const width = 800
    const height = 800

    // Generate a random date within the last 2 years
    const randomDaysAgo = Math.floor(Math.random() * 730) // 2 years in days
    const photoDate = new Date()
    photoDate.setDate(photoDate.getDate() - randomDaysAgo)

    // Get a random title and location
    const titleIndex = Math.floor(Math.random() * titles.length)
    const locationIndex = Math.floor(Math.random() * locations.length)

    photos.push({
      id: `photo-${i + 1}`,
      url: imageUrl,
      width,
      height,
      title: titles[titleIndex % titles.length] + (i > titles.length ? ` ${Math.floor(i / titles.length) + 1}` : ""),
      date: photoDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      location: locations[locationIndex % locations.length],
      folderId: `photo-gallery-folder`,
    })
  }

  return photos
}

// Function to get photos, generating them once if needed
export function getPhotos(count: number = 100): Photo[] {
  if (!cachedPhotos) {
    cachedPhotos = generatePhotos(count);
  }
  return cachedPhotos;
}

// Function to get just the first photo from the cache
export function getFirstPhoto(): Photo {
  const photos = getPhotos(100);
  return photos[0];
}

