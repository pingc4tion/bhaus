import Image from "next/image"

export function PropertyImages() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {/* Top left - Shared Home */}
      <div className="absolute left-0 top-32 -translate-x-1/4" style={{ transform: 'translateX(-25%) rotate(-5deg)' }}>
        <PropertyCard label="Shared Home" image="/minimalist-student-apartment-building-exterior.jpg" />
      </div>

      {/* Mid-left */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/4" style={{ transform: 'translate(-25%, -50%) rotate(-2deg)' }}>
        <PropertyCard label="Long-term" image="/row-of-modern-wooden-houses.jpg" />
      </div>

      {/* Bottom left - only corner visible */}
      <div className="absolute left-32 bottom-20 -translate-x-1/2" style={{ transform: 'translateX(-50%) rotate(-1deg)' }}>
        <PropertyCard label="Student Essential" image="/modern-wooden-townhouse-exterior.jpg" />
      </div>

      {/* Bottom center - Student (larger, matches form width) */}
      <div className="absolute left-1/2 top-[calc(50vh+280px)] -translate-x-1/2">
        <PropertyCard label="Student" image="/classic-a-frame-wooden-cabin-houses.jpg" isCenter />
      </div>

      {/* Mid-right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 translate-x-1/4" style={{ transform: 'translate(25%, -50%) rotate(2deg)' }}>
        <PropertyCard label="Long-term" image="/row-of-modern-wooden-houses.jpg" />
      </div>

      {/* Top right - Modern */}
      <div className="absolute right-0 top-32 translate-x-1/4" style={{ transform: 'translateX(25%) rotate(5deg)' }}>
        <PropertyCard label="Modern" image="/modern-house-with-flat-roof-and-wood-cladding.jpg" />
      </div>
    </div>
  )
}

function PropertyCard({ label, image, isCenter }: { label: string; image: string; isCenter?: boolean }) {
  if (isCenter) {
    return (
      <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-xl">
        <Image src={image || "/placeholder.svg"} alt={label} fill className="object-cover" unoptimized />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            {label}
          </span>
        </div>
      </div>
    )
  }
  
  return (
    <div className="relative w-40 h-56 rounded-2xl overflow-hidden shadow-xl">
      <Image src={image || "/placeholder.svg"} alt={label} fill className="object-cover" unoptimized />
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          {label}
        </span>
      </div>
    </div>
  )
}
