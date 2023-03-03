DROP TABLE IF EXISTS elements;

CREATE TABLE elements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) UNIQUE,
    atomic_number INTEGER UNIQUE,
    abbreviation VARCHAR(2) UNIQUE,
    element_group VARCHAR(50)
);

INSERT INTO elements (name, atomic_number, abbreviation, element_group)
VALUES
    ('Oxygen', 8, 'O', 'Reactive nonmetals'),
    ('Krypton', 36, 'Kr', 'Noble gases'),
    ('Silicon', 14, 'Si', 'Metalloids'),
    ('Helium', 2, 'He', 'Noble gases'),
    ('Sodium', 11, 'Na', 'Alkali Metals'),
    ('Silver', 47, 'Au', 'Transition Metals'),
    ('Carbon', 6, 'C', 'Reactive nonmetals'),
    ('Argon', 18, 'Ar', 'Noble gases'),
    ('Chlorine', 17, 'Cl', 'Reactive nonmetals'),
    ('Tin', 50, 'Sn', 'Alkali metals'),
    ('Boron', 5, 'B', 'Metalloids'),
    ('Radon', 86, 'Rn', 'Noble gases'),
    ('Aluminum', 13, 'Al', 'Post-transition metals');
    ('Unobtanium', 310, 'Ubh', 'Pandora metals')