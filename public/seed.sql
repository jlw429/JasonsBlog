DROP DATABASE IF EXISTS jasons_blog;

CREATE DATABASE jasons_blog;

USE jasons_blog;

CREATE TABLE blog (
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
CreationDate datetime default current_timestamp,
Author VARCHAR(100) NOT NULL,
Title VARCHAR(100) NOT NULL,
Blog_Body TEXT NOT NULL
);