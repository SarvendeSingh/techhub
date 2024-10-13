import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import img1 from '../assets/seo.webp';
import img2 from '../assets/cloud.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FcAdvertising } from "react-icons/fc";
import { MdEvent } from "react-icons/md";
import { FcOnlineSupport } from "react-icons/fc";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { SiConsul } from "react-icons/si";
import { CiCloudSun } from "react-icons/ci";
import { TbNetwork } from "react-icons/tb";
import { GiCyberEye } from "react-icons/gi";
import img0 from '../assets/itcunsult.webp';

const Services = () => {
  return (
   <>
     <div >
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={3000} showThumbs={false}>
      <div>
          <img src={img0} alt="item" />
          <p className='legend'>IT Consulting</p>
        </div>
        <div>
          <img src={img1} alt="item" />
          <p className='legend'>Seo</p>
        </div>
        <div>
          <img src={img2} alt="item" />
          <p className='legend'>Cloud Computing Services</p>
        </div>
      </Carousel>
    </div>
    <div className='pad80 service-point'>
      <div className='des'>
      <p>
        In the early days of digital marketing, our agency was conceptualized to bridge the digital knowledge gap between SMEs and large corporates. Today, we are a full-service agency, thanks to the seamless integration of cutting-edge technology with creative design, all driven by valuable human insights.
      </p>
      <p>
      Our unique approach focuses on collaborative responsiveness, fostered by strategic partnerships with domain experts, making us a one-stop solution provider for all communication needs. Our long-standing relationships with clients are a testament to our excellence, mutual trust, and a shared commitment to their growth journey.
      </p>
      </div>

    <h3>Our Services</h3>
     <div className='service-pointer'>
      
      <div className='service-point-inner'>
          <p>
          Advertising

          </p>
          <div>
          <FcAdvertising />

          </div>
        </div>
        <div className='service-point-inner'>
        <p>
        SEO

        </p>
        <div>
        <MdEvent />


        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        Online Reputation Management

        </p>
        <div>
        <FcOnlineSupport />


        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        UI/UX
        </p>
        <div>
        <SiInteractiondesignfoundation />


        </div>
      </div>

      <div className='service-point-inner'>
        <p>
        Managed IT Services
        </p>
        <div>
        <MdManageAccounts />

        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        IT Consulting
        </p>
        <div>
        <SiConsul />

        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        Cloud Computing Services
        </p>
        <div>
        <CiCloudSun />

        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        Network and Infrastructure Services
        </p>
        <div>
        <TbNetwork />

        </div>
      </div>
      <div className='service-point-inner'>
        <p>
        Cybersecurity Services
        </p>
        <div>
        <GiCyberEye />

        </div>
      </div>
     </div>
    </div>
   </>
  )
}

export default Services


