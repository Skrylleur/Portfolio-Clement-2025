'use client'

export default function ExperiencesPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Mes expériences professionnelles
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Voici un aperçu de mon parcours en entreprise.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-10">
        {/* Stage Dév */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Stage en développement web | 2018</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1 pl-4">
            <li>Découverte des langages HTML et CSS</li>
            <li>Développement de l’image en ligne de l’entreprise</li>
          </ul>
        </div>

        {/* KFC */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Équipier polyvalent en restauration rapide | KFC | 2021 - 2023</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1 pl-4">
            <li>Préparer les commandes en respectant les normes d’hygiène et de qualité</li>
            <li>Assembler les produits selon les standards de l’enseigne</li>
            <li>Veiller à la fraîcheur des ingrédients et au respect des procédures de stockage</li>
          </ul>
        </div>

        {/* CAF de l'Orne */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Technicien informatique | CAF de l&apos;Orne | 2023 - 2025</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1 pl-4">
            <li>Installer, configurer et dépanner les équipements réseau (switchs, routeurs, points d’accès)</li>
            <li>Assurer la maintenance préventive et corrective des postes et périphériques</li>
            <li>Fournir une assistance technique aux collaborateurs (Linux et Microsoft)</li>
            <li>Former les collaborateurs aux outils bureautiques et applications internes</li>
            <li>Gérer le parc informatique, suivre les licences et l’inventaire</li>
            <li>Participer à des projets d’infrastructure (déploiement de nouveaux outils)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}