import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    year: "2002",
    title: "起点",
    description: "重庆小镇出生。",
    note: "世界很小，但好奇心很大。",
  },
  {
    year: "2020",
    title: "校理科状元 → 核工程",
    description: "高考以学校理科应届状元毕业。进入中山大学中法核工程与技术学院。",
    note: "迷茫，开始意识到：擅长解决问题，但不知道自己真正想解决什么问题",
  },
  {
    year: "2021",
    title: "转向社科与商业",
    description: "对社会科学与管理产生兴趣。转专业至中山大学旅游学院。",
    highlights: ["创业", "商业模式", "用户需求"],
    note: "接触需求、行为、产品、营销等产品全周期相关理论",
  },
  {
    year: "2024",
    title: "找到方向：产品",
    description: "确定未来方向：产品经理。获得第一份产品实习机会，开始将理论应用到实际产品问题中。",
    highlights: ["结构化思维拆解产品", "理论解释用户行为", "实验验证产品假设"],
    note: "顿悟，理解第一性原理，首次将理论应用于需求分析、产品设计、产品实验",
  },
  {
    year: "2025",
    title: "成为产品经理",
    description: "获得第一份正式产品经理工作。",
    highlights: ["C端产品", "电商系统", "中台系统", "用户研究"],
    note: "乘AI之风以目标/问题串联起理论，丰富方法论",
  },
  {
    year: "later",
    title: "保持创业的心继续前行",
    description: "深耕互联网+AI产品、攻读MBA、尝试创业、攻读哲学博士",
    highlights: ["深耕", "创业", "学习"],
    note: "创造更多价值之余探索世界，理解生命",
  },
]

export function Timeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-12">
          Journey Timeline
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-3 bottom-3 w-px bg-border" />
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative flex gap-6 md:gap-8">
                {/* Year marker */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold">{item.year}</span>
                  </div>
                </div>
                
                {/* Content card */}
                <Card className="flex-1 border-border hover:border-foreground/30 transition-colors">
                  <CardContent className="p-5 md:p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    
                    {item.highlights && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {item.note && (
                      <p className="text-sm italic text-foreground/70 border-l-2 border-foreground/20 pl-3">
                        {item.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
