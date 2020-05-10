/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.8-MariaDB : Database - explica
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`explica` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `explica`;

/*Table structure for table `albumes` */

DROP TABLE IF EXISTS `albumes`;

CREATE TABLE `albumes` (
  `id_album` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `artista` varchar(100) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_album`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Data for the table `albumes` */

insert  into `albumes`(`id_album`,`nombre`,`artista`,`fecha`,`link`) values 
(1,'hold_yout_colour','pendulum','2005-08-07','https://mega.nz/#!EEghzRQA!yiyFm2w7WfpkF7hMMcyhdwu9tCVFGY6HpIuBesNs7Mo'),
(11,'slipknot','slipknot','0000-00-00','http://www.mediafire.com/file/26y58ubkm1t6ku6/%25281999%2529_Slipknot.rar/file'),
(12,'awsome mix vol 1 y 2','madre con calvicie','2012-05-12','https://mega.nz/file/xZQQkajb#AS0oklppDZLw3RU1c2_ZoX8-azfhgXSsQbv7LShiU1I');

/*Table structure for table `artista` */

DROP TABLE IF EXISTS `artista`;

CREATE TABLE `artista` (
  `id_artista` int(100) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `albumes` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_artista`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `artista` */

insert  into `artista`(`id_artista`,`nombre`,`genero`,`albumes`) values 
(1,'pendulum','drum_and_bass',3),
(3,'slipknot','nu metal',6),
(8,'madre con calvicie','variado',2);

/*Table structure for table `peticiones` */

DROP TABLE IF EXISTS `peticiones`;

CREATE TABLE `peticiones` (
  `id_peticiones` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `album` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_peticiones`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

/*Data for the table `peticiones` */

insert  into `peticiones`(`id_peticiones`,`nombre`,`genero`,`album`) values 
(27,'radiohead','rock','ok computer');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usua` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) DEFAULT NULL,
  `contra` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_usua`)
) ENGINE=InnoDB AUTO_INCREMENT=3335 DEFAULT CHARSET=utf8mb4;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usua`,`usuario`,`contra`) values 
(1,'admin','123');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
