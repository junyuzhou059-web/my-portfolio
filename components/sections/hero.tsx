 "use client"

import { useState } from "react"
import { Mail, Phone, Figma, FileText } from "lucide-react"

const infoTags = ["中山大学本科", "ENFP/ENTJ", "现居广州"]

const workLinks = [
  {
    name: "Figma",
    href: "https://www.figma.com/design/TeUd7oOyk9fEK5eYtpJkNv/arthur_figma%E4%BD%9C%E5%93%81?node-id=10-2&t=OM1N6fdvzjJelmk5-1",
    icon: Figma,
  },
  {
    name: "Notion",
    href: "https://www.notion.so/1d6527f147eb80aaa3c6e44c184ae7df?source=copy_link",
    icon: FileText,
  },
]

const EMAIL = "377598589@qq.com"
const PHONE = "15086815072"

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const handleCopy = (text: string, type: "email" | "phone") => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {})
    }

    if (type === "email") {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1500)
    }

    if (type === "phone") {
      setPhoneCopied(true)
      setTimeout(() => setPhoneCopied(false), 1500)
    }
  }

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Left Column: Large Portrait Photo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <div className="w-[280px] md:w-[320px] lg:w-[340px] h-[420px] md:h-[460px] lg:h-[480px] bg-muted rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/photo.jpg"
              alt="Arthur Zhou"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: All Text Content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left min-w-0 lg:py-4">
          {/* Name - Very Large Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
            周俊宇 | Arthur Zhou
          </h1>

          {/* Role - Muted Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground">
            Product Manager · User Research Explorer
          </p>

          {/* Slogan - Quote Style Highlight */}
          <blockquote className="text-base md:text-lg font-medium text-foreground/80 italic border-l-2 border-foreground/20 pl-4 lg:max-w-md">
            "好奇驱使 · 发现问题 · 总结需求 · 挖掘理论 · 技术应用"
          </blockquote>

          {/* Info Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {infoTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-secondary/60 text-secondary-foreground rounded-lg border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links - Under Tags */}
          <div className="flex flex-col gap-4 pt-2">
            {/* Works */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                作品
              </span>
              <div className="flex gap-2">
                {workLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact - moved below works, copy on click */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  联系方式
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(EMAIL, "email")}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{EMAIL}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(PHONE, "phone")}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-border rounded-lg hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{PHONE}</span>
                  </button>
                </div>
              </div>

              <div className="min-h-[1.25rem] text-xs text-emerald-600 dark:text-emerald-400">
                {(emailCopied || phoneCopied) && "已复制"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
