"use client"

import { useState } from "react"
import { Mail, Phone, Figma, FileText } from "lucide-react"

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

export function Footer() {
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
    <footer className="py-16 md:py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Copyright */}
          <div>
            <p className="text-sm text-foreground font-medium mb-1">
              © Arthur Zhou
            </p>
            <p className="text-xs text-muted-foreground italic">
              Curiosity Driven. Always Exploring.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">作品</span>
              <div className="flex gap-2">
                {workLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                    title={link.name}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">联系方式</span>
              <div className="relative flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopy(EMAIL, "email")}
                  className="p-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                  title={EMAIL}
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleCopy(PHONE, "phone")}
                  className="p-2 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                  title={PHONE}
                >
                  <Phone className="w-4 h-4" />
                </button>
                {(emailCopied || phoneCopied) && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs text-white shadow-sm">
                    已复制
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
