/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:15:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `sales` varchar(255) NOT NULL,
  `review` varchar(255) NOT NULL,
  `event` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  `hot` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop1.jpg', '148.30', '9.89', '19628', '237', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('2', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop2.jpg', '32.60', '12.64', '19030', '848', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('3', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop3.jpg', '529.00', '17.63', '18475', '328', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('4', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop4.jpg', '125.00', '7.63', '17182', '335', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('5', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop5.jpg', '206.00', '34.33', '15805', '610', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('6', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop6.jpg', '87.30', '10.91', '15061', '298', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('7', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop7.jpg', '539.00', '17.97', '14682', '383', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('8', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop8.jpg', '583.00', '18.22', '13698', '146', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('9', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop9.jpg', '34.00', '34', '13532', '289', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('10', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop10.jpg', '54.00', '16.88', '13467', '553', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('11', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop11.jpg', '465.00', '31', '13036', '1067', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('12', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop12.jpg', '25.00', '50', '12015', '10', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('13', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop13.jpg', '73.00', '25', '11971', '104', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('14', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop14.jpg', '107.00', '35.67', '11231', '136', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('15', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop15.jpg', '419.00', '20.95', '11215', '134', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('16', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop16.jpg', '531.00', '17.7', '11105', '961', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('17', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop17.jpg', '552.00', '23', '11205', '437', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('18', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop18.jpg', '66.00', '33', '11090', '30', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('19', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop19.jpg', '93.00', '15.5', '10666', '185', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('20', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop20.jpg', '153.00', '19.13', '10439', '273', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('21', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop21.jpg', '187.00', '20', '10440', '12', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('22', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop22.jpg', '300.00', '21', '10442', '40', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('23', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop23.jpg', '350.00', '15', '10446', '59', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('24', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop24.jpg', '456.13', '16.67', '10448', '100', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('25', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop25.jpg', '123.45', '12.56', '10456', '124', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('26', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop26.jpg', '145.98', '28.98', '12456', '197', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('27', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop27.jpg', '567.89', '39.70', '12487', '237', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('28', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop28.jpg', '346.61', '25.79', '12499', '999', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('29', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop29.jpg', '871.90', '50.98', '12111', '189', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('30', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop30.jpg', '456.00', '34.90', '12467', '888', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('31', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop31.jpg', '777.00', '67.90', '15467', '768', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('32', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop32.jpg', '894.00', '78.00', '14467', '1000', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('33', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop33.jpg', '99.00', '16.54', '14487', '800', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('34', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop34.jpg', '100.00', '20.00', '14460', '999', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('35', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop35.jpg', '178.88', '34.66', '13460', '1111', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('36', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop36.jpg', '88.88', '16.66', '10460', '1212', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('37', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop37.jpg', '66.66', '18.88', '10490', '881', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('38', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop38.jpg', '166.66', '28.68', '12344', '995', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('39', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop39.jpg', '200.98', '34.00', '12357', '1212', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
INSERT INTO `goodslist` VALUES ('40', '宝路中小型成年犬粮牛肉干蔬菜及谷物狗粮.3kg', '../img/shop40.jpg', '666.66', '66.66', '15987', '1400', '[8.22-8.26]亚展148.3领', '直降免运费', '1', 'false');
SET FOREIGN_KEY_CHECKS=1;
