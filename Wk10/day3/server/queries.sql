-- Get all info on all elements
SELECT * FROM elements;

-- Get all elements in ascending order by atomic number
SELECT * FROM elements
ORDER BY atomic_number;

-- Get name and atomic number from all elements
SELECT name, atomic_number FROM elements;

-- Get names, atomic numbers, and names of groups of all elements
SELECT name, atomic_number, groups.name FROM elements
JOIN groups ON (group_id = groups.id);

-- Get all elements who's abbreviation starts with 'H'
SELECT * FROM elements
WHERE abbreviation LIKE 'H%';

-- Get names of all elements that are metalloids
SELECT name FROM elements
JOIN groups ON (group_id = groups.id)
WHERE groups.id = 3;

-- Get names and atomic number from elements that are Noble gases and Reactive Nonmetals
SELECT name, atomic_number FROM elements
JOIN groups ON (group_id = groups.id)
WHERE groups.id IN (1,2);

-- Tin is mislabled as an Alkali metal, update it to the correct group of Post Transition Metal
UPDATE elements
SET group_id = 6
WHERE name = 'Tin';

-- Get the 5 largest elements by atomic number
SELECT * FROM elements
ORDER BY atomic_number DESC
LIMIT 5;

-- Unobtanium isn't real, so let's delete it
DELETE FROM elements
where name = 'Unobtanium';