CREATE TABLE `user` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(50) DEFAULT NULL,
 `email` varchar(60) DEFAULT NULL,
 `password` char(20) DEFAULT NULL,
 PRIMARY KEY (`user_id`)
);

