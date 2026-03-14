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
    <section className="py-12 md:py-20 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Photo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] bg-muted rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/photo.jpg"
              alt="Arthur Zhou"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 flex flex-col text-center lg:text-left min-w-0 lg:py-4 space-y-6">
          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-[28px] md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              周俊宇 | Arthur Zhou
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Product Manager · User Research Explorer
            </p>
          </div>

          {/* Slogan */}
          <blockquote className="text-sm md:text-base text-foreground/70 italic border-l-2 border-foreground/15 pl-4 lg:max-w-md mx-auto lg:mx-0">
            "好奇驱使 · 发现问题 · 总结需求 · 挖掘理论 · 技术应用"
          </blockquote>

          {/* Tags */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              标签
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {infoTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs bg-secondary/60 text-secondary-foreground rounded-lg border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio section */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              作品
            </p>
            <div className="flex flex-col gap-3">
              {workLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">查看</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              联系方式
            </p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleCopy(EMAIL, "email")}
                className="flex h-11 w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-sm font-medium text-left hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">邮箱</span>
                    <span className="text-xs text-muted-foreground">{EMAIL}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {emailCopied ? "已复制" : "复制"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy(PHONE, "phone")}
                className="flex h-11 w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-sm font-medium text-left hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">电话</span>
                    <span className="text-xs text-muted-foreground">{PHONE}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {phoneCopied ? "已复制" : "复制"}
                </span>
              </button>
            </div>

            <div className="min-h-[1.25rem] text-[11px] text-emerald-600 dark:text-emerald-400">
              {(emailCopied || phoneCopied) && "已复制到剪贴板"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
