import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { size: string } }
) {
  // Get the size from the URL params (default to 150)
  const size = parseInt(params.size, 10) || 150;
  
  // Get query parameters
  const { searchParams } = new URL(request.url);
  const initial = searchParams.get("initial") || "U";
  const bgColor = searchParams.get("bg") || "#4f46e5";
  const textColor = searchParams.get("text") || "#ffffff";
  
  // Create SVG with the initial
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${bgColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${size / 2}px" 
        fill="${textColor}" 
        text-anchor="middle" 
        dominant-baseline="central"
      >
        ${initial}
      </text>
    </svg>
  `;
  
  // Return the SVG as an image
  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
} 