import { useState } from "react"
import { motion } from "framer-motion"
import {
  Database,
  Globe,
  Cpu,
  Terminal,
  ArrowUpRight,
  Code,
  Layers,
  Calendar,
  ChevronRight,
  PenTool,
  BookOpen,
  Languages,
  Activity,
  Mail,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function App() {
  const [copied, setCopied] = useState(false)
  const contactEmail = "loodbool@naver.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const threeHighlights = [
    {
      title: "데이터베이스 기반 비즈니스 애플리케이션 구축",
      description:
        "MS SQL Server(T-SQL), VB.NET, C#, C++/MFC 등 다양한 개발 환경을 활용한 비즈니스 애플리케이션 구축에 전문성을 가지고 있습니다.",
      skills: ["MS SQL Server(T-SQL)", "VB.NET", "C#", "C++/MFC"],
      icon: Database,
    },
    {
      title: "웹 시스템 구축",
      description:
        "HTML, CSS, JavaScript, Python 등을 활용한 웹 시스템 및 웹 애플리케이션을 안정적으로 구축합니다.",
      skills: ["JavaScript", "Python", "HTML/CSS", "웹 시스템"],
      icon: Globe,
    },
    {
      title: "맞춤형 자동화 도구 구축",
      description:
        "Google Apps Script, Google Sheets 연동 유틸리티 및 맞춤형 자동화 도구를 제작하여 업무 흐름을 효율화합니다.",
      skills: ["Google Apps Script", "Google Sheets", "자동화 유틸리티"],
      icon: Cpu,
    },
  ]

  const journeyItems = [
    {
      title: "프리랜서 IT 소프트웨어 개발자 및 프로그래머 활동",
      description:
        "데이터베이스 기반 비즈니스 애플리케이션, 웹 시스템, 맞춤형 자동화 도구 구축에 전문성을 가지고 활동해 왔습니다.",
      icon: Code,
    },
    {
      title: "맞춤형 뉴스 모니터링 시스템 구축",
      description:
        "서울 남산체 폰트 스타일링과 Google News RSS를 연동해 매일 자동으로 뉴스를 수집하고 이메일 알림을 보내는 웹 유틸리티를 구축했습니다.",
      icon: Layers,
    },
    {
      title: "가족 일정 및 가계부 웹 애플리케이션 개발",
      description:
        "Google Apps Script, HTML, CSS, JavaScript, Google Sheets를 연동하여 다중 사용자 가족 캘린더와 가계부 웹 애플리케이션을 직접 개발 중입니다.",
      icon: Calendar,
    },
    {
      title: "최신 AI 개발 도구 탐색 및 개발 환경 적용",
      description:
        "Cursor, Claude Code, 바이브 코딩(Vibe Coding) 프레임워크, Google AI Studio 등 최신 AI 에이전트 및 개발 환경을 적극적으로 탐색하고 적용하고 있습니다.",
      icon: Terminal,
    },
  ]

  const commaSeparatedSkills =
    "VB.NET, C#, MS SQL Server(T-SQL), Google Apps Script, JavaScript, Python, HTML/CSS, C++/MFC, Cursor, Claude Code, 바이브 코딩(Vibe Coding) 프레임워크, Google AI Studio"

  const skillBadges = [
    "VB.NET",
    "C#",
    "MS SQL Server(T-SQL)",
    "Google Apps Script",
    "JavaScript",
    "Python",
    "HTML/CSS",
    "C++/MFC",
    "Cursor",
    "Claude Code",
    "바이브 코딩(Vibe Coding) 프레임워크",
    "Google AI Studio",
  ]

  const hobbyItems = [
    {
      title: "필기구 및 만년필",
      description:
        "아스바인(Asvine) P36 만년필과 슈미트(#6) 닙, 파이롯트(Pilot) 이로우스시 딥펜 등을 수집 및 커스텀하며 닙 연구를 즐깁니다.",
      tags: ["아스바인(Asvine) P36", "슈미트(#6) 닙", "파이롯트(Pilot) 딥펜", "닙 커스텀 연구"],
      icon: PenTool,
    },
    {
      title: "문학 및 독서",
      description:
        "밀리의 서재를 통해 마종하, 공광규, 복효근, 정호승, 이문재 시인의 시와 한국 현대문학을 깊이 있게 향유합니다.",
      tags: ["밀리의 서재", "한국 현대문학", "현대시 향유"],
      icon: BookOpen,
    },
    {
      title: "어학 학습",
      description:
        "듀오링고, 언어 팩터(Language Reactor), 넷플릭스 자막을 활용해 중국어(병음, 어휘)와 스페인어를 꾸준히 학습합니다.",
      tags: ["중국어(병음·어휘)", "스페인어", "듀오링고", "Language Reactor"],
      icon: Languages,
    },
    {
      title: "러닝",
      description:
        "초중급 5K/10K 레이스를 목표로 심박수 존을 체계적으로 관리하며 러닝 트레이닝을 진행합니다.",
      tags: ["5K / 10K 트레이닝", "심박수 존 관리", "체계적 트레이닝"],
      icon: Activity,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#d4d4d8] font-sans antialiased overflow-x-hidden selection:bg-[#a3e635]/20 selection:text-[#a3e635]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0d0f12]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635]" />
            <span className="font-bold tracking-tight text-white text-sm sm:text-base">
              소프트웨어 개발자
            </span>
          </div>
          <nav className="flex items-center gap-1.5 sm:gap-4 text-xs sm:text-sm">
            <a
              href="#showcase"
              className="text-zinc-400 hover:text-[#a3e635] transition-colors px-1.5 sm:px-2 py-1"
            >
              보여 줄 것
            </a>
            <a
              href="#journey"
              className="text-zinc-400 hover:text-[#a3e635] transition-colors px-1.5 sm:px-2 py-1"
            >
              걸어온 길
            </a>
            <a
              href="#skills"
              className="text-zinc-400 hover:text-[#a3e635] transition-colors px-1.5 sm:px-2 py-1"
            >
              할 수 있는 것
            </a>
            <a
              href="#interests"
              className="text-zinc-400 hover:text-[#a3e635] transition-colors px-1.5 sm:px-2 py-1"
            >
              관심사 및 취미
            </a>
            <a
              href="#contact"
              className="text-[#a3e635] hover:underline transition-colors px-1.5 sm:px-2 py-1 font-medium"
            >
              연락처
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative">
        {/* ======================================================== */}
        {/* 가) 맨 위 한 줄 소개 (Hero Section)                     */}
        {/* ======================================================== */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <AnimatedBackground />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge
                variant="default"
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase"
              >
                소프트웨어 개발자 & 프로그래머
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[-0.035em] leading-[1.25] sm:leading-[1.18] break-keep mb-8"
            >
              데이터베이스 기반 애플리케이션과
              <br className="hidden sm:inline" />
              <span className="text-[#a3e635]"> 웹 시스템 · 맞춤형 자동화 도구</span> 구축
            </motion.h1>

            {/* 가) 맨 위 한 줄 소개 — 제가 어떤 사람인지 한 문장으로 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mb-10"
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-[#14171d]/90 border border-[#a3e635]/25 shadow-[0_0_25px_rgba(163,230,53,0.06)]">
                <p className="text-base sm:text-xl text-zinc-200 leading-relaxed font-normal break-keep">
                  데이터베이스 기반 비즈니스 애플리케이션, 웹 시스템, 맞춤형 자동화 도구 구축에 전문성을 가지고 있는 프리랜서 IT 소프트웨어 개발자이자 프로그래머입니다.
                </p>
              </div>
            </motion.div>

            {/* Quick action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="gap-2">
                <a href="#showcase">
                  보여 줄 것 세 가지
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#contact">
                  연락처 확인
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-white/[0.08]" />
        </div>

        {/* ======================================================== */}
        {/* 나) 보여 줄 것 세 가지 — 제가 할 수 있는 일을 세 덩어리로 */}
        {/* ======================================================== */}
        <section id="showcase" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 sm:mb-20 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3 text-xs tracking-wider">
                나) 전문 영역
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-4 break-keep">
                보여 줄 것 세 가지
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl break-keep">
                데이터베이스, 웹 시스템, 맞춤형 자동화 도구 구축에 관한 세 가지 핵심 실무 역량입니다.
              </p>
            </motion.div>

            {/* 3 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {threeHighlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                  >
                    <Card className="h-full flex flex-col justify-between hover:border-[#a3e635]/40 transition-colors duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-4">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-[#a3e635] tracking-wider mb-1">
                          0{index + 1}
                        </span>
                        <CardTitle className="text-lg sm:text-xl break-keep">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="pt-2 text-sm text-zinc-400 leading-relaxed break-keep">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-[11px] px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-white/[0.08]" />
        </div>

        {/* ======================================================== */}
        {/* 다) 걸어온 길 — 시기 순서대로 네다섯 줄                    */}
        {/* ======================================================== */}
        <section id="journey" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 sm:mb-20 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3 text-xs tracking-wider">
                다) 활동 기록
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-4 break-keep">
                걸어온 길
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 break-keep">
                개발 활동과 최근 프로젝트를 시기 순서대로 정리한 네 줄의 기록입니다.
              </p>
            </motion.div>

            {/* Timeline List (네 줄) */}
            <div className="relative border-l border-white/[0.1] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
              {journeyItems.map((item, index) => {
                const IconComp = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing timeline node */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#14171d] border border-[#a3e635] flex items-center justify-center text-[#a3e635] group-hover:shadow-[0_0_10px_#a3e635] transition-shadow">
                      <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    </div>

                    <Card className="hover:border-[#a3e635]/30 transition-all">
                      <CardHeader className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComp className="w-4 h-4 text-[#a3e635]" />
                          <span className="text-xs font-mono text-[#a3e635]">
                            단계 0{index + 1}
                          </span>
                        </div>
                        <CardTitle className="text-base sm:text-lg text-white font-bold break-keep">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm text-zinc-400 pt-1 leading-relaxed break-keep">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-white/[0.08]" />
        </div>

        {/* ======================================================== */}
        {/* 라) 할 수 있는 것 — 잘하는 것을 쉼표로 나열                 */}
        {/* ======================================================== */}
        <section id="skills" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 sm:mb-20 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3 text-xs tracking-wider">
                라) 기술 환경
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-4 break-keep">
                할 수 있는 것
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 break-keep">
                실제 프로젝트와 시스템 구축에 활용하고 있는 기술 및 도구입니다.
              </p>
            </motion.div>

            {/* Comma-separated block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Comma-separated text Card */}
              <Card className="border border-white/[0.08] bg-[#14171d]">
                <CardHeader className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    <span className="text-xs font-medium text-[#a3e635] tracking-wider uppercase">
                      기술 목록 (쉼표 나열)
                    </span>
                  </div>
                  <CardTitle className="text-sm sm:text-base font-mono text-zinc-200 leading-relaxed break-keep font-normal">
                    {commaSeparatedSkills}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0">
                  <Separator className="bg-white/[0.06] mb-6" />
                  <div className="flex flex-wrap gap-2">
                    {skillBadges.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                        className="text-xs sm:text-sm py-1.5 px-3 bg-[#181d24] text-zinc-200 border-white/[0.08] hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-white/[0.08]" />
        </div>

        {/* ======================================================== */}
        {/* 마) 주요 관심사 및 취미 — 추가 항목 소개                     */}
        {/* ======================================================== */}
        <section id="interests" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="mb-14 sm:mb-20 text-center sm:text-left"
            >
              <Badge variant="outline" className="mb-3 text-xs tracking-wider">
                마) 라이프스타일
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-4 break-keep">
                주요 관심사 및 취미
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl break-keep">
                개발 외 일상 속에서 깊이 있게 몰입하고 향유하는 관심사와 활동입니다.
              </p>
            </motion.div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {hobbyItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col justify-between hover:border-[#a3e635]/40 transition-colors duration-300">
                      <CardHeader className="p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono text-[#a3e635] tracking-wider">
                            취미 0{index + 1}
                          </span>
                        </div>
                        <CardTitle className="text-lg sm:text-xl break-keep">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="pt-2 text-sm text-zinc-300 leading-relaxed break-keep">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 pt-0">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-[11px] px-2.5 py-0.5 bg-white/[0.04] text-zinc-300 border-white/[0.08]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="bg-white/[0.08]" />
        </div>

        {/* ======================================================== */}
        {/* 연락처 섹션 (Contact)                                    */}
        {/* ======================================================== */}
        <section id="contact" className="py-24 sm:py-32 md:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-4 text-xs tracking-wider">
                문의 및 연락처
              </Badge>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-6 break-keep">
                연락처
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mb-10 max-w-xl mx-auto break-keep">
                프로젝트 협업, 시스템 구축 및 개발 관련 문의는 아래 이메일로 편하게 연락 주시기 바랍니다.
              </p>

              {/* Email Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#14171d] border border-white/[0.1] hover:border-[#a3e635]/40 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.4)]">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
                  <Mail className="w-7 h-7" />
                </div>
                
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-mono">
                  EMAIL ADDRESS
                </p>
                <div className="text-xl sm:text-3xl font-mono font-bold text-white mb-8 tracking-tight">
                  {contactEmail}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a href={`mailto:${contactEmail}`}>
                      <Mail className="w-4 h-4" />
                      이메일 보내기
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleCopyEmail}
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#a3e635]" />
                        <span>복사 완료!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>주소 복사</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#0b0d10] py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="break-keep">
              프리랜서 IT 소프트웨어 개발자 소개 페이지
            </p>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-zinc-400 hover:text-[#a3e635] transition-colors font-mono"
            >
              {contactEmail}
            </a>
          </div>
          <a
            href="#"
            className="text-zinc-400 hover:text-[#a3e635] transition-colors"
          >
            맨 위로 이동 ↑
          </a>
        </div>
      </footer>
    </div>
  )
}
