/*
SQLyog v10.2 
MySQL - 5.5.54 : Database - baidunews
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`baidunews` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `baidunews`;

/*Table structure for table `newses` */

DROP TABLE IF EXISTS `newses`;

CREATE TABLE `newses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstype` varchar(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

/*Data for the table `newses` */

insert  into `newses`(`id`,`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) values (1,'精选','测试第一条','img/1.jpg','2017-06-26 00:00:00','阿彤消息'),(2,'互联网','facebook','img/3.png','2017-07-16 00:00:00','一点资讯'),(3,'本地','JD','img/2.jpg','2017-07-31 00:00:00','新华网'),(4,'图片','小米','img/4.jpg','2017-07-14 00:00:00','qwer'),(5,'娱乐','shixi','img/3.png','2017-07-16 00:00:00','asdf666'),(7,'社会','timer','img/2.jpg','2017-07-15 00:00:00','搜新闻'),(8,'百家','Apple','img/1.jpg','2017-07-22 00:00:00','sougou'),(9,'搞笑','banana','img/1.jpg','2017-07-22 00:00:00','hahaha'),(10,'社会','abc','img/2.jpg','2017-07-09 00:00:00','aaaa'),(11,'精选','aaa','img/2.jpg','2017-07-21 00:00:00','ddd'),(12,'百家','www','img/2.jpg','2017-07-06 00:00:00','ccc'),(13,'女人','qqq','img/1.jpg','2017-07-09 00:00:00','ddd'),(14,'互联网','百度','img/2.jpg','2017-07-22 00:00:00','src'),(15,'百家','chrome','img/2.jpg','2017-07-02 00:00:00','srcc'),(18,'精选','管理','img/3.png','2017-07-14 00:00:00','euuu');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
