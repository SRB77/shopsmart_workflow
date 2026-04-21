import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eff3ff] dark:bg-slate-900 w-full border-0 tonal shift from surface to surface-container-low flat no shadows">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-12 py-16 gap-8 max-w-[1920px] mx-auto">
        <div className="max-w-sm">
          <div className="text-lg font-bold text-black dark:text-white mb-6 font-headline">FOREVERBUY</div>
          <p className="font-body text-secondary text-sm leading-relaxed mb-6">
            A curated selection of architectural fashion and lifestyle objects. Redefining modern minimalism through intentional design.
          </p>
          <div className="text-xs font-['Plus_Jakarta_Sans'] tracking-widest uppercase text-slate-500 dark:text-slate-400">
            © 2024 FOREVERBUY. THE ARCHITECTURAL CURATOR. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex flex-wrap gap-16 md:gap-24">
          <div>
            <h4 className="font-headline text-on-surface font-bold mb-6 tracking-wide">COMPANY</h4>
            <ul className="flex flex-col gap-4 font-['Plus_Jakarta_Sans'] text-xs tracking-widest uppercase text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-[#BE185D] underline-offset-4 hover:underline transition-all duration-300" href="#">PRIVACY</a></li>
              <li><a className="hover:text-[#BE185D] underline-offset-4 hover:underline transition-all duration-300" href="#">TERMS</a></li>
              <li><a className="hover:text-[#BE185D] underline-offset-4 hover:underline transition-all duration-300" href="#">EXCHANGE</a></li>
              <li><a className="hover:text-[#BE185D] underline-offset-4 hover:underline transition-all duration-300" href="#">CONTACT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-on-surface font-bold mb-6 tracking-wide">GET IN TOUCH</h4>
            <ul className="flex flex-col gap-4 font-body text-sm text-secondary">
              <li>+1-212-456-7890</li>
              <li>curator@foreverbuy.in</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
