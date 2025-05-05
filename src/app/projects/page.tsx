'use client'

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-8 pt-16 pb-20 w-full bg-[#fdfaf4] text-[#0c1c3c]">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-[56px] md:text-[64px] font-semibold tracking-[-0.03em] leading-tight mb-6">
          Projets réalisés
        </h1>
        <p className="text-2xl font-light text-gray-800">
          Réalisations concrètes menées au cours de mon alternance à la CAF de l&apos;Orne.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-10">
        
        {/* 1. Gestion du patrimoine informatique */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Gestion du patrimoine informatique</h2>
          <img
            src="/images/R1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
          Installation des nouvelles machine et recensement de tous les outils informatique en leur adressant le numéro d’inventaire donné par la logistique, plus ajout des nouvelles et modifications pour les changement de postes
          </p>
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Gérer le patrimoine informatique</li>
          </ul>
        </div>

        {/* 2. Support utilisateur et gestion des demandes */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Support utilisateur (GLPI)</h2>
          <img
            src="/images/R2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
          GLPI avec son système de tickets pour adresser ses problème au technicien SI concernant tous types de problème comme les problème logiciel ou matériels ou encore des demande pour remplir des salle d’une dizaines d&apos;ordinateur avec écran, souris et clavier, plus demande directement adressé, et les demande de matériels en leur faisant signer une feuille au préalable pour éviter le vol de matériels.
          </p>
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Répondre aux incidents et aux demandes d’assistance et d&apos;évolution</li>
            <li>Gérer le patrimoine informatique</li>
          </ul>
        </div>

        {/* 3. Développement de la présence en ligne */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Développement de la présence en ligne</h2>
          <img
            src="/images/R3.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
            Création de signatures électroniques personnalisées et designées pour les équipes de direction.
          </p>
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Développer la présence en ligne de l&apos;organisation</li>
          </ul>
        </div>

        {/* 4. Projet Keepass */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Projet Keepass (sécurisation des mots de passe)</h2>
          <img
            src="/images/R4-1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <img
            src="/images/R4-2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
            Déploiement de l’outil Keepass auprès de tous les agents suite à une directive de la CNAF. Formations individuelles pour garantir l’adoption de l’outil de gestion de mots de passe.
          </p>
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Travailler en mode projet</li>
          </ul>
        </div>

        {/* 5. Migration Windows 11 */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Migration Windows 11</h2>
          <img
            src="/images/R5-1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <img
            src="/images/R5-2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <p className="text-gray-700 mb-4">
          Un projet étalé sur plusieurs mois dont le but était de faire migrer les machines de la caf en windows 11 pour ensuite pouvoir mettre en place windows hello. Ce projet m &apos;a donc été confié par mon maître d &apos;apprentissage, j &apos;ai donc pris des rendez vous pour chaque personne pour leur préciser quoi sauvegarder et dans leur pc et dans comment le laisser pour que la mise à jour puisse se lancer.
          </p>
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Travailler en mode projet</li>
            <li>Mettre à disposition des utilisateurs un service informatique</li>
          </ul>
        </div>

        {/* 6. Certifications */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Certifications</h2>
          <img
            src="/images/R6-1.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <img
            src="/images/R6-2.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <img
            src="/images/R6-3.png"
            alt="Illustration du projet – gestion du patrimoine informatique"
            className="mb-4 w-full h-auto rounded-md shadow-sm"
          />
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mettre en place son environnement d&apos;apprentissage personnel</li>
            <li>Développer son projet professionnel</li>
          </ul>
        </div>

        {/* 6. Procédures */}
        <div className="bg-white border border-[#0c1c3c] rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Réalisation de procédures en cours de formation</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="documents/PAPILLON Clément - Procédure Inter-vlan-ACL.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger ma procédure Inter-vlan-ACL
          </a>

          <a
            href="documents/Procédure RAID, LVM.pdf"
            download
            className="inline-block px-6 py-3 border border-[#0c1c3c] text-[#0c1c3c] rounded-md font-medium hover:bg-[#f0c98e] transition"
          >
            Télécharger ma procédure RAID, LVM
          </a>
        </div>
        <br />
        <a
            href="https://all-it-network.com/configuration-wifi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-[#0c1c3c] underline hover:text-[#2d5fff] transition"
          >
            Voir procédure configuration borne wifi CISCO 1142
          </a>          
        <br />
        <br />
          <h3 className="font-semibold mb-1">Compétences réalisées :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mettre en place son environnement d&apos;apprentissage personnel</li>
            <li>Gérer le patrimoine informatique</li>
          </ul>
        </div>

      </div>
    </main>
  )
}