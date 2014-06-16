CREATE DATABASE teamtian;


CREATE TABLE user (
 user_id int(11) NOT NULL AUTO_INCREMENT,
 first_name varchar(50) DEFAULT NULL,
 email varchar(60) DEFAULT NULL,
 password char(20) DEFAULT NULL,
 PRIMARY KEY (user_id)
);


CREATE TABLE flashcard_deck (
  flashcard_deck_id int(11) NOT NULL AUTO_INCREMENT,
  flashcard_deck_name varchar(50) DEFAULT NULL,
  PRIMARY KEY (flashcard_deck_id)
);



CREATE TABLE flashcard (
  flashcard_id int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) DEFAULT NULL,
  flashcard_deck_id int(11) DEFAULT NULL,
  front_text text,
  back_text text,
  front_image text,
  back_image text,
  front_bg_color varchar(20) DEFAULT NULL,
  back_bg_color varchar(20) DEFAULT NULL,
  right_answer varchar(255) DEFAULT NULL,
  PRIMARY KEY (flashcard_id)
);



mysql -h rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com -u teamtian -p teamtian

-- cat dumps a file
cat /Library/WebServer/Documents/TeamTian/sql/flashcardDB.sql | mysql -h rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com -u teamtian -p teamtian

-h rockit.ccyd2ljjwzet.us-east-1.rds.amazonaws.com -u teamtian -p
