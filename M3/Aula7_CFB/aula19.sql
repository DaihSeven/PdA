USE sakila;

#consulta que retorna a data de locação, o nome do cliente e o título do filme alugado
SELECT * FROM rental LIMIT 10;
SELECT * FROM customer LIMIT 10;
SELECT * FROM inventory LIMIT 10;
SELECT * FROM film LIMIT 10;

#Relacionamentos entre as Tabelas
#rental está relacionada com customer através de customer_id.
#rental está relacionada com inventory através de inventory_id.
#inventory está relacionada com film através de film_id.

SELECT 
    r.rental_date, 
    c.first_name, c.last_name AS customer_name, 
    f.title AS film_title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id;

select customer.first_name, customer.last_name, rental.rental_date, film.title
from customer 
inner join  rental  on rental.customer_id = customer.customer_id
inner join  inventory on rental.inventory_id = inventory.inventory_id
inner join  film on film.film_id = inventory.film_id;

/*Explicação da Consulta
rental r: Seleciona a tabela rental e a apelida como r.
customer c: Seleciona a tabela customer e a apelida como c.
inventory i: Seleciona a tabela inventory e a apelida como i.
film f: Seleciona a tabela film e a apelida como f.
JOIN: Realiza a junção das tabelas com base nas chaves estrangeiras.
r.rental_date: Retorna a data de locação.
c.first_name || ' ' || c.last_name: Concatena o nome e sobrenome do cliente.
f.title: Retorna o título do filme.
*/
# identificar e listar os filmes que nunca foram alugados
SELECT * FROM film LIMIT 10;
SELECT * FROM inventory LIMIT 10;
SELECT * FROM rental LIMIT 10;

SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.rental_id IS NULL;

/*
Explicação da Consulta
film f: Seleciona a tabela film e a apelida como f.
LEFT JOIN inventory i ON f.film_id = i.film_id: Faz um LEFT JOIN com a tabela inventory para obter os itens de inventário associados a cada filme.
LEFT JOIN rental r ON i.inventory_id = r.inventory_id: Faz um LEFT JOIN com a tabela rental para verificar se os itens de inventário foram alugados.
WHERE r.rental_id IS NULL: Filtra os resultados para incluir apenas os filmes que não têm correspondência na tabela rental, ou seja, 
nunca foram alugados.
*/
