import Image from "next/image";

import { Inter, Martian_Mono, Xanh_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const martian_mono = Martian_Mono({weight: ["300"], subsets: ["latin"]});

const xanh_mono = Xanh_Mono({weight: ["400"], subsets: ["latin"]});

export default function Home() {
  return (
    <div className="flex">
      {/* <main className="grid grid-cols-3"> */}
      <div className="w-[1000px] mx-auto">
        <div className="mx-auto flex flex-col mt-8 z-0" style={inter.style}>
        <div className="font-bold text-[40px]" >O-DB.STUDIO</div>
        <div className="uppercase text-[4rem] leading-none mt-8 " style={xanh_mono.style}> Australian internet experience design & webmaster practice</div>
        <div className="*:my-5 mx-auto text-lg font-light mt-10 " style={inter.style}>
          <p>O-DB Studio ("the Studio") of Perth, WA, is a internet design and technology studio building products for businesses and teams. We specialise in coding, desing, branding, and marketing. We are dedicated to helping you develop, launch, and manage your projects.</p>
          <p>By partnering with the Studio you avoid the process of recruiting in-house developement or design teams. We provide the flexibility to work on projects embedding with you, your team, your company or on a project-by-project basis. </p>
          <p>At the Studio, we believe in harnessing design processes to create a better internet experience for everyone. Our approach to design combines learning through experiementation, understanding complex systems, and embracing simplicity. While continuously seeking knowledge and learning, we develop a deep understanding of the world and the internet that shapes it. This understanding is essential for creating meaningful, impactful designs that leave lasting results.</p>
          <p>To develop a great internet experience, we recognise the interconnectedness of people the internet and the importance of creative adaptable and cohesive systems that give indiciduals engaging with the internet a sense of place. We strive to strip away the unncecessary and focus on the necessary to create designs which are both functional and beautiful. It's not simply about aesthetics or makg things pretty. it's about creating experiences that fill a purpose with clarity. We help you be more simple and direct.</p>
          <p>Above all, we are commited to using our knowledge and skills to create a positive lasting impact on the world. We seek to design solutions that help humanity make progress. Many of our clients work on topics and in industries that align with our values. We are proud to contribute to these important causes through our craft.</p>
          <p>Thank you for taking the time to learn about O-DB Studio. We look forward to the opportunity to work together and create meaningfully impactful designs and projects that make a difference in this digital space we all share.</p>
        </div>
      </div>
    </div>

    {/* </main> */}
    <div id="contact" className="float-right top-0 w-[400px] p-4 mt-24 *:block h-full border rounded-xl m-4 bg-stone-100 hover:bg-stone-50 transition-all cursor-default z-10" style={martian_mono.style}>
      <h2 className="uppercase text-4xl leading-none mb-10" style={xanh_mono.style}>Let's Work Together</h2>
        <p>GET IN TOUCH</p>
        <p className="text-right">OSCAR DOBSON-BROWN</p>
        {/* open mail app with default greeting template */}
        <p>E: <a href="mailto:hello@o-db.studio" className="hover:underline transition-all">hello@o-db.studio</a></p>
        {/* on desktop copy to clipboard, on mobile open in phone app */}

        <p>P: <a href="tel:0493176446" className="hover:underline transition-all">0493 176 446</a></p>

    </div>

    </div>

  );
}
