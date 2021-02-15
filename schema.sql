-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- to import this file from
--  1) the command line run mysql -u <user> -p < <path to file>
--  2) the mysql command line client run source <absolute file path>

DROP DATABASE IF EXISTS fullstackPokemon;

CREATE DATABASE fullstackPokemon;

USE fullstackPokemon;

CREATE TABLE IF NOT EXISTS pokemon (
  id integer UNIQUE PRIMARY KEY,
  name varchar(255),
  level integer,
  type varchar(255),
  picture varchar(255)
);



INSERT INTO pokemon (id, name, level, type, picture) VALUES (1, "bulbasaur", 1, "grass", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
INSERT INTO pokemon (id, name, level, type, picture) VALUES (4, "charmander", 1, "fire", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png");
INSERT INTO pokemon (id, name, level, type, picture) VALUES (6, "squirtle", 1, "water", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png");
