INSERT INTO authors (name, email, bio)
VALUES
('Carlos Ramirez', 'carlos@test.com', 'Football analyst and writer'),
('Laura Martinez', 'laura@test.com', 'Tech blogger and backend developer'),
('Andres Gomez', 'andres@test.com', 'Sports journalist');

INSERT INTO posts (author_id, title, content, published)
VALUES
(
    1,
    'Why PostgreSQL is Awesome',
    'PostgreSQL is one of the most powerful relational databases.',
    true
),
(
    2,
    'Learning Express Step by Step',
    'Express makes backend development easier and faster.',
    true
),
(
    3,
    'Football Analytics in 2026',
    'Modern football uses advanced statistics and AI.',
    false
);