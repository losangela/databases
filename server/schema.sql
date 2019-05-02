CREATE DATABASE chat;

USE chat;



CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_name VARCHAR(20) NOT NULL
);

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(20) NOT NULL
);

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_users INT NOT NULL,
  message_text TEXT NOT NULL,
  message_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  id_rooms INT NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users(user_id),
  FOREIGN KEY (id_rooms) REFERENCES rooms(room_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

