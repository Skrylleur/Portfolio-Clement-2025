'use client'

export default function SkillsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Compétences
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Un aperçu des compétences que j’ai acquises en entreprise ainsi qu&apos;en formation.
        </p>
      </div>

      <div className="max-w-3xl w-full bg-white border border-[#0c1c3c] rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Compétences techniques et professionnelles</h2>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
          <li>Configuration de matériel réseau</li>
          <li>Gestion de projets</li>
          <li>Support informatique</li>
          <li>Gestion de parc informatique</li>
          <li>Formation des collaborateurs aux nouvelles applications</li>
          <li>Utilisation des systèmes d’exploitation Linux et Microsoft</li>
          <li>Exploitation des outils bureautiques</li>
        </ul>
      </div>
    </main>
  )
}