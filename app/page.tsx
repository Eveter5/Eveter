"use client"

import AnimationProvider from "@/components/animation-provider"
import VideoCarousel from "@/components/video-carousel"
import VerticalVideoCarousel from "@/components/vertical-video-carousel"
import TypingEffect from "react-typed.ts"
import { InlineWidget } from "react-calendly"
import { useState } from 'react'


// Sample video data
const portfolioVideos = [
  {
    id: "1",
    title: "Entertainment Gaming Video",
    src: "https://www.youtube.com/embed/NS4CXPVQxeM?&mute=1",
  },
  {
    id: "2",
    title: "Entertainment Gaming Video",
    src: "https://www.youtube.com/embed/vI94cWuSmoc?&mute=1",
  },
  {
    id: "3",
    title: "Entertainment Gaming Video",
    src: "https://www.youtube.com/embed/Lm-Hdabn81s?&mute=1",
  },
  {
    id: "4",
    title: "Entertainment Gaming Video",
    src: "https://www.youtube.com/embed/gd9NOwpGoBY?&mute=1",
  },
  {
    id: "5",
    title: "Entertainment Gaming Video",
    src: "https://www.youtube.com/embed/tY3B101xIkg?&mute=1",
  },
]

// Sample vertical video data
const verticalVideos = [
   {
    id: "v1",
    title: "Vertical Reel 1",
    src: "https://www.youtube.com/embed/TEq-Yw1YHMA?&mute=1",
  },
  {
    id: "v2",
    title: "Vertical Reel 2",
    src: "https://www.youtube.com/embed/dG-aA4uMIl4?&mute=1",
  },
  {
    id: "v3",
    title: "Vertical Reel 3",
    src: "https://www.youtube.com/embed/NXjs3g3k89Q?&mute=1",
  },
  {
    id: "v4",
    title: "Vertical Reel 4",
    src: "https://www.youtube.com/embed/OJZAvUrf7v4?&mute=1",
  },
  {
    id: "v5",
    title: "Vertical Reel 5",
    src: "https://www.youtube.com/embed/mdi_xK0VmHo?&mute=1",
  },
];

const marqueeData = [
  {
    name: 'shreder221',
    username: '@shreder221',
    bodyEng: "Probably the best League of Legends video I've ever seen ;)",
    bodyPl: "Chyba najlepiej zrealizowany film z LoL'a jaki widziałem ;)",
    img: 1
  },
  {
    name: 'Derrkz',
    username: '@Derrkz',
    bodyEng: "Great video! I like the editing of this film, I gained a lot of knowledge, I like it, I'm waiting for more",
    bodyPl: "Ekstra film! Podoba mi się montaż tego filmu, dużo wiedzy można zaczerpnąć, daję like i czekam na więcej!",
    img: 2
  },
  {
    name: 'Druneq855',
    username: '@Druneq855',
    bodyEng: "Nice edit, cool to watch",
    bodyPl: "Fajny montaż, spoko się ogląda",
    img: 3
  },
  {
    name: 'MrAvate',
    username: '@MrAvate',
    bodyEng: "Awesome editing. Here's a sub and a like :)",
    bodyPl: "Niesamowity montaż. Leci subik i like",
    img: 4
  },
  {
    name: 'Rambojd5533',
    username: '@Rambojd5533',
    bodyEng: "Amazing editing :thumbsup: ",
    bodyPl: "Bardzo dobry montaż :thumbsup: ",
    img: 5
  },
{
    name: 'michap1575',
    username: '@michap1575',
    bodyEng: "Edit is goated, I see a great potential",
    bodyPl: "montaż goated, widzę duży potencjał",
    img: 6
  },
{
    name: 'NoLucky420',
    username: '@NoLucky420',
    bodyEng: "nice montage ;)",
    bodyPl: "fajny montaż ;)",
    img: 7
  },
{
    name: 'Frostini8872',
    username: '@Frostini8872',
    bodyEng: "The montage with the POV's is amazing",
    bodyPl: "Cudo ten montaż z POV'ami",
    img: 8
  },
{
    name: 'muuuciak7991',
    username: '@muuuciak7991',
    bodyEng: "Superb video, waiting for more",
    bodyPl: "Super film, czekam na więcej",
    img: 9
  },
{
    name: 'FATdejfon',
    username: '@FATdejfon',
    bodyEng: "nice short, kudos to the editor",
    bodyPl: "niezły skrót, pozdro dla montażysty",
    img: 10
  },
{
    name: 'Adriank3758',
    username: '@Adriank3758',
    bodyEng: "Nice editing",
    bodyPl: "Fajny montaż",
    img: 11
  },
{
    name: 'Hegros_',
    username: '@Hegros_',
    bodyEng: "Very good editing",
    bodyPl: "Bardzo dobry montaż",
    img: 12
  }
];

