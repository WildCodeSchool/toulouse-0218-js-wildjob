-- MySQL Script generated by MySQL Workbench
-- mer. 18 avril 2018 14:55:54 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------



-- -----------------------------------------------------
-- Table `Region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Region` (
  `idRegion` INT NOT NULL AUTO_INCREMENT,
  `region` VARCHAR(45) NULL,
  PRIMARY KEY (`idRegion`),
  UNIQUE INDEX `idRegion_UNIQUE` (`idRegion` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lieu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Lieu` (
  `idLieu` INT NOT NULL AUTO_INCREMENT,
  `ville` VARCHAR(45) NOT NULL,
  `pays` VARCHAR(45) NOT NULL,
  `idRegion` INT NULL,
  PRIMARY KEY (`idLieu`),
  UNIQUE INDEX `idLieu_UNIQUE` (`idLieu` ASC),
  INDEX `idRegion_idx` (`idRegion` ASC),
  CONSTRAINT `idRegion`
    FOREIGN KEY (`idRegion`)
    REFERENCES `Region` (`idRegion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Entite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Entite` (
  `idEntite` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEntite`),
  UNIQUE INDEX `idEntite_UNIQUE` (`idEntite` ASC),
  UNIQUE INDEX `type_UNIQUE` (`type` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Contrat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Contrat` (
  `idContrat` INT NOT NULL AUTO_INCREMENT,
  `contrat` VARCHAR(45) NULL,
  PRIMARY KEY (`idContrat`),
  UNIQUE INDEX `idContrat_UNIQUE` (`idContrat` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Contact` (
  `idContact` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(45) NULL,
  `site` VARCHAR(45) NULL,
  `telephone` VARCHAR(45) NULL,
  `idLieu` INT NULL,
  `idEntite` INT NULL,
  `idContrat` INT NULL,
  PRIMARY KEY (`idContact`),
  UNIQUE INDEX `Nom_UNIQUE` (`nom` ASC),
  UNIQUE INDEX `Adresse_UNIQUE` (`adresse` ASC),
  INDEX `idLieu_idx` (`idLieu` ASC),
  INDEX `idEntite_idx` (`idEntite` ASC),
  INDEX `idContrat_idx` (`idContrat` ASC),
  CONSTRAINT `idLieu`
    FOREIGN KEY (`idLieu`)
    REFERENCES `Lieu` (`idLieu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idEntite`
    FOREIGN KEY (`idEntite`)
    REFERENCES `Entite` (`idEntite`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idContrat`
    FOREIGN KEY (`idContrat`)
    REFERENCES `Contrat` (`idContrat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
