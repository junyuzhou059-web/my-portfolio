import { Hero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Timeline } from "@/components/sections/timeline"
import { FeaturedWork } from "@/components/sections/featured-work"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <Hero />
        <Welcome />

        <div className="space-y-0 divide-y divide-border">
          <Timeline />
          <FeaturedWork />
        </div>
      </div>

      <Footer />
    </main>
  )
}
