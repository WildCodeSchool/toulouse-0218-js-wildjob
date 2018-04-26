-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: wildjob_app
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `wildjob_app`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `wildjob_app` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `wildjob_app`;

--
-- Table structure for table `Entite`
--

DROP TABLE IF EXISTS `Entite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Entite` (
  `idContact` int(11) NOT NULL AUTO_INCREMENT,
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
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `job` int(11) DEFAULT NULL,
  `intern` int(11) DEFAULT NULL,
  `internJob` int(11) DEFAULT NULL,
  PRIMARY KEY (`idContact`),
  UNIQUE KEY `Adresse_UNIQUE` (`address`),
  UNIQUE KEY `Nom_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Entite`
--

LOCK TABLES `Entite` WRITE;
/*!40000 ALTER TABLE `Entite` DISABLE KEYS */;
INSERT INTO `Entite` VALUES (19,'entreprise1','1 place de la Bourse','mail@mail.com','website','0678',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0),(20,'entreprise2','2 place de la Bourse','mail2@mail.com','website','0678',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0),(21,'entreprise3','3 place de la bourse','mail3@mail.com','website','0678',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0),(22,'entreprise4','4 place de la bourse','mail4@mail.com','website','0678',NULL,NULL,NULL,NULL,NULL,43.6014,1.44214,0,0,0),(23,'entreprise5','4 rue saint Rome','mail5@mail.com','website','0676767676','entreprises','Start Up','Sud-Ouest','Toulouse','France',39.7702,-94.8398,3,2,2),(24,'entreprise6','6 rue saint Rome','mail6@mail.com','website','undefined','entreprises','Start Up','Sud-Ouest','Toulouse','France',39.7702,-94.8398,3,2,2),(25,'entreprise7','7 rue saint Rome','mail7@mail.com','website','undefined','entreprises','Start Up','Sud-Ouest','Toulouse','France',39.7702,-94.8398,3,2,2),(26,'entreprise8','8 rue saint Rome','mail8@mail.com','website','undefined','entreprises','Start Up','Sud-Ouest','Toulouse','France',39.7702,-94.8398,3,2,2);
/*!40000 ALTER TABLE `Entite` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-26 11:38:41
