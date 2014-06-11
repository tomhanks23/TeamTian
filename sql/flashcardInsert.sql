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

INSERT INTO flashcard (flashcard_deck_id, front_text, back_text, front_image, back_image, right_answer, wrong_answer) 
VALUES (1, 'What animal is this?', 'This is a Lynx. Lynx have a short tail and characteristic tufts of black hair on the tips of their ears; large, padded paws for walking on snow; and long whiskers on the face. Under their neck, they have a ruff which has black bars, is not very visible, and resembles a bow tie.', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', 'http://upload.wikimedia.org/wikipedia/commons/6/68/Lynx_lynx_poing.jpg', 'This is a lynx!', 'This is a lion!');

INSERT INTO flashcard (flashcard_deck_id, front_text, back_text, front_image, back_image, right_answer, wrong_answer) 
VALUES (1, 'What animal is this?', 'This is a Platypus! The Playtypus is the only mammal (apart from at least one species of dolphin) known to have a sense of electroreception: they locate their prey in part by detecting electric fields generated by muscular contractions. The platypus electroreception is the most sensitive of all mammals.', 'http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg','http://photovide.com/wp-content/uploads/2012/03/Platypus-Babies-005.jpg', 'This is a platypus!', 'This is a duck!');

INSERT INTO flashcard (flashcard_deck_id, front_text, back_text, front_image, back_image, right_answer, wrong_answer) 
VALUES (1, 'What animal is this?', 'This is a Hyena! Hyenas are a genetic half-step between a dog and a cat, and have qualities of BOTH!', 'http://fc09.deviantart.net/fs71/i/2012/154/5/6/cute_hyena_by_theogoth-d524d51.jpg', 'http://fc09.deviantart.net/fs71/i/2012/154/5/6/cute_hyena_by_theogoth-d524d51.jpg', 'This is a Hyena!', 'This is a Dingo!');

INSERT INTO `teamtian`.`flashcard` (`flashcard_id`, `flashcard_deck_id`, `front_text`, `back_text`, `front_image`, `back_image`, `front_bg_color`, `back_bg_color`, `right_answer`) 
VALUES (NULL, '1', 'What Animal is This?', 'Wolf pups play a lot as they''re growing. They leap and pounce, chase and wrestle, play hide-and-seek and tag—a lot like you do! ', 'http://img1.wikia.nocookie.net/__cb20121231170408/youngonespack/images/b/b4/Brown-wolf-pup.jpg', 'http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-Wolf-pup.jpg', NULL, NULL, 'Wolf!');

INSERT INTO `teamtian`.`flashcard` (`flashcard_id`, `flashcard_deck_id`, `front_text`, `back_text`, `front_image`, `back_image`, `front_bg_color`, `back_bg_color`, `right_answer`) 
VALUES (NULL, '1', 'What animal is this?', 'Twice the size of the average house cat, the ocelot is a sleek animal with a gorgeous dappled coat. These largely nocturnal cats use keen sight and hearing to hunt rabbits, rodents, iguanas, fish, and frogs. They also take to the trees and stalk monkeys or birds. Unlike many cats, they do not avoid water and can swim well.', 'http://images.nationalgeographic.com/wpf/media-live/photos/000/037/cache/ocelot-california-sartore_3729_990x742.jpg', 'http://babyanimalzoo.com/wp-content/uploads/2011/12/ocelot-kitten.jpg', NULL, NULL, 'Ocelot!');