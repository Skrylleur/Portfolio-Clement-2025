'use client'

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-16 w-full bg-[#fdfaf4]">
      <div className="max-w-4xl text-center">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-8">
          Je m&apos;appelle Clement PAPILLON
        </h1>
        <p className="text-2xl font-light mb-12 text-gray-800">
          Passionné par les jeux vidéos, les mangas et l&apos;informatique, je suis un jeune technicien du système d&apos;information qui apprend les métiers de l&apos;infrastructure réseau et de la cybersécurité.
        </p>

        <h2 className="text-4xl font-bold mb-6">Mes documents</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="documents/CV.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger mon CV
          </a>

          <a
            href="documents/Veille E5.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger mon rapport de stage
          </a>
        </div>
      </div>
    </main>
  )
}