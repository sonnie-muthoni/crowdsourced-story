CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);