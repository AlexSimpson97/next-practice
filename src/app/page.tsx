"use client"
import { useRef, useState, useEffect } from 'react';
import SectionDivider from '@/src/components/SectionDivider';
import Intro from './intro/page';
import About from './about/page';
import Services from './services/page';
import Careers from './careers/page';
import Community from './community/page';
import Contact from './contact/page';


export default function Home() {
  return (
    <main className={`flex flex-col items-center`}>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Careers />
      <SectionDivider />
      <Community />
      <SectionDivider />
      <Contact />
    </main>
  );
}


// flex flex-col items-center px-[4]