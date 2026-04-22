import { skills } from "../data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Skills() {
  return (
    <section className="bg-[radial-gradient(circle_at_center,#1b1b3a,#0a0a12)] py-20 text-white" id="skills">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-2">
              Technical Stack & Capabilities
          </p>
        </div>

        {/* Categories */}
        {skills.map((category, i) => (
          <div key={i} className="mb-16">

            <h3 className="text-2xl font-semibold mb-6 text-center">
              {category.title}
            </h3>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              initialSlide={Math.floor(category.items.length / 2)}  // 👈 START FROM MIDDLE
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {category.items.map((skill, index) => {
                const radius = 60;
                const circumference = 2 * Math.PI * radius;

                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">

                      <div className="relative w-36 h-36">

                        <svg className="w-full h-full rotate-[-90deg]">
                          <circle
                            cx="72"
                            cy="72"
                            r={radius}
                            stroke="#1f2937"
                            strokeWidth="8"
                            fill="transparent"
                          />

                          <circle
                            cx="72"
                            cy="72"
                            r={radius}
                            stroke={`url(#gradient-${i}-${index})`}
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={
                              circumference -
                              (circumference * skill.level) / 100
                            }
                            strokeLinecap="round"
                          />

                          <defs>
                            <linearGradient id={`gradient-${i}-${index}`}>
                              <stop offset="0%" stopColor="#7c3aed" />
                              <stop offset="100%" stopColor="#4f46e5" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                          {skill.level}%
                        </div>
                      </div>

                      <p className="mt-3 text-center">{skill.name}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
}