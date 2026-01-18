import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        <Header />
        <main className="relative">
          <HeroSection />
        </main>
        
        {/* Left side placeholder 1 */}
        <div 
          className="fixed left-0 bottom-0 -translate-x-[10%] hidden xl:block pointer-events-none z-0"
          style={{
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(450px, 32vh, 520px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Left side placeholder 2 */}
        <div 
          className="fixed bottom-0 hidden xl:block pointer-events-none z-0"
          style={{
            left: `calc(clamp(200px, 16vw, 256px) + clamp(var(--gap-base, 32px), var(--gap-vw, 2vw), var(--gap-max, 48px)))`,
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(320px, 24vh, 400px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Left of center placeholder */}
        <div 
          className="fixed bottom-0 hidden xl:block pointer-events-none z-0"
          style={{
            left: `calc((clamp(200px, 16vw, 256px) + clamp(var(--gap-base, 32px), var(--gap-vw, 2vw), var(--gap-max, 48px))) * 2)`,
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(240px, 18vh, 280px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Center placeholder */}
        <div 
          className="fixed left-1/2 bottom-0 -translate-x-1/2 hidden xl:block pointer-events-none z-0"
          style={{
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(200px, 16vh, 240px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Right of center placeholder */}
        <div 
          className="fixed bottom-0 hidden xl:block pointer-events-none z-0"
          style={{
            right: `calc((clamp(200px, 16vw, 256px) + clamp(var(--gap-base, 32px), var(--gap-vw, 2vw), var(--gap-max, 48px))) * 2)`,
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(240px, 18vh, 280px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Right side placeholder 2 */}
        <div 
          className="fixed bottom-0 hidden xl:block pointer-events-none z-0"
          style={{
            right: `calc(clamp(200px, 16vw, 256px) + clamp(var(--gap-base, 32px), var(--gap-vw, 2vw), var(--gap-max, 48px)))`,
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(320px, 24vh, 400px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Right side placeholder 1 */}
        <div 
          className="fixed right-0 bottom-0 translate-x-[10%] hidden xl:block pointer-events-none z-0"
          style={{
            width: 'clamp(200px, 16vw, 256px)',
            height: 'clamp(450px, 32vh, 520px)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-border bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
