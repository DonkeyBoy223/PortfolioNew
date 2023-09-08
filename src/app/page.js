"use client";


import Image from 'next/image'
import './globals.css'
import Navbar from './components/navbar'
import Type from './components/type';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useRef, useState } from 'react';
import Alert from './components/alert';

export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [showAlert, setShowAlert] = useState(false);

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Handle success
        const result = await response.json();
  
        if (result.success) {
          // Show success message and clear the form
          setAlertMessage('Email sent successfully');
          setShowAlert(true);
          clearForm()
          // Clear the form data (assuming you have a function to clear it)
        } else {
          // Handle other success scenarios if needed
          console.error('Error sending email:', result.message);
        }
      } else {
        // Handle error, e.g., show an error message
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleAlertClose = () => {
    // Hide the alert when the close button is clicked
    setShowAlert(false);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const textArray = ["Frontend Developer", "Web Designer", "UI/UX Designer"];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refMain, inViewMain] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject, inViewProject] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject1, inViewProject1] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject2, inViewProject2] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject3, inViewProject3] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject4, inViewProject4] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject5, inViewProject5] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });
  const [refProject6, inViewProject6] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation once when it comes into view
  });

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const animationVariantsLine = {
    hidden: { opacity: 0, width: 0 }, // Start with width at 0
    visible: { opacity: 1, width: '100%' }, // Fully draw the line (width at '100%')
  };

  const animationTransition = {
    duration: 1,
  };
  const animationVariantsText = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move down by 20px
    visible: { opacity: 1, y: 0 }, // Fully visible and at the original position
  };

  const animationTransitionText = {
    duration: 1,
  };
  const animationTransitionTextSmall = {
    duration: 1,
    delay: 0.2,
  };

  return (
    <div class='relative mobile-bg h-screen'>
      {showAlert && <Alert message={alertMessage} onClose={handleAlertClose} />}
      <Navbar />
      <div class='w-full h-screen flex flex-col xl:gap-y-0 gap-y-[40px] xl:flex-row items-center justify-center xl:justify-between relative'>
        <div class='flex justify-center p-6 xl:w-[50vw] xl:pl-[12.5%] flex-col gap-y-[40px] items-center xl:items-start'>
          <div class='header-gradient-item text-white text-[14px] font-semibold px-4 py-1'>
            <Type class='typer'/>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariantsText}
            transition={animationTransitionText}
          >
          <h1 class='md:text-[60px] max-w-[690px] text-[34px] xl:text-left text-center text-white font-bold'>
            Crafting digital
            <br></br>
            <span class='bg-clip-text animated-text text-transparent'>experiences </span>
            for <br></br> the new <br></br> generation
          </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariantsText}
            transition={animationTransitionTextSmall}
          >
          <p class='md:text-[16px] text-[14px] max-w-[480px] xl:text-left text-center font-semibold text-[#8A8A8A]'>
            With a 
            <span class='animated-text'> passion </span>
            for creating visually captivating and user-friendly digital
            experiences, I am a front-end developer and upcoming backend developer.
            Armed with 3 years of professional experience, I am dedicated to
            crafting engaging interfaces and seamless interactions that leave 
            a
            <span class='animated-text'> lasting <br></br> impact </span>
             on users.
          </p>
          </motion.div>
          <div class='flex flex-row items-center xl:ml-[-14px]'>
            <a href='#projects' class='gradient-btn cursor-pointer z-50  transition-all border border-white/0 hover:border-white/50 min-w-[190px] flex text-center flex-row items-center justify-center px-5 py-3 text-white text-[13px] md:text-[16px] font-semibold null'>Portfolio</a>
            <a href='#contact' class='ml-4 text-[#FFFFFF] hover:text-[#00ff66] text=[16px]'>Reach out</a>
          </div>
          <div class='flex flex-row items-center gap-x-4'>
          <a href="mailto:sdoncaster5@gmail.com" class="bg-[#4E4E50] w-[40px] flex flex-col items-center justify-center h-[40px] rounded-full" aria-label="Contact via Email">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-white" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          </a>
          <a href="https://github.com/donkeyboy223" class="bg-[#4E4E50] w-[40px] flex flex-col items-center justify-center h-[40px] rounded-full" aria-label="Visit My GitHub Profile">
            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-white" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          </div>
        </div>
      </div>
      <div id='skills' class='py-[120px] max-w-7xl mx-auto px-6 z-30 relative'>
        <div class='flex flex-row justify-between w-full my-6'>
          <h6 class='text-white text-[40px] md:text-[60px] font-bold'>Skills</h6>
        </div>
        <motion.div
          ref={refMain}
          initial="hidden"
          animate={inViewMain ? 'visible' : 'hidden'}
          variants={animationVariantsLine}
          transition={{ ...animationTransition, delay: 0.2 }} // Adjust the delay for staggered animation
        >
        <div class='w-full h-1 bg-[#4E4E50]'></div>
        </motion.div>
        <div class='flex flex-col px-6 items-center lg:flex-row  justify-between mt-[40px]'>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75 }}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">HTML</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">4 Years Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75 }}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">NodeJS</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">3 Years Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75 }}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">Javascript</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">3 Years Experience</p>
            </motion.div>
          </div>

        </div>

        <div class='flex flex-col px-6 items-center lg:flex-row  justify-between gap-x-[6em] mt-[12px] lg:mt-[6em]'>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75}}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">React</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">2.5 Years Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref4}
              initial="hidden"
              animate={inView4 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75}}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">NextJS</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">9 Months Experience</p>
            </motion.div>
          </div>
          <div class="flex flex-col items-center lg:items-start gap-y-4">
            <motion.div
              ref={ref5}
              initial="hidden"
              animate={inView5 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.75}}
            >
              <h6 class="text-white animated-text font-bold text-[40px] md:text-[60px] text-center">Tailwind</h6>
              <p class="text-[#4E4E50] text-center lg:text-left text-[20px]">9 Months Experience</p>
            </motion.div>
          </div>
        </div>

        <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? 'visible' : 'hidden'}
            variants={animationVariantsLine}
            transition={{ ...animationTransition, delay: 0.2 }}
          >
        <div class='w-full h-1 bg-[#4E4E50] mt-[40px]'></div>
        </motion.div>
        <p class='text-[#4E4E50] text-center font-bold text-[16px] mt-[40px]'>Forever Evolving, Forever Learning</p>
      </div>
      <div id="projects" class="py-[120px] max-w-7xl mx-auto px-6 z-30 relative">
        <div class='flex flex-row justify-between w-full my-6'>
          <h6 class='text-white text-[40px] md:text-[60px] font-bold'>Projects</h6>
        </div>
        <motion.div
            ref={refProject}
            initial="hidden"
            animate={inViewProject ? 'visible' : 'hidden'}
            variants={animationVariantsLine}
            transition={{ ...animationTransition, delay: 0.2 }}
          >
        <div class='w-full h-1 bg-[#4E4E50] '></div>
        </motion.div>
        <div class='flex flex-col lg:gap-y-6 md:gap-y-6 sm:gap-y-6 lg:flex-row justify-between w-full my-12'>
          <div class='flex flex-col items-start gap-y-2 mb-12'>
            <motion.div
              ref={refProject1}
              initial="hidden"
              animate={inViewProject1 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://www.visionbot.cx" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet='/assets/vision.webp' type="image/webp"></source>
                    <img src="/assets/vision.png" alt="Project1 " loading='lazy' />
                  </picture>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>Vision</p>
              <div class="flex flex-row gap-x-4 pt-1 pb-2">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">React</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66] ">Web Animations</div>
              </div>
            </motion.div>
          </div>

          <div class='flex flex-col items-start gap-y-2'>
            <motion.div
              ref={refProject2}
              initial="hidden"
              animate={inViewProject2 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://github.com/DonkeyBoy223/EcommerceStore/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/ecommerce.png" alt="Project2" loading='lazy' />
                  <source srcSet='/assets/ecommerce.webp' type="image/webp"></source>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>Ecommerce</p>
              <div class="flex flex-row gap-x-4 pt-1">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">React</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">NodeJS</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">MySQL</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">SimpleUI</div>
              </div>
            </motion.div>
          </div>

        </div>
        <div class='flex flex-col lg:gap-y-6 md:gap-y-6 sm:gap-y-6 lg:flex-row justify-between w-full my-12'>
          <div class='flex flex-col items-start gap-y-2 mb-12'>
            <motion.div
              ref={refProject3}
              initial="hidden"
              animate={inViewProject3 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://reflect.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/reflect.png" alt="Project1" loading='lazy' />
                  <source srcSet='/assets/reflect.webp' type="image/webp"></source>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>Reflect</p>
              <div class="flex flex-row gap-x-4 pt-1 pb-2">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">UI/UX</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66] ">Web Animations</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66] ">Figma</div>
              </div>
            </motion.div>
          </div>

          <div class='flex flex-col items-start gap-y-2'>
            <motion.div
              ref={refProject4}
              initial="hidden"
              animate={inViewProject4 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://www.spearproxies.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/spear.png" alt="Project2" loading='lazy' />
                  <source srcSet='/assets/spear.webp' type="image/webp"></source>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>SpearProxies</p>
              <div class="flex flex-row gap-x-4 pt-1">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">React</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">Web Animations</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">Figma</div>
              </div>
            </motion.div>
          </div>
          

        </div>
        <div class='flex flex-col lg:gap-y-6 md:gap-y-6 sm:gap-y-6 lg:flex-row justify-between w-full my-12'>
          <div class='flex flex-col items-start gap-y-2 mb-12'>
            <motion.div
              ref={refProject5}
              initial="hidden"
              animate={inViewProject5 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://dashboard.lemonclub.io/dashboard#static" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/lemon.png" alt="Project1" loading='lazy' />
                  <source srcSet='/assets/lemon.webp' type="image/webp"></source>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>LemonClub</p>
              <div class="flex flex-row gap-x-4 pt-1 pb-2">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">React</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66] ">Figma</div>
              </div>
            </motion.div>
          </div>

          <div class='flex flex-col items-start gap-y-2'>
            <motion.div
              ref={refProject6}
              initial="hidden"
              animate={inViewProject6 ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ ...animationTransition, delay: 0.2 }}
            >
              <div class="p-0 animated-bg">
                <a href="https://www.plutoproxies.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/pluto.png" alt="Project2" loading='lazy' />
                  <source srcSet='/assets/pluto.webp' type="image/webp"></source>
                </a>
              </div>
              <p class='text-[14px] font-bold text-[#A6ACBB] pt-1'>PlutoProxies</p>
              <div class="flex flex-row gap-x-4 pt-1">
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">React</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">UI/UX</div>
                <div class="bg-[#4E4E50]/20 text-[#4E4E50] text-[14px] px-2 py-1 rounded-md flex flex-col items-center hover:text-[#00ff66]">Figma</div>
              </div>
            </motion.div>
          </div>
          

        </div>
        <motion.div
            ref={refProject}
            initial="hidden"
            animate={inViewProject ? 'visible' : 'hidden'}
            variants={animationVariantsLine}
            transition={{ ...animationTransition, delay: 0.2 }}
          >
        <div class='w-full h-1 bg-[#4E4E50] '></div>
        </motion.div>
        <p class='text-[#4E4E50] text-center font-bold text-[16px] mt-[40px]'>Along with countless others...</p>
        <p class='text-[#00ff66] text-center font-bold text-[16px] mt-[40px]'>Join the list.</p>

      </div>
      <div class='w-screen py-24 bg-[#141414]' id="contact">
        <h6 class='text-white font-bold mb-6 text-[40px] md:text-[60px] text-center mx-auto'>Want to work together?</h6>
        <h6 class='text-white font-bold mb-6 animated-text text-[40px] md:text-[60px] text-center mx-auto'>Lets Talk!</h6>
        <div id='contact' class='flex flex-col lg:gap-0 gap-6 lg:flex-row w-full justify-between max-w-7xl mx-auto px-6 pb-12'>
          <div class="flex flex-col items-start">
            <div class="flex flex-col items-start gap-y-2 mb-6">
              <h6 class="text-white animated-text text-[20px] font-bold">Get In Touch.</h6>
              <p class="text-white text-[14px] max-w-[450px] text-left">Reach out to me if you need any help, have questions; our you are ready to start building your<span class="animated-text font-bold"> Dream Project.</span></p></div>
              <div class="flex flex-col items-start gap-y-2 mb-6">
                <h6 class="text-white animated-text text-[12px] leading-loose">Mail</h6>
                <p class="text-white text-[14px] max-w-[450px] text-left">sdoncaster5@gmail.com</p></div>
                <div class="flex flex-col items-start gap-y-2 mb-6">
                  <h6 class="text-white animated-text text-[12px] leading-loose">Github</h6>
                  <p class="text-white text-[14px] max-w-[450px] text-left">https://github.com/DonkeyBoy223</p>
                </div>
                <div class="flex flex-col items-start gap-y-2 mb-6"><h6 class="text-white animated-text text-[12px] leading-loose">Discord</h6>
                  <p class="text-white text-[14px] max-w-[450px] text-left">donks.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} ref={formRef} class="bg-[#1a1a1c] p-6 min-w-[350px] sm:min-w-[450px] rounded-[24px]" action="" method='POST'>
            <h6 class="text-white text-[20px] mb-4">Contact Form</h6>
            <div class="flex flex-col items-start mb-6">
            <label class="text-white/60 text-[12px] mb-1" for="Name">Your Name</label>
            <input value={formData.name} onChange={handleChange} required type="text" id="name" name="name" placeholder="eg Sam Doncaster" class="bg-transparent border text-white/60 border-white/10 rounded-lg p-3 px-4 w-full"></input></div>
            <div class="flex flex-col items-start mb-6">
            <label class="text-white/60 text-[12px] mb-1" for="Email">Your Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required name="email" placeholder="eg sdoncaster5@gmail.com" class="bg-transparent border text-white/60 border-white/10 rounded-lg p-3 px-4 w-full"></input></div>
            <div class="flex flex-col items-start mb-6">
            <label class="text-white/60 text-[12px] mb-1" for="Message">Message</label>
            <textarea class="bg-transparent border text-white/60 border-white/10 rounded-lg p-3 px-4 w-full" placeholder="How can I help you?" value={formData.message} onChange={handleChange} required id="message" name="message"></textarea></div>
            <a rel="nofollow" class="gradient-btn cursor-pointer z-50  transition-all border border-white/0 hover:border-white/50 min-w-[190px] flex text-center flex-row items-center justify-center px-5 py-3 text-white text-[13px] md:text-[16px] font-semibold null"><button type='submit'>Send Message</button></a>
          </form>
        </div>
        <div class='w-full h-1 bg-[#4E4E50] my-[40px]'></div>
        <footer class='footer p-10 px-6 max-w-[1560px] mx-auto  text-base-content'>
          <div>
            <div class='flex flex-row items-center gap-x-1 md:gap-x-2'>
              <p rel="nofollow" class='font-bold md:block hidden brand-text  text-[16px] md:text-[20px] text-[#4E4E50]'>Sam Doncaster</p>
            </div>
          </div>
          <div>
            <span class='footer-title text-[16px] font-bold text-[#8A8A8A] uppercase'>Helpful Links</span>
            <a href="#skills" class='hover:text-[#00ff66] text-white text-[16px] font-semibold'>Skills</a>
            <a href="#projects" class='hover:text-[#00ff66] text-white text-[16px] font-semibold'>Projects</a>
          </div>
          <div>
            <span class="footer-title text-[16px] font-bold text-[#8A8A8A] uppercase">Contact Links</span>
            <a href="#contact" class="hover:text-[#00ff66] text-white text-[16px] font-semibold">Contact</a>
            <p rel="nofollow" class="hover:text-[#00ff66] text-white text-[16px] font-semibold">Twitter</p>
          </div>
          <div>
            <span class="footer-title text-[16px] font-bold text-[#8A8A8A] uppercase">Support</span>
            <p rel="nofollow" class="hover:text-[#00ff66] text-white text-[16px] font-semibold">Contact</p>
            <a href='mailto:sdoncaster5@gmail.com' class="hover:text-[#00ff66] text-[#00ff66] text-[16px] font-semibold hover:cursor-pointer">Email<span>
              <svg class="inline-block ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47144 7.45143C2.2052 7.48809 2 7.71969 2 7.99993C2 8.30564 2.24421 8.55347 2.54545 8.55347H12.1333L8.6698 12.0542L8.61686 12.1162C8.45797 12.3326 8.47495 12.6401 8.6682 12.8371C8.88077 13.0537 9.22613 13.0544 9.43959 12.8387L13.8318 8.3997C13.858 8.37427 13.8816 8.34622 13.9024 8.31597C14.0511 8.0998 14.0301 7.79995 13.8396 7.60737L9.43955 3.16129L9.37826 3.10782C9.16439 2.9475 8.8614 2.96603 8.66817 3.16297C8.45561 3.37961 8.45636 3.7301 8.66983 3.9458L12.1342 7.44638L2.54545 7.44638L2.47144 7.45143Z" fill="#ff83be"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47144 7.45143C2.2052 7.48809 2 7.71969 2 7.99993C2 8.30564 2.24421 8.55347 2.54545 8.55347H12.1333L8.6698 12.0542L8.61686 12.1162C8.45797 12.3326 8.47495 12.6401 8.6682 12.8371C8.88077 13.0537 9.22613 13.0544 9.43959 12.8387L13.8318 8.3997C13.858 8.37427 13.8816 8.34622 13.9024 8.31597C14.0511 8.0998 14.0301 7.79995 13.8396 7.60737L9.43955 3.16129L9.37826 3.10782C9.16439 2.9475 8.8614 2.96603 8.66817 3.16297C8.45561 3.37961 8.45636 3.7301 8.66983 3.9458L12.1342 7.44638L2.54545 7.44638L2.47144 7.45143Z" fill="url(#paint0_linear_399_2846)"></path>
                <defs><linearGradient id="paint0_linear_399_2846" x1="2" y1="13" x2="14.7636" y2="4.09411" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00ff66"></stop><stop offset="1" stop-color="#008c45"></stop>
                  </linearGradient></defs></svg>
                  </span>
                  </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