export default function Home() {

  const [language, setLanguage] = useState('eng'); // Default language is English

  return (
    <main>
      <AnimationProvider />
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="text-center w-full hero-text-container">
            <h1>
              <TypingEffect
                strings={["Your GO TO Solution for Social Media growth."]}
                typeSpeed={70}
                backSpeed={50}
                loop={false}
              />
            </h1>
          </div>


            <div className="vsl-container">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Video Sales Letter"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="vsl-video"
              ></iframe>
            </div>


          <div className="text-center w-full hero-text-container">
            <p className="text-center mx-auto">Whether you're a Founder, Coach, or B2B Brand — your video presence is your BRAND. I help you show up powerfully and consistently on YouTube and beyond.</p>
          </div>

          <button
            className="cta-button mb-6"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            }}
          >
            Grow My Channel
          </button>
        </div>
      </section>

      <section className="case-study" id="case-study">
        <h2>CASE STUDY</h2>
        <div className="screenshot-grid">
          {[
            {
              id: 1,
              title: "30 Days to monetization",
              description: "From 0 to 1000 subscribers and earning money from YouTube in just 30 days.",
            },
            {
              id: 2,
              title: "First Video Ever 400+ Subs",
              description:
                "First video ever uploaded on brand new channel got my client 421 subscribers in just 66days.",
            },
          ].map((item) => (
            <div key={item.id} className="screenshot-item-container">

                <div className="screenshot-item">
                  <img
                    src={`ZwyrooScreen${item.id}.jpg?height=1080&width=1920&text=Screenshot${item.id}`}
                    alt={`Case Study Screenshot ${item.id}`}
                    className="screenshot-image"
                  />
                </div>

              <div className="screenshot-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <h2>CLIENT TESTIMONIALS</h2>
        <div className="testimonial-layout">
          <div className="testimonial-video-container">
            <div className="video-glow-wrapper">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/AnltynSxwD8?&autoplay=1"
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="testimonial-video"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="testimonial-content">
            <div className="client-photo-container">
              <img
                src="ZwyroPicture.jpg?height=120&width=120"
                alt="Client"
                className="client-photo"
                width={120}
                height={120}
              />
            </div>
            <div className="testimonial-quote">
              <p>&quot;His communication & editing are great, highly recommend for high quality work&quot;</p>
            </div>
            <div className="client-info">
              <h4>Zwyroo</h4>
              <p>Pro League of Legends player - Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" id="marquee-section">

        <h2>COMMUNITY APPROVED</h2>

        <div className="marquee-wrapper">
           <div className="marquee-container">
            {marqueeData.concat(marqueeData).map((item, index) => (
              <div key={`marquee-1-${index}`} className="marquee-item">
                <img
                  src={`${item.img}.jpg`}
                  alt={item.name}
                  className="marquee-item-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.jpg?height=80&width=80&text=${item.name.charAt(0)}`;
                  }}
                />
                <div className="marquee-item-content">
                  <div className="marquee-item-header">
                    <div className="marquee-item-name">{item.name}</div>
                    <div className="marquee-item-username">{item.username}</div>
                  </div>
                  <div className="marquee-item-body">
                    {language === 'eng' ? item.bodyEng : item.bodyPl}
                  </div>
                </div>
              </div>
            ))}
            {marqueeData.concat(marqueeData).map((item, index) => (
              <div key={`marquee-2-${index}`} className="marquee-item">
                <img
                  src={`${item.img}.jpg`}
                  alt={item.name}
                  className="marquee-item-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.jpg?height=80&width=80&text=${item.name.charAt(0)}`;
                  }}
                />
                <div className="marquee-item-content">
                  <div className="marquee-item-header">
                    <div className="marquee-item-name">{item.name}</div>
                    <div className="marquee-item-username">{item.username}</div>
                  </div>
                  <div className="marquee-item-body">
                    {language === 'eng' ? item.bodyEng : item.bodyPl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-container-duplicate">
            {[...marqueeData.slice(Math.floor(marqueeData.length/2)),
                ...marqueeData.slice(0, Math.floor(marqueeData.length/2)),
                ...marqueeData.slice(Math.floor(marqueeData.length/2)),
                ...marqueeData.slice(0, Math.floor(marqueeData.length/2))].map((item, index) => (
              <div key={`marquee-3-${index}`} className="marquee-item">
                <img
                  src={`${item.img}.jpg`}
                  alt={item.name}
                  className="marquee-item-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.jpg?height=80&width=80&text=${item.name.charAt(0)}`;
                  }}
                />
                <div className="marquee-item-content">
                  <div className="marquee-item-header">
                    <div className="marquee-item-name">{item.name}</div>
                    <div className="marquee-item-username">{item.username}</div>
                  </div>
                  <div className="marquee-item-body">
                    {language === 'eng' ? item.bodyEng : item.bodyPl}
                  </div>
                </div>
              </div>
            ))}
            {marqueeData.concat(marqueeData).map((item, index) => (
              <div key={`marquee-4-${index}`} className="marquee-item">
                <img
                  src={`${item.img}.jpg`}
                  alt={item.name}
                  className="marquee-item-img"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.jpg?height=80&width=80&text=${item.name.charAt(0)}`;
                  }}
                />
                <div className="marquee-item-content">
                  <div className="marquee-item-header">
                    <div className="marquee-item-name">{item.name}</div>
                    <div className="marquee-item-username">{item.username}</div>
                  </div>
                  <div className="marquee-item-body">
                    {language === 'eng' ? item.bodyEng : item.bodyPl}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="language-toggle">
          <button
            className={`language-btn ${language === 'eng' ? 'active' : ''}`}
            onClick={() => setLanguage('eng')}
          >
            ENG
          </button>
          <button
            className={`language-btn ${language === 'pl' ? 'active' : ''}`}
            onClick={() => setLanguage('pl')}
          >
            PL
          </button>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>PORTFOLIO</h2>

        <div className="portfolio-container">
          <h3 className="carousel-title">Long Form</h3>
          <VideoCarousel videos={portfolioVideos} />
        </div>

        <div className="portfolio-container">
          <h3 className="carousel-title">Short Form</h3>
          <VerticalVideoCarousel videos={verticalVideos} />
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>SCHEDULE A CONSULTATION</h2>
          <div className="calendly-container">
            <InlineWidget
              url="https://calendly.com/evetervideobusiness"
              styles={{
                height: '650px',
                width: '100%',
                maxWidth: '800px'
              }}
            />
          </div>
      </section>
    </main>
  )
}

