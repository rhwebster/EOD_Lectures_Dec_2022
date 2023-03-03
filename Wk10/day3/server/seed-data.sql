PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS elements;

CREATE TABLE groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50)
);

CREATE TABLE elements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) UNIQUE,
    atomic_number INTEGER UNIQUE,
    abbreviation VARCHAR(2) UNIQUE,
    group_id INTEGER REFERENCES groups(id)
);

INSERT INTO groups (name)
VALUES
    ('Reactive nonmetals'),
    ('Noble gases'),
    ('Metalloids'),
    ('Alkali Metals'),
    ('Transition Metals'),
    ('Post-transition metals'),
    ('Pandora metals')

INSERT INTO elements (name, atomic_number, abbreviation, group_id)
VALUES
    ('Oxygen', 8, 'O', 1),
    ('Krypton', 36, 'Kr', 2),
    ('Silicon', 14, 'Si', 3),
    ('Helium', 2, 'He', 2),
    ('Sodium', 11, 'Na', 4),
    ('Silver', 47, 'Au', 5),
    ('Carbon', 6, 'C', 1),
    ('Argon', 18, 'Ar', 2),
    ('Chlorine', 17, 'Cl', 1),
    ('Tin', 50, 'Sn', 4),
    ('Boron', 5, 'B', 3),
    ('Radon', 86, 'Rn', 2),
    ('Hydrogen', 1, 'H', 1)
    ('Aluminum', 13, 'Al', 6),
    ('Unobtanium', 310, 'Ubh', 7);