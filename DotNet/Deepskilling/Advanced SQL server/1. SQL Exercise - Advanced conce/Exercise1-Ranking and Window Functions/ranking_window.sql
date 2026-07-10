-- Exercise 1: Ranking and Window Functions
-- Goal: Use ROW_NUMBER(), RANK(), DENSE_RANK(), OVER(), and PARTITION BY.
-- Scenario: Find the top 3 most expensive products in each category using different ranking functions.

-- Assumptions: Products(ProductID, ProductName, CategoryID, Price)

-- 1) Using ROW_NUMBER() to assign a unique rank within each category and pick top 3
WITH RankedProducts AS (
  SELECT
    p.ProductID,
    p.ProductName,
    p.CategoryID,
    p.Price,
    ROW_NUMBER() OVER (PARTITION BY p.CategoryID ORDER BY p.Price DESC) AS rn_row,
    RANK()      OVER (PARTITION BY p.CategoryID ORDER BY p.Price DESC) AS rn_rank,
    DENSE_RANK() OVER (PARTITION BY p.CategoryID ORDER BY p.Price DESC) AS rn_dense
  FROM Products p
)
SELECT ProductID, ProductName, CategoryID, Price, rn_row
FROM RankedProducts
WHERE rn_row <= 3
ORDER BY CategoryID, rn_row;

-- 2) Compare RANK() and DENSE_RANK(): show how ties are handled
SELECT ProductID, ProductName, CategoryID, Price, rn_rank, rn_dense
FROM RankedProducts
WHERE rn_rank <= 5 -- inspect top 5 ranks to see tie behavior
ORDER BY CategoryID, rn_rank, rn_dense;

-- Notes:
-- - ROW_NUMBER assigns a distinct sequential number within each partition even if prices tie.
-- - RANK leaves gaps when ties occur (e.g., 1,2,2,4).
-- - DENSE_RANK does not leave gaps (e.g., 1,2,2,3).

-- If you want to return ties for the "top 3" by price you can use rn_rank <= 3 to include ties.
-- Example: return all products whose RANK() <= 3 in each category
SELECT ProductID, ProductName, CategoryID, Price
FROM (
  SELECT p.*, RANK() OVER (PARTITION BY CategoryID ORDER BY Price DESC) AS rnk
  FROM Products p
) t
WHERE rnk <= 3
ORDER BY CategoryID, Price DESC;
