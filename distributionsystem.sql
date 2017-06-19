/*
SQLyog Community v12.4.2 (64 bit)
MySQL - 5.7.18-log : Database - distributionsystem
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`distributionsystem` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `distributionsystem`;

/*Table structure for table `author` */

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `civility` char(2) DEFAULT 'MR',
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `birth_date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `favorite_author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `favorite_author_id` (`favorite_author_id`),
  CONSTRAINT `author_ibfk_1` FOREIGN KEY (`favorite_author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Author has various dates for demo';

/*Data for the table `author` */

insert  into `author`(`id`,`civility`,`first_name`,`last_name`,`email`,`birth_date`,`birth_date_time`,`favorite_author_id`) values 
(-28,'MR','Jim','Morrison',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-27,'MR','Bob','Dylan',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-26,'MR','Charlie','Watts',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-25,'MR','Mick','Jagger',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-24,'MR','Bob','Sponge',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-23,'MR','Alice','Bee',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-22,'MR','John22','Doe22',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-21,'MR','John21','Doe21',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-20,'MR','John20','Doe20',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-19,'MR','John19','Doe19',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-18,'MR','John18','Doe18',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-17,'MR','John17','Doe17',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-16,'MR','John16','Doe16',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-15,'MR','John15','Doe15',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-14,'MR','John14','Doe14',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-13,'MR','John13','Doe13',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-12,'MR','John12','Doe12',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-11,'MR','John11','Doe11',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-10,'MR','John10','Doe10',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-9,'MR','John09','Doe09',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-8,'MR','John08','Doe08',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-7,'MR','John07','Doe07',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-6,'MR','John06','Doe06',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-5,'MR','John05','Doe05',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-4,'MR','John04','Doe04',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-3,'MR','John03','Doe03',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-2,'MR','John02','Doe02',NULL,NULL,'2017-06-16 20:47:02',NULL),
(-1,'MR','John01','Doe01',NULL,NULL,'2017-06-16 20:47:02',NULL);

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `extract_binary` blob,
  `extract_file_name` varchar(100) DEFAULT NULL,
  `extract_content_type` varchar(100) DEFAULT NULL,
  `extract_size` decimal(11,0) DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `co_author_id` int(11) DEFAULT NULL,
  `publication_date` date DEFAULT NULL,
  `best_seller` tinyint(1) DEFAULT '0',
  `price` decimal(20,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  KEY `co_author_id` (`co_author_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`co_author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='BOOK supports file upload/download for demo';

/*Data for the table `book` */

insert  into `book`(`id`,`title`,`summary`,`extract_binary`,`extract_file_name`,`extract_content_type`,`extract_size`,`author_id`,`co_author_id`,`publication_date`,`best_seller`,`price`) values 
(-14,'Book 14','The Book 14',NULL,NULL,NULL,NULL,-2,NULL,NULL,1,99.00),
(-13,'Book 13','The Book 13',NULL,NULL,NULL,NULL,-2,NULL,NULL,1,120.00),
(-12,'Book 12','The Book 12',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,90.00),
(-11,'Book 11','The Book 11',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,35.00),
(-10,'Book 10','The Book 10',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,14.00),
(-9,'Book 9','The Book 9',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,39.00),
(-8,'Book 8','The Book 8',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,27.72),
(-7,'Book 7','The Book 7',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,30.00),
(-6,'Book 6','The Book 6',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,36.30),
(-5,'Book 5','The Book 5',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,3.50),
(-4,'Book 4','The Book 4',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,4.00),
(-3,'Book 3','The Book 3',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,11.00),
(-2,'Learn Angular2','Angular2 for beginners',NULL,NULL,NULL,NULL,-1,NULL,NULL,1,32.00),
(-1,'Learn Angular','Angular for beginners',NULL,NULL,NULL,NULL,-1,NULL,NULL,0,12.34);

/*Table structure for table `dis_table` */

DROP TABLE IF EXISTS `dis_table`;

CREATE TABLE `dis_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iv1` int(11) DEFAULT NULL,
  `iv2` int(11) DEFAULT NULL,
  `iv3` int(11) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_` (`username`),
  CONSTRAINT `FK_USER_` FOREIGN KEY (`username`) REFERENCES `user` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `dis_table` */

insert  into `dis_table`(`id`,`iv1`,`iv2`,`iv3`,`username`) values 
(1,20,20,20,'Kshitij'),
(2,255,255,255,'Kshitij');

/*Table structure for table `manu_table` */

DROP TABLE IF EXISTS `manu_table`;

CREATE TABLE `manu_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iv1` int(11) DEFAULT NULL,
  `iv2` int(11) DEFAULT NULL,
  `iv3` int(11) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `manu_table` */

insert  into `manu_table`(`id`,`iv1`,`iv2`,`iv3`,`timestamp`) values 
(1,20,20,20,NULL);

/*Table structure for table `passport` */

DROP TABLE IF EXISTS `passport`;

CREATE TABLE `passport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `passport_number` varchar(100) NOT NULL,
  `expiration_date` date DEFAULT NULL,
  `holder_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `passport_holder_unique_1` (`holder_id`),
  CONSTRAINT `passport_ibfk_1` FOREIGN KEY (`holder_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Use case for one-to-one relation';

/*Data for the table `passport` */

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `open_source` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `project` */

insert  into `project`(`id`,`name`,`url`,`author_id`,`open_source`) values 
(-1,'PrimeNG','http://www.primefaces.org/primeng/',-1,1);

/*Table structure for table `req_table` */

DROP TABLE IF EXISTS `req_table`;

CREATE TABLE `req_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `req_by` varchar(45) NOT NULL,
  `iv1` int(11) DEFAULT NULL,
  `iv2` int(11) DEFAULT NULL,
  `iv3` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `parentName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USERNAME` (`parentName`),
  CONSTRAINT `FK_USERNAME` FOREIGN KEY (`parentName`) REFERENCES `user` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `req_table` */

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_unique_1` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `role` */

insert  into `role`(`id`,`role_name`) values 
(-1,'ROLE_ADMIN'),
(-3,'ROLE_MONITORING'),
(-2,'ROLE_USER');

/*Table structure for table `sup_table` */

DROP TABLE IF EXISTS `sup_table`;

CREATE TABLE `sup_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iv1` int(11) DEFAULT NULL,
  `iv2` int(11) DEFAULT NULL,
  `iv3` int(11) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sup_table` */

/*Table structure for table `use_case_1` */

DROP TABLE IF EXISTS `use_case_1`;

CREATE TABLE `use_case_1` (
  `id1` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id2` varchar(100) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  PRIMARY KEY (`id1`,`id2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='USE_CASE_1 has a composite pk, just for demo';

/*Data for the table `use_case_1` */

/*Table structure for table `use_case_2` */

DROP TABLE IF EXISTS `use_case_2`;

CREATE TABLE `use_case_2` (
  `id` varchar(32) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='USE_CASE_2 has a string pk, just for demo';

/*Data for the table `use_case_2` */

/*Table structure for table `use_case_3` */

DROP TABLE IF EXISTS `use_case_3`;

CREATE TABLE `use_case_3` (
  `id1` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id2` varchar(32) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  PRIMARY KEY (`id1`,`id2`),
  KEY `id2` (`id2`),
  CONSTRAINT `use_case_3_ibfk_1` FOREIGN KEY (`id2`) REFERENCES `use_case_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='USE_CASE_3 has a composite pk with one member being also an FK, just for demo';

/*Data for the table `use_case_3` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL COMMENT 'The login used to login',
  `password` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `is_enabled` tinyint(1) NOT NULL DEFAULT '1',
  `civility` char(2) DEFAULT 'MR',
  `country_code` varchar(6) DEFAULT '+33',
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_author` varchar(200) DEFAULT NULL,
  `last_modification_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modification_author` varchar(200) DEFAULT NULL,
  `version` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_unique_1` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='The User is a human that can connect to this web application';

/*Data for the table `user` */

insert  into `user`(`id`,`login`,`password`,`email`,`is_enabled`,`civility`,`country_code`,`first_name`,`last_name`,`creation_date`,`creation_author`,`last_modification_date`,`last_modification_author`,`version`) values 
(-1,'admin','admin','admin@example.com',1,'MR','+33',NULL,NULL,'2017-06-14 21:20:35',NULL,'2017-06-14 21:20:35',NULL,1),
(1,'Kshitij','Kshitij','KD@K.com',1,'MR','+33','KDSAMA','LAGORI','2017-06-14 23:13:11',NULL,'2017-06-14 23:54:09','admin',3);

/*Table structure for table `user_details` */

DROP TABLE IF EXISTS `user_details`;

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `ph_number` int(11) NOT NULL,
  `emailId` varchar(45) NOT NULL,
  `parent` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_details` */

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role` */

insert  into `user_role`(`user_id`,`role_id`) values 
(-1,-3),
(-1,-2),
(-1,-1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
