import { useEffect, useState } from "react"
import { personalInfo } from "../data/portfolioData"
import { ArrowRight } from "lucide-react"

export default function Hero() {

  const words = personalInfo.skills

  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout
    const currentWord = words[wordIndex]

    const typingSpeed = 150
    const deletingSpeed = 150

    if (!isDeleting && charIndex === currentWord.length) {
      setIsPaused(true)

      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)

      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed

    timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)))
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)

  }, [charIndex, isDeleting, isPaused, wordIndex, words])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[radial-gradient(circle_at_top,#1b1b3a,#0a0a12)] text-white"
    >
      <div className="w-[90%] max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 text-center md:text-left">

        {/* LEFT */}
        <div className="max-w-[600px]">

          <span className="border border-gray-600 text-[14px] md:text-[16px] px-4 py-2  rounded-md bg-white/5 inline-block mt-6">
            Welcome All In My Portfolio
          </span>

          <h1 className="pt-4 text-3xl md:text-6xl font-bold mt-2 leading-tight min-h-[90px] md:min-h-[140px]">
            Hi! I'm <br />

            <span className="block md:inline">
              {personalInfo.name},
            </span>{" "}

            <span className="text-cyan-400 inline-flex items-center md:whitespace-nowrap">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-5 text-gray-400 leading-relaxed text-base md:text-lg">
            {personalInfo.title} | {personalInfo.location}
          </p>

          <button
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
              window.dispatchEvent(new Event("openContactTab"));
            }}
            className="group inline-flex items-center gap-3 mt-8 md:mt-10 text-base md:text-lg font-semibold transition"
          >
            <span className="group-hover:text-cyan-400 transition">
              Let's Connect
            </span>

            <span className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-gray-400 transition group-hover:translate-x-1 group-hover:border-cyan-400">
              <ArrowRight size={16} />
            </span>
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end items-center w-full">

          <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full p-[5px] bg-gradient-to-br from-cyan-400 to-purple-600 animate-[float_5s_ease-in-out_infinite] hover:scale-105 transition">

            <img
              src={personalInfo.heroImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover object-top"
            />

            <div className="absolute inset-[-15px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent)] -z-10"></div>

          </div>

        </div>

      </div>
    </section>
  )
}