import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-[#0e100f] pb-12 pt-16 border-t border-[#f7f2e1]/20 bg-[repeating-linear-gradient(45deg,black,black_10px,#444_10px,#444_11px)]"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-[#f7f2e1] font-tomato-sans text-6xl font-bold tracking-tighter">
                Aronne Kohler
              </div>
            </Link>
          </div>

          <div className="col-span-1 bg-black border p-4 border-[#444444] border-1">
            <h3 className="text-[#f7f2e1] font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><Link href="https://botflow.io/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Botflow</Link></li>
              <li><Link href="/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Portfolio</Link></li>
              <li><Link href="https://www.linkme.ltd/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Linkme QR</Link></li>
            </ul>
          </div>

          <div className="col-span-1 bg-black border p-4 border-[#444444] border-1">
            <h3 className="text-[#f7f2e1] font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li><Link href="/frontend" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Frontend</Link></li>
              <li><Link href="/backend" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Backend</Link></li>
              <li><Link href="/ai" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">AI Integration</Link></li>
              <li><Link href="/design" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="col-span-1 bg-black border p-4 border-[#444444] border-1">
            <h3 className="text-[#f7f2e1] font-semibold mb-4">This stack</h3>
            <ul className="space-y-2">
              <li><Link href="https://nextjs.org/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Next.js</Link></li>
              <li><Link href="https://react.dev/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">React</Link></li>
              <li><Link href="https://www.typescriptlang.org/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">TypeScript</Link></li>
              <li><Link href="https://motion.dev/" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Motion</Link></li>
            </ul>
          </div>

          <div className="col-span-1 bg-black border p-4 border-[#444444] border-1">
            <h3 className="text-[#f7f2e1] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contact@aronnekohler.com" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Email</a></li>
              <li><a href="/resume" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Resume</a></li>
              <li><a href="/contact" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">Get in Touch</a></li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-16 pt-8 border-t border-[#f7f2e1]/10 flex flex-col md:flex-row justify-between items-center"> */}

        <div className="pt-8 border-[#f7f2e1]/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0 bg-black border py-2 px-3 border-[#444444] border-1">
            <a href="https://github.com/aronnekohler" target="_blank" rel="noopener noreferrer" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aronnekohler" target="_blank" rel="noopener noreferrer" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">
              LinkedIn
            </a>
            <a href="https://www.twitter.com/aronnekohler" target="_blank" rel="noopener noreferrer" className="text-[#f7f2e1]/70 hover:text-[#f7f2e1] transition-colors">
              Twitter
            </a>
          </div>

          <div className="text-[#f7f2e1]/70 text-sm bg-black border py-2 px-3 border-[#444444] border-1">
            © 2025 Aronne Kohler. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;