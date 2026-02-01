export const Partners = () => {
  return (
    <section className="py-10 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Partners Section */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">
              Trusted Partners
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative w-full overflow-hidden mask-image-gradient">
            {/* Mask for fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

            <div className="flex w-max animate-scroll gap-0 py-4">
              {/* Items duplicated for loop */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-0 shrink-0">
                  {[
                    {
                      name: "Partner 1",
                      img: "/images/partners/t1.png",
                    },
                    {
                      name: "Partner 2",
                      img: "/images/partners/t2.png",
                    },
                    {
                      name: "Partner 3",
                      img: "/images/partners/t3.png",
                    },
                    {
                      name: "Partner 4",
                      img: "/images/partners/t4.png",
                    },
                    {
                      name: "Partner 5",
                      img: "/images/partners/t5.png",
                    },
                    {
                      name: "Partner 6",
                      img: "/images/partners/t6.png",
                    },
                  ].map((partner, idx) => (
                    <div
                      key={`${i}-${idx}`}
                      className="w-48 h-32 flex items-center justify-center p-4"
                    >
                      <img
                        src={partner.img}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customers Section */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">
              Our Valued Customers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Driving success for businesses across the region.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

            <div
              className="flex w-max animate-scroll gap-0 py-4"
              style={{ animationDirection: "reverse" }}
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-0 shrink-0">
                  {[
                    {
                      name: "Client 1",
                      img: "/images/cutomers-logo/1-removebg-preview.png",
                    },
                    {
                      name: "Client 2",
                      img: "/images/cutomers-logo/2-removebg-preview.png",
                    },
                    {
                      name: "Client 4",
                      img: "/images/cutomers-logo/4-removebg-preview.png",
                    },
                    {
                      name: "Client 5",
                      img: "/images/cutomers-logo/5-removebg-preview.png",
                    },
                    {
                      name: "Client 6",
                      img: "/images/cutomers-logo/6-removebg-preview.png",
                    },
                    {
                      name: "Client 7",
                      img: "/images/cutomers-logo/7-removebg-preview.png",
                    },
                  ].map((client, idx) => (
                    <div
                      key={`${i}-${idx}`}
                      className="w-48 h-32 flex items-center justify-center p-4"
                    >
                      <img
                        src={client.img}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
