 "use client"

import { Hero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Timeline } from "@/components/sections/timeline"
import { FeaturedWork } from "@/components/sections/featured-work"
import { useEffect, useState } from "react"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Hero />
        <NavigationTabs />
      </div>

      <Footer />
    </main>
  )
}

function NavigationTabs() {
  const [activeTab, setActiveTab] = useState<"home" | "work" | "about">("home")

  return (
    <section className="mt-8 md:mt-12">
      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex gap-4 md:gap-8 text-sm font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className={`relative py-2 px-1 transition-colors ${
              activeTab === "home"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/80"
            }`}
          >
            主页
            {activeTab === "home" && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full bg-foreground" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("work")}
            className={`relative py-2 px-1 transition-colors ${
              activeTab === "work"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/80"
            }`}
          >
            工作＆思考
            {activeTab === "work" && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full bg-foreground" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`relative py-2 px-1 transition-colors ${
              activeTab === "about"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/80"
            }`}
          >
            关于我
            {activeTab === "about" && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full bg-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Tab content */}
      <div className="pt-6 md:pt-8">
        {activeTab === "home" && (
          <div className="space-y-6 md:space-y-8">
            <Welcome />
            <FeaturedWork />
          </div>
        )}

        {activeTab === "work" && (
          <section className="py-8 md:py-12 space-y-12 md:space-y-16">
            <WorkPreviewSection
              title="成果示例"
              linkHref="https://www.figma.com/design/TeUd7oOyk9fEK5eYtpJkNv/arthur_figma%E4%BD%9C%E5%93%81?node-id=10-2&t=OM1N6fdvzjJelmk5-1"
              linkLabel="前往 Figma 查看更多 →"
              imageA="/work-figma-1.jpg"
              imageB="/work-figma-2.jpg"
            />

            <WorkPreviewSection
              title="我的思考"
              linkHref="https://www.notion.so/1d6527f147eb80aaa3c6e44c184ae7df?source=copy_link"
              linkLabel="前往 Notion 查看更多 →"
              imageA="/work-notion-1.jpg"
              imageB="/work-notion-2.jpg"
            />
          </section>
        )}

        {activeTab === "about" && (
          <div className="py-4 md:py-6">
            <Timeline />
          </div>
        )}
      </div>
    </section>
  )
}

type WorkPreviewSectionProps = {
  title: string
  linkHref: string
  linkLabel: string
  imageA: string
  imageB: string
}

function WorkPreviewSection({
  title,
  linkHref,
  linkLabel,
  imageA,
  imageB,
}: WorkPreviewSectionProps) {
  return (
    <section>
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-lg md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
        >
          {linkLabel}
        </a>
      </header>

      <div className="mt-4">
        <ImagePreview imageA={imageA} imageB={imageB} alt={title} />
      </div>
    </section>
  )
}

type ImagePreviewProps = {
  imageA: string
  imageB: string
  alt: string
}

function ImagePreview({ imageA, imageB, alt }: ImagePreviewProps) {
  const [isFrontFirst, setIsFrontFirst] = useState(true)

  // 每 ~3s 自动切换前后卡片位置
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFrontFirst((prev) => !prev)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full aspect-[16/9]">
      {/* 卡片 B */}
      <div
        className="absolute inset-0 rounded-2xl border border-border/60 bg-muted shadow-sm overflow-hidden"
        style={{
          transform: isFrontFirst
            ? "translate(14px, 14px) scale(0.96)"
            : "translate(-14px, -14px) scale(1)",
          transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
          zIndex: isFrontFirst ? 0 : 1,
        }}
      >
        <img src={imageB} alt={alt} className="h-full w-full object-cover" />
      </div>

      {/* 卡片 A */}
      <div
        className="absolute inset-0 rounded-2xl border border-border/60 bg-muted shadow-md overflow-hidden"
        style={{
          transform: isFrontFirst
            ? "translate(-14px, -14px) scale(1)"
            : "translate(14px, 14px) scale(0.96)",
          transition: "transform 0.6s cubic-bezier(.22,.61,.36,1)",
          zIndex: isFrontFirst ? 1 : 0,
        }}
      >
        <img src={imageA} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
