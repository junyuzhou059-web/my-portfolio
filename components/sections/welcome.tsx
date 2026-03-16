const aiTools = ["GPT", "Cursor", "V0", "Cloudflare"]

export function Welcome() {
  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-[900px] mx-auto">
        <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Column: Welcome Text */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Welcome
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>欢迎来到我的个人主页。</p>

                <p>
                  这里记录了我的一些思考、经历与探索。
                  <br />
                  我关注用户想法、用户行为、产品功能、产品结构，以及理论如何在现实问题中落地。
                </p>

                <p className="text-foreground/90 font-medium">
                  这个页面本身也是一次小型应用实验：
                </p>

                <p>
                  它由 GPT、Cursor、V0 等 AI 工具辅助生成，并部署在Cloudfare上，链接阿里云购买的域名。
                </p>

                <p>
                  对我来说，产品不仅是设计功能，
                  <br />
                  也是不断发现需求，定义问题，把想法快速变成现实完成目标的过程。
                </p>
              </div>
            </div>

            {/* Right Column: AI Tools */}
            <div className="lg:w-48 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
                  Built with AI
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm font-medium border border-border rounded-full hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground italic text-center leading-relaxed">
              Hope you enjoy the visit.
              <br />
              Wishing you curiosity and a smooth journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
