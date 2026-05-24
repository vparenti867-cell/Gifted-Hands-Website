export default function GiftedHandsWebsite() {
  return (
    <div className="bg-[#071224] text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 z-50 bg-[#071224]/95 backdrop-blur">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-[#f3ead9]" style={{fontFamily:'cursive'}}>
            Gifted Hands
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/80">
          <a href="#about" className="hover:text-[#d7a6ff]">About</a>
          <a href="#programs" className="hover:text-[#d7a6ff]">Programs</a>
          <a href="#gallery" className="hover:text-[#d7a6ff]">Gallery</a>
          <a href="#events" className="hover:text-[#d7a6ff]">Events</a>
          <a href="#connect" className="hover:text-[#d7a6ff]">Connect</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://cdn.coverr.co/videos/coverr-artist-painting-on-canvas-1566560189734?download=1080p"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#071224]" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1
            className="text-6xl md:text-8xl text-[#f6ebdb] drop-shadow-2xl"
            style={{fontFamily:'cursive'}}
          >
            Gifted Hands
          </h1>

          <p className="mt-6 text-2xl md:text-4xl text-white/90 tracking-wide">
            Masterpieces in Progress
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="bg-[#5c1b75] hover:bg-[#722291] transition px-8 py-4 rounded-full text-lg font-semibold shadow-2xl">
              Explore Programs
            </button>

            <button className="border border-white/40 hover:bg-white/10 transition px-8 py-4 rounded-full text-lg">
              Watch Story
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#4b1457] py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-[#f3eee7] text-black rounded-3xl p-10 md:p-16 shadow-2xl rotate-[-1deg] relative">
          <div className="absolute top-0 left-10 w-24 h-8 bg-[#e7dfbf] rotate-[-8deg] -translate-y-4 rounded-sm" />
          <div className="absolute bottom-0 right-10 w-24 h-8 bg-[#e7dfbf] rotate-[8deg] translate-y-4 rounded-sm" />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
                alt="hand"
                className="w-48 mx-auto"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl text-[#5c1b75] mb-6 font-bold">
                Who We Are
              </h2>

              <p className="text-lg leading-9 text-black/80">
                Gifted Hands exists to inspire creativity, healing, worship,
                and connection through the arts. We believe every person has
                purpose and carries God-given gifts that deserve to be seen,
                nurtured, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 px-6 bg-[#09162b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl mb-16 text-[#f6ebdb]" style={{fontFamily:'cursive'}}>
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Art Workshops',
                image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
                text: 'Hands-on creative workshops focused on artistic expression and personal growth.'
              },
              {
                title: 'Dance & Movement',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop',
                text: 'Movement and worship experiences that inspire confidence and freedom.'
              },
              {
                title: 'Journaling & Reflection',
                image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
                text: 'Guided spaces for prayer, journaling, creativity, and healing conversations.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#111c30] rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition duration-300">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />

                <div className="p-8">
                  <h3 className="text-3xl text-[#d7a6ff] mb-4 font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-white/80 leading-8">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#4b1457] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl mb-14 text-[#f6ebdb]" style={{fontFamily:'cursive'}}>
            Creating Impact Together
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gallery"
                className="h-72 w-full object-cover rounded-2xl hover:scale-[1.02] transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
            alt="worship"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl leading-relaxed text-[#f6ebdb] font-light">
            "Gifted Hands helped me discover purpose, confidence,
            and healing through creativity and worship."
          </p>

          <p className="mt-8 uppercase tracking-[0.3em] text-[#d7a6ff]">
            — Community Member
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-[#f3eee7] text-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl mb-16 text-[#5c1b75]" style={{fontFamily:'cursive'}}>
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: 'May 18',
                title: 'Paint & Worship Night'
              },
              {
                date: 'June 7',
                title: 'Dance Freedom Workshop'
              },
              {
                date: 'June 21',
                title: 'Journal & Prayer Morning'
              }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5">
                <div className="bg-[#5c1b75] text-white px-6 py-8 text-center">
                  <p className="text-xl uppercase tracking-widest">{event.date}</p>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#5c1b75]">
                    {event.title}
                  </h3>

                  <p className="text-black/70 leading-8">
                    Join us for a creative and worship-centered community gathering.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="bg-[#09162b] py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#f3eee7] rounded-3xl p-10 md:p-16 text-black shadow-2xl">
          <h2 className="text-center text-5xl text-[#5c1b75] mb-10" style={{fontFamily:'cursive'}}>
            Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white p-5 rounded-xl border border-black/10"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white p-5 rounded-xl border border-black/10"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="w-full mt-6 bg-white p-5 rounded-xl border border-black/10 min-h-[180px]"
          />

          <button className="mt-8 w-full bg-[#5c1b75] hover:bg-[#732290] transition text-white py-5 rounded-xl text-lg font-semibold shadow-xl">
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 px-6 text-center border-t border-white/10">
        <p className="text-white/60 tracking-wide">
          © 2025 Gifted Hands — Created With a Purpose
        </p>
      </footer>
    </div>
  )
}
