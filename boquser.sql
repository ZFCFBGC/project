/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : boquser

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:14:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bqzhuce
-- ----------------------------
DROP TABLE IF EXISTS `bqzhuce`;
CREATE TABLE `bqzhuce` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bqzhuce
-- ----------------------------
INSERT INTO `bqzhuce` VALUES ('12', 'guoqigeng', 'asdfg123', null, '15072497577', '2018-08-26 17:55:17');
INSERT INTO `bqzhuce` VALUES ('5', 'jordan', 'asdfg123', null, '13635950470', '2018-08-22 10:40:50');
INSERT INTO `bqzhuce` VALUES ('6', 'zhang', 'asdfg123', null, '13298701234', '2018-08-22 10:49:03');
INSERT INTO `bqzhuce` VALUES ('7', 'guoqi', 'asdfg123', null, '13298701235', '2018-08-22 10:50:14');
INSERT INTO `bqzhuce` VALUES ('8', 'dengz', 'asdfg123', null, '13298702345', '2018-08-22 10:52:14');
INSERT INTO `bqzhuce` VALUES ('9', 'whqrt', 'asdfg123', null, '13635981234', '2018-08-22 10:58:08');
INSERT INTO `bqzhuce` VALUES ('11', 'asdfg', 'asdfg123', null, '18379930470', '2018-08-26 15:28:43');
SET FOREIGN_KEY_CHECKS=1;
