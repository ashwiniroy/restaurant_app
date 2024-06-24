CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    latitude VARCHAR(500) NOT NULL,
    longitude VARCHAR(500) NOT NULL
);

