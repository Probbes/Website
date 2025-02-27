import styles from "./CV.module.css"

function CV({isEnglish}){

	const french =
		<>
			<div className={styles.CVBody}>
			<h1>CV</h1>
				<h2>Expériences professionnelles</h2>
					<h3>Stage - Photogrammétrie / Environnement XR</h3>
					<h4>2024</h4>
						<ul>
						<li>Photogrammétrie de squelettes</li>
						<li>Traitement des pièces photogrammétrisés et animations sur Blender</li>
						<li>Création d'un environnement XR sur Unreal Engine</li>
						<li>Managing et apprentissage de la 3D d'un petit groupe d'étudiants en stage</li>
						<li>Participation aux conférences sur l'apprentissage virtuel</li>
						<li>Création de documentations pour les futurs stagiaires (https://antoine-megevand.com/manuel)</li>
						</ul>
						<br/>
					<h3>Stage - Notorious Frogs</h3>
					<h4>2023</h4>
						<ul>
						<li>Modélisation, texturing, animation et implémentation dans Unreal Engine</li>
						<li>Participation à une GameJam : réalisation d'un jeu vidéo en 5 jours</li>
						<li>Optimisation d'assets déjà créés par l'équipe</li>
						</ul>
						<br />
					<h3>Stage - Wéo</h3>
					<h4>2020</h4>
						<ul>
						<li>Travail avec l'équipe de réalisation pour la diffusion d'un journal télévisé journalier</li>
						<li> Création de diverses images d'illustration diffusées en direct</li>
						<li>Mise en place avec l'équipe de production d'un concours d'éloquence en direct</li>
						<li>Prise d'initiative pour la création d'un programme d'automatisation d'un agenda journalier</li>
						</ul>
					<br />
					<h3>Stage - Cap' Informatique</h3>
					<h4>2019</h4>
						<ul>
						<li>Création d'une publicité pour le magasin en accord avec un cahier des charges</li>
						<li>Montage de trois spectacles de danse de la ville d'Arras</li>
						</ul>
					<br />
				<h2>Formation</h2>
					<h3>Master audiovisuel, médias interactifs numériques, jeux parcours Postproduction</h3>
					<h4>2021-2024</h4>
					<h4>Université de Valenciennes</h4>
						<ul>
						<li>Responsable VFX et générique pour deux courts-métrages avec la même équipe. Réalisation des génériques entièrement en 3D</li>
						<li>Création d'un monstre humanoïde en 3D, incrusté dans une vidéo immersive 360°</li>
						<li>Acquisition, traitement et implémentation de motion capture dans une courte vidéo</li>
						<li>Réalisation d'un montage et mixage son d'un court-métrage d'animation en équipe</li>
						<li>Création d'une scène en 3D photoréaliste</li>
						<li>Recréation en 3D d'un lieu grâce au camera mapping</li>
						<li>Incrustation d'un objet photogrammétrisé dans une vidéo</li>
						<li>Création d'un environnement immersif en réalité virtuelle sur Unreal Engine</li>
						</ul>
					<br />
					<h3>Licence d'audiovisuel et multimédia</h3>
					<h4>2018-2021</h4>
					<h4>Université de Valenciennes</h4>
						<ul>
						<li>Mise en place d'un musée en réalité augmentée. Programmation en java pour android</li>
						<li>Responsable du montage d'un court-métrage</li>
						<li>Montage et effets spéciaux d'un court-métrage pour un concours étudiant</li>
						</ul> 
			</div>
        </>

	const english = 
		<>
			<div className={styles.CVBody}>
			<h1>CV</h1>
				<h2>Work Experience</h2>
					<h3>Internship - Photogrammetry / XR Environnement </h3>
					<h4>2024</h4>
						<ul>
						<li>Photogrammetry of osteology collection</li>
						<li>Cleaning and animations of those models</li>
						<li>Making of XR Environnement</li>
						<li>Managing and teaching to a small group of interns</li>
						<li>Speaking publicly for teaching the use of virtual platforms for universities</li>
						<li>Making of documentations for futur interns</li>
						</ul>
						<br/>
					<h3>Internship - Notorious Frogs, Lille, France</h3>
					<h4>2023</h4>
						<ul>
						<li>3D Modeling, texturing, animating and implementing in Unreal Engine, assets for a videogame</li>
						<li>Making of a videogame in 5 days for a GameJam </li>
						<li>Optimisation of 3D assets for a videogame</li>
						</ul>
						<br />
					<h3>Internship - Wéo, Lille, France </h3>
					<h4>2020</h4>
						<ul>
						<li>Team work with the director to air a daily news cast</li>
						<li>Making of daily short videos</li>
						<li>Working with a team to create a live show broadcasting a speech contest</li>
						<li>Initiative to create a piece of software used for automating daily videos</li>
						</ul>
					<br />
					<h3>Internship - Cap' Informatique, Arras, France</h3>
					<h4>2019</h4>
						<ul>
						<li>Making of a commercial for the company</li>
						<li>Editing of three dance shows for the city</li>
						</ul>
					<br />
				<h2>Education</h2>
					<h3>Master's degree in audiovisual and interactive media and games</h3>
					<h4>2021-2024</h4>
					<h4>University of Valenciennes, France</h4>
						<ul>
						<li>Making the credits entirely in 3D for a short film</li>
						<li>3D Modeling, texturing and animating a monster for a VR video</li>
						<li>Shooting, cleaning and implementating a motion capture</li>
						<li>Managing, editing and mixing a documentary made in teams</li>
						<li>Making of a photorealistic 3D scene</li>
						<li>Use of camera mapping to recreate a place in 3DS Max</li>
						<li>Making of a live-action shot with photogrammetric object</li>
						<li>Creation of an immersive environment in virtual reality with Unreal Engine</li>
						</ul>
					<br />
					<h3>Bachelor's degree in audiovisual and interactive media</h3>
					<h4>2018-2021</h4>
					<h4>University of Valenciennes, France</h4>
						<ul>
						<li>Team creation of an exhibition in augmented reality</li>
						<li>Editing of several short films</li>
						<li>Editing and making of special effects for a short film made for a contest</li>
						</ul> 
			</div>
        </>

	if(isEnglish) {
		return english;
	}
	else {
		return french;
	}
}

export default CV