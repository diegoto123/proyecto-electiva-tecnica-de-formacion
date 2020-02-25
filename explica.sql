/*
SQLyog Enterprise Trial - MySQL GUI v7.11 
MySQL - 5.5.5-10.4.8-MariaDB : Database - explica
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`explica` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `explica`;

/*Table structure for table `albunes` */

DROP TABLE IF EXISTS `albunes`;

CREATE TABLE `albunes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `artista` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `albunes` */

insert  into `albunes`(`id`,`nombre`,`artista`,`fecha`) values (1,'ncs','diego','2001-08-07'),(2,'lol','rito games','2011-02-08'),(3,'free fire','copiraight','2019-01-05'),(4,'apex','que le importa','2020-07-07'),(5,'josefino','josefinada','2001-01-01'),(6,'josefino','josefinada','2001-01-01'),(7,'hhh','kkkk','2001-01-01');

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) DEFAULT NULL,
  `contra` varchar(100) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3334 DEFAULT CHARSET=utf8mb4;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`usuario`,`contra`,`rol_id`,`nombre`,`edad`) values (2,'culos','1234',2,'carlos',21),(4,'leon','8888',1,'leo',38),(5,'cp','7777',1,'felipe',80),(6,'lolsito','9999',1,'sebastian',19),(9,'juanalacuabana','5987',NULL,'juana',90);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
