const Contact = () => {
  return (
    <main>
      <section className="container mx-auto mt-5 pt-5">
        <div>
          <h1 className="text-center">ABOUT ME</h1>
          <p className="text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="flex gap-20 max-w-7xl mx-auto mt-20">
          <div className="flex-1">
            <h2 className="font-family-Semicondensed mb-4">Get to know me!</h2>
            <p className="fz-18 text-justify lh-33 text-black">
              Im a <strong>Frontend Web Developer</strong> building the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              <a
                href="file:///G:/PortfolioPure/en/portfolio/index.html#react-project"
                target="_blank"
                className="link-theme"
              >
                Projects
              </a>
              section. I also like sharing content related to the stuff that I
              have learned over the years in
              <strong>Web Development</strong> so it can help other people of
              the Dev Community. Feel free to Connect or Follow me on my
              <a
                href="https://www.linkedin.com/in/mohammad-esmaeilpour-4ab401217/"
                target="_blank"
                className="link-theme"
              >
                Linkedin
              </a>
              where I post useful content related to Web Development and
              Programming Im open to <b>Job</b> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then dont hesitate to{" "}
              <b>contact</b> me.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="font-family-Semicondensed mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-5">
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                HTML
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                CSS
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Scss/Sass
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Bootstrap 4/5
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Tailwind
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Java Script
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                EcmaScript 5/6/7
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                React Js
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Rest Api
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Axios/Fetch/Ajax
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Zustand
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Context Api
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Postman
              </div>
              <div className="bg-white border border-[1px solid #e0e3e7] px-3 py-1 rounded-lg text-blue-400">
                Git/Gitlab
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
