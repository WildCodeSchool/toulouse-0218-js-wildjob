-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 04 mai 2018 à 11:22
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `wildjob_app`
--

USE wildjob_app;

-- --------------------------------------------------------

--
-- Structure de la table `Admin`
--

CREATE TABLE `Admin` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Admin`
--

INSERT INTO `Admin` (`id`, `name`, `password`) VALUES
(1, 'justineAdmin', 'wildcodeschooltoulouse');

-- --------------------------------------------------------

--
-- Structure de la table `Entite`
--

CREATE TABLE `Entite` (
  `idContact` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` enum('entreprises','ecosysteme') COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` enum('ESN','Start Up','PME','Grand Groupe','Agence Web','Collectivite / Association','Editeur','Coworking','Incubateur / Accelerateur','French Tech','Cluster Numerique','Ecole de code') COLLATE utf8_unicode_ci DEFAULT NULL,
  `area` enum('Nord-Ouest','Sud-Ouest','Sud-Est','Nord-Est','Centre-IdF','Monde') COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `job` int(11) DEFAULT NULL,
  `intern` int(11) DEFAULT NULL,
  `internJob` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Entite`
--

INSERT INTO `Entite` (`idContact`, `name`, `address`, `mail`, `website`, `phone`, `type`, `category`, `area`, `city`, `country`, `lat`, `lng`, `job`, `intern`, `internJob`) VALUES
(61, 'La Cantine', '27 Rue d\'Aubuisson', '', 'http://lacantine-toulouse.org/', '', 'ecosysteme', 'Coworking', 'Sud-Ouest', 'Toulouse', 'France', 43.6027, 1.45422, 0, 0, 0),
(82, 'Etincelle', '2 Rue d\'Austerlitz', '', 'http://www.etincelle-coworking.com/', '', 'ecosysteme', 'Coworking', 'Sud-Ouest', 'Toulouse', 'France', 43.6058, 1.44748, 0, 0, 0),
(84, 'Lab\'Oikos', '32 Rue Riquet', '', 'https://www.laboikos.com/', '', 'ecosysteme', 'Coworking', 'Sud-Ouest', 'Toulouse', 'France', 43.6042, 1.45453, 0, 0, 0),
(85, 'HarryCow', '13 Rue Sainte-Ursule', '', 'https://www.harrycow.com/', '', 'ecosysteme', 'Coworking', 'Sud-Ouest', 'Toulouse', 'France', 43.6021, 1.44209, 0, 0, 0),
(86, 'At Home', '32 Rue des Marchands', '', 'https://www.athome-startup.fr/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.5999, 1.44315, 0, 0, 0),
(90, 'WeSprint', '27 Rue d\'Aubuisson', '', 'https://wesprint.fr/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.6027, 1.45422, 0, 0, 0),
(91, 'Nubbo', '49 Grande Rue Saint-Michel', '', 'https://www.nubbo.co/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.5867, 1.44678, 0, 0, 0),
(93, 'Le Starter', '39 Allées Jules Guesde', '', 'http://www.lestarter.org/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.5943, 1.45091, 0, 0, 0),
(95, 'Ekito', '15 Rue Gabriel Péri', '', 'https://www.ekito.fr/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.6059, 1.45209, 0, 0, 0),
(97, 'Connected Camp', '425 Rue Jean Rostand', '', 'http://leconnected.camp/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.5438, 1.51166, 0, 0, 0),
(99, 'Airbus BizLab', '57 Avenue Jean Monnet', '', 'https://www.airbus-bizlab.com/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.6305, 1.34325, 0, 0, 0),
(101, 'Momentum', '53 Rue de la Colombette', '', 'https://joinmomentum.co/', '', 'ecosysteme', 'Incubateur / Accelerateur', 'Sud-Ouest', 'Toulouse', 'France', 43.6046, 1.45475, 0, 0, 0),
(103, 'French Tech', '39 allée Jules Guesdes', '', 'http://www.frenchtechtoulouse.com/', '', 'ecosysteme', 'French Tech', 'Sud-Ouest', 'Toulouse', 'France', 43.5943, 1.45091, 0, 0, 0),
(105, 'Digital Place', '12 Rue Louis Courtois de Viçose', '', 'https://www.digitalplace.fr/', '', 'ecosysteme', 'Cluster Numerique', 'Sud-Ouest', 'Toulouse', 'France', 43.5698, 1.42211, 0, 0, 0),
(107, 'IoT Valley', '425 Rue Jean Rostand', '', 'https://www.iot-valley.fr/', '', 'ecosysteme', 'Cluster Numerique', 'Sud-Ouest', 'Labège', 'France', 43.5438, 1.51166, 0, 0, 0),
(110, 'La Mêlée ( JulesGuesde)', '39 Allées Jules Guesde', 'contact@lamelee.com', 'http://www.lamelee.com/', '0532108120', 'ecosysteme', 'Cluster Numerique', 'Sud-Ouest', 'Toulouse', 'France', 43.5943, 1.45091, 0, 0, 0),
(208, 'Wild Code School', '1 Place de la Bourse', 'justine@wildcodeschool.fr', 'wildcodeschool.fr', '06 66 47 68 70', 'ecosysteme', 'Ecole de code', 'Sud-Ouest', 'Toulouse', 'France', 43.6015, 1.44215, 1, 1, 1),
(209, 'Capgemini', '109 Avenue du Général Eisenhower', 'email@capgemini.com', 'www.capgemini.com', '05 31 08 80 00', 'entreprises', 'Grand Groupe', 'Sud-Ouest', 'Toulouse', 'France', 43.5664, 1.37763, 1, 1, 1),
(210, 'LINKKY', '102 Rue des Poissonniers, Paris', 'hello@linkky.co', 'http://linkky.co', '06 50 49 79 01', 'entreprises', 'Start Up', 'Centre-IdF', 'PARIS', 'France', 48.8934, 2.35303, 1, 0, 0),
(211, 'FM LOGISTIC', 'Fauverney', NULL, NULL, NULL, 'entreprises', 'PME', NULL, 'Fauvernay (21)', 'France', 47.2701, 5.14088, NULL, NULL, NULL),
(212, 'Warren Walters', '15 bis Rue Kléber, Issy-les-Moulineaux', 'contact@warren-walter.com', 'http://www.warren-walter.com/', '01 85 09 12 38', 'entreprises', 'ESN', 'Centre-IdF', 'Paris', 'France', 48.8262, 2.27312, 1, 0, 0),
(213, '1984 Agency', '41 Rue Noël Ballay, Chartres', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Chartres', 'France', 48.4448, 1.48525, NULL, NULL, NULL),
(214, 'PARTITIO', '5 Rue de Gironis, Toulouse', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'TOULOUSE', 'France', 43.5654, 1.41133, NULL, NULL, NULL),
(215, 'JETPULP', '12 Avenue Tony Garnier, Lyon', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Lyon', 'France', 45.7297, 4.82352, NULL, NULL, NULL),
(216, 'YOOCAN', '97 Avenue de la Division Leclerc, Antony', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'PARIS', 'France', 48.7457, 2.30378, NULL, NULL, NULL),
(217, 'Keensaas', '1 Avenue du Champ de Mars, Orléans', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Orléans', 'France', 47.8939, 1.8942, NULL, NULL, NULL),
(218, 'GEEV', '87 Quai des queyries, Darwin - Le Campement, Bordeaux', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Bordeaux', 'France', 44.8489, -0.559422, NULL, NULL, NULL),
(219, 'Code Forefront', '2 Place de l\'Étape au Vin, Chartres', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Chartres', 'France', 48.4441, 1.48994, NULL, NULL, NULL),
(220, 'CGI FRANCE', '8 Rue Anatole France, Lille', NULL, NULL, NULL, 'entreprises', 'Grand Groupe', NULL, 'Villeneuve d\'Ascq', 'France', 50.6374, 3.0658, NULL, NULL, NULL),
(221, 'Imagine-App', '22 Rue du Pont Neuf, Paris', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Neuilly-sur-seine', 'France', 48.8607, 2.34483, NULL, NULL, NULL),
(222, 'CHALL\'ANGEL', '87 rue de fontenoy, Blanchemaille by Euratechnologies, Roubaix', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Roubaix', 'France', 50.698, 3.16704, NULL, NULL, NULL),
(223, 'Ekino', '18 Rue Lucien Granet, Cenon', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'Bordeaux', 'France', 44.8547, -0.531133, NULL, NULL, NULL),
(224, 'Happy Capital', '2 Place de la Bourse, Bordeaux', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Bordeaux', 'France', 44.841, -0.570452, NULL, NULL, NULL),
(225, 'Apside', '2, avenue de Paris, Immeuble Le Primat, Orléans', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'Orléans', 'France', 47.9077, 1.90433, NULL, NULL, NULL),
(226, 'Apsica ', '78 Avenue des États Unis, Toulouse', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Toulouse', 'France', 43.6312, 1.4325, NULL, NULL, NULL),
(227, 'Manufacture Générale', '45 Rue Molinier, Agen', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Agen', 'France', 44.2061, 0.620029, NULL, NULL, NULL),
(228, 'Live Formation', '51 Rue de Curembourg, Fleury-les-Aubrais', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Orléans', 'France', 47.9427, 1.92708, NULL, NULL, NULL),
(229, 'PROJETS PERFORMANCE', '54 Rue Raulin, Lyon', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Lyon', 'France', 45.7463, 4.83408, NULL, NULL, NULL),
(230, 'NUNKI SAS', '84 Avenue de la République, Paris', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Paris', 'France', 48.8641, 2.37965, NULL, NULL, NULL),
(231, 'Ubicentrex', '23 Boulevard de l\'Orangerie, Strasbourg', NULL, NULL, NULL, 'entreprises', 'Editeur', NULL, 'Strasbourg', 'France', 48.5899, 7.77415, NULL, NULL, NULL),
(232, 'Janasense', '1 Avenue du Champ de Mars, Le Lab\'O, Orléans', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Orléans', 'France', 47.8939, 1.8942, NULL, NULL, NULL),
(233, 'Maetva', '41 Av. du Rhin, Strasbourg', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Strasbourg', 'France', 48.5703, 7.77719, NULL, NULL, NULL),
(234, 'Mission Internet', '106 Avenue Dauphine, Orléans, Orléans', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Orléans', 'France', 47.8883, 1.90491, NULL, NULL, NULL),
(235, 'AXONAUT', '9 rue Ritay, 6ème étage, Toulouse', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'TOULOUSE', 'France', 43.6126, 1.42978, NULL, NULL, NULL),
(236, 'MAJ 44', '176 Avenue Charles de Gaulle, Neuilly-sur-Seine', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Neuilly-sur-seine', 'France', 48.8855, 2.25925, NULL, NULL, NULL),
(237, 'Mobalib', '213 cours Victor Hugo, NEWTON, Bègles', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Bègles', 'France', 44.8055, -0.559868, NULL, NULL, NULL),
(238, 'LES CARTONS', '188 Avenue de Fronton, Toulouse', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'TOULOUSE', 'France', 43.6427, 1.43367, NULL, NULL, NULL),
(239, 'SupportFi', '91 Rue du Faubourg Saint-Honoré, Paris', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Paris', 'France', 48.8718, 2.31293, NULL, NULL, NULL),
(240, 'PAARLY', 'Allée Jules Guesde, Toulouse', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'TOULOUSE', 'France', 43.5939, 1.44815, NULL, NULL, NULL),
(241, 'MYLABS', '16 Rue Barrème, Lyon', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'Lyon', 'France', 45.7743, 4.84449, NULL, NULL, NULL),
(242, 'IDM\'Com', '285 Rue de Bourgogne, Orléans', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Orléans', 'France', 47.8998, 1.90618, NULL, NULL, NULL),
(243, 'AB Prod', '42 Rue de la République, Châteauroux', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Châteauroux', 'France', 46.8086, 1.68905, NULL, NULL, NULL),
(244, 'EN PERSONNE 360', '72 Avenue Victor Hugo, Boulogne-Billancourt', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Paris', 'France', 48.8381, 2.24572, NULL, NULL, NULL),
(245, 'L\'addition', '1 Place Lainé, Bordeaux', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Bordeaux', 'France', 44.8485, -0.57126, NULL, NULL, NULL),
(246, 'On va bosser', '112 Avenue du Général de Gaulle, Rosny-sous-Bois', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'paris', 'France', 48.8803, 2.47909, NULL, NULL, NULL),
(247, 'INEAT CONSEIL', '2 Allée de la haye du temple', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'LOMME', 'France', 50.6325, 3.01855, NULL, NULL, NULL),
(248, 'Elao Paris', 'Remix Coworking, 16 Rue de Bucarest, Paris', NULL, NULL, NULL, 'entreprises', 'Agence Web', NULL, 'Paris', 'France', 48.8806, 2.32549, NULL, NULL, NULL),
(249, 'SQLI', '6 Impasse de Lisieux, Toulouse', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'TOULOUSE', 'France', 43.5987, 1.39627, NULL, NULL, NULL),
(250, 'Ogone', 'CEEI Chartres Cité de l’Innovation Bât.22, 36 Rue des Bellangères, Le Coudray', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Chartres', 'France', 48.4177, 1.4892, NULL, NULL, NULL),
(251, 'SULLY GROUP', '5-7 Avenue de Paris, Vincennes', NULL, NULL, NULL, 'entreprises', 'Grand Groupe', NULL, 'Nanterre', 'France', 48.8449, 2.43347, NULL, NULL, NULL),
(252, 'Netapsys Grand Est', '11 Rue de la Haye, Schiltigheim', NULL, NULL, NULL, 'entreprises', 'ESN', NULL, 'Schiltigheim', 'France', 48.6143, 7.70847, NULL, NULL, NULL),
(253, 'MAILCLARK', '4 Rue du Professeur Charles Appleton, Lyon', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'LYON', 'France', 45.7461, 4.83486, NULL, NULL, NULL),
(254, 'Hyperlex', '16 Rue Saint-Marc, Paris', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Saint-Ouen', 'France', 48.8705, 2.34041, NULL, NULL, NULL),
(255, 'KRDS', '24 Rue du Rocher, Paris', NULL, NULL, NULL, 'entreprises', 'Start Up', NULL, 'Paris', 'France', 48.8767, 2.32218, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Entite`
--
ALTER TABLE `Entite`
  ADD PRIMARY KEY (`idContact`),
  ADD UNIQUE KEY `Nom_UNIQUE` (`name`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Entite`
--
ALTER TABLE `Entite`
  MODIFY `idContact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=256;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
