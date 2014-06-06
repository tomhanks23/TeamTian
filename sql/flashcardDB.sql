CREATE TABLE `user` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(50) DEFAULT NULL,
 `email` varchar(60) DEFAULT NULL,
 `password` char(20) DEFAULT NULL,
 PRIMARY KEY (`user_id`)
);


-- cat dumps a file
cat /Users/FMD/Sites/TeamTian/sql/flashcardDB.sql | mysql -h rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com -u teamtian -p teamtian

-h rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com -u teamtian -p