INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Marlee', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Harlee', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Farley', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Parley', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Charlie', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Carlie', 'marMom@gmail.com', 'aabb111222');
INSERT INTO user (`user_id`, `email`, `password`)
VALUES ('Calvin', 'MrsHobbes@gmail.com', 'aabb111222');



INSERT INTO `flashcard` (`flashcard_id`, `flashcard_deck_id`, `front_text`, `back_text`, `front_image`, `back_image`, `front_bg_color`, `back_bg_color`, `right_answer`) VALUES
(1, 1, 'What animal is this?', 'Lynx use their vision to hunt, but are helped in this activity by excellent hearing. Lynx usually sneak up on prey to within a few short bounds, and then pounce.\r\n   ', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', NULL, NULL, 'Lynx!'),
(2, 1, 'What animal is this?', 'Did you know a Platypus can sense the electrical fields of other animals?', 'http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg', 'http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg', NULL, NULL, 'Platypus!'),
(3, 1, 'What animal is this?', 'Hyenas are a genetic half-step between a dog and a cat. They have many attributes of both!', 'http://www.rhinoafrica.com/blog/wp-content/uploads/2013/02/hyena-pup.jpg', 'http://www.rhinoafrica.com/blog/wp-content/uploads/2013/02/hyena-pup.jpg', NULL, NULL, 'Hyena!'),
(4, 1, 'What Animal is This?', 'Wolf pups play a lot as they''re growing. They leap and pounce, chase and wrestle, play hide-and-seek and tag—a lot like you do! \r\n', 'http://img1.wikia.nocookie.net/__cb20121231170408/youngonespack/images/b/b4/Brown-wolf-pup.jpg', 'http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-Wolf-pup.jpg', NULL, NULL, 'Wolf!'),
(5, 1, 'What animal is this?', 'Twice the size of the average house cat, the ocelot is a sleek animal with a gorgeous dappled coat. These largely nocturnal cats use keen sight and hearing to hunt rabbits, rodents, iguanas, fish, and frogs. They also take to the trees and stalk monkeys or birds. Unlike many cats, they do not avoid water and can swim well.', 'http://images.nationalgeographic.com/wpf/media-live/photos/000/037/cache/ocelot-california-sartore_3729_990x742.jpg', 'http://babyanimalzoo.com/wp-content/uploads/2011/12/ocelot-kitten.jpg', NULL, NULL, 'Ocelot!');

ALTER TABLE `flashcard`
 ADD PRIMARY KEY (`flashcard_id`);



















