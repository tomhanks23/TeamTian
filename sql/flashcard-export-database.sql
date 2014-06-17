-- phpMyAdmin SQL Dump
-- version 4.2.2
-- http://www.phpmyadmin.net
--
-- Host: rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com
-- Generation Time: Jun 17, 2014 at 12:03 AM
-- Server version: 5.6.13
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `teamtian`
--

-- --------------------------------------------------------

--
-- Table structure for table `flashcard`
--

CREATE TABLE IF NOT EXISTS `flashcard` (
`flashcard_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `flashcard_deck_id` int(11) DEFAULT NULL,
  `front_text` text,
  `back_text` text,
  `front_image` text,
  `back_image` text,
  `front_bg_color` varchar(20) DEFAULT NULL,
  `back_bg_color` varchar(20) DEFAULT NULL,
  `right_answer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `flashcard`
--

INSERT INTO `flashcard` (`flashcard_id`, `user_id`, `flashcard_deck_id`, `front_text`, `back_text`, `front_image`, `back_image`, `front_bg_color`, `back_bg_color`, `right_answer`) VALUES
(1, NULL, 1, 'What animal is this?', 'Lynx use their vision to hunt, but are helped in this activity by excellent hearing. Lynx usually sneak up on prey to within a few short bounds, and then pounce.\r\n   ', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', NULL, NULL, 'Lynx!'),
(2, NULL, 1, 'What animal is this?', 'Did you know a Platypus can sense the electrical fields of other animals?', 'http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg', 'http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg', NULL, NULL, 'Platypus!'),
(3, NULL, 1, 'What animal is this?', 'Hyenas are a genetic half-step between a dog and a cat. They have many attributes of both!', 'http://www.rhinoafrica.com/blog/wp-content/uploads/2013/02/hyena-pup.jpg', 'http://www.rhinoafrica.com/blog/wp-content/uploads/2013/02/hyena-pup.jpg', NULL, NULL, 'Hyena!'),
(4, NULL, 1, 'What Animal is This?', 'Wolf pups play a lot as they grow. They leap and pounce chase and wrestle, play hide and seek and tag. Just like you do!', 'http://img1.wikia.nocookie.net/__cb20121231170408/youngonespack/images/b/b4/Brown-wolf-pup.jpg', 'http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-Wolf-pup.jpg', NULL, NULL, 'Wolf!'),
(5, NULL, 1, 'What animal is this?', 'Twice the size of the average house cat, the ocelot is a sleek animal with a gorgeous dappled coat. These largely nocturnal cats use keen sight and hearing to hunt rabbits, rodents, iguanas, fish, and frogs. They also take to the trees and stalk monkeys or birds. Unlike many cats, they do not avoid water and can swim well.', 'http://images.nationalgeographic.com/wpf/media-live/photos/000/037/cache/ocelot-california-sartore_3729_990x742.jpg', 'http://babyanimalzoo.com/wp-content/uploads/2011/12/ocelot-kitten.jpg', NULL, NULL, 'Ocelot!'),
(23, 0, 100, '', '', '', '', 'rgb(115, 218, 255)', 'rgb(255, 41, 62)', ''),
(24, 0, 100, '', '', '', '', 'rgb(115, 218, 255)', 'rgb(255, 41, 62)', 'sfsd'),
(25, 100, 100, '', '', '', '', 'rgb(173, 216, 230)', 'rgb(247, 84, 84)', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flashcard`
--
ALTER TABLE `flashcard`
 ADD PRIMARY KEY (`flashcard_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flashcard`
--
ALTER TABLE `flashcard`
MODIFY `flashcard_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
