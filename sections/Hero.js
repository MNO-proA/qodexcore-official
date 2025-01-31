import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogoWithoutCaption, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogoWithoutCaption title='odexcore' caption='Q' />
          <h1 className='hero-title'>Innovation In Business</h1>
          

          <div className='sub-heading'>
          <span>.</span>
            <TitleSm title='Software' /> <span>.</span>
            <TitleSm title='AI' /> <span>.</span>
            <TitleSm title='Digital Marketing' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Explore the possibilities of AI-powered software and cutting-edge technologies.' />
            <p>The Future of Software, Today.</p>
          </div>
          <div className='hero-content grid-4'>
             {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
