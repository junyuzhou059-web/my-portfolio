import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const works = [
  {
    title: "用户研究方法体系",
    description: "构建定性+定量的用户分析模型",
    tag: "Research",
  },
  {
    title: "需求-产品结构模型",
    description: "探索用户需求从 Need 到 Want 的形成过程，并寻求产品迭代、破局的方向、策略",
    tag: "Framework",
  },
  {
    title: "AI产品工作流",
    description: "应用AI重塑产品工作流，提效并挖掘AI机遇",
    tag: "Experiment",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-8">
        Featured Work
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {works.map((work) => (
          <Card
            key={work.title}
            className="group border-border hover:border-foreground/50 transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {work.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="font-semibold mb-1.5 group-hover:text-foreground/80 transition-colors">
                {work.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {work.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
