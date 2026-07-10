# Exercise 2 — E-commerce Platform Search Function

This exercise demonstrates linear and binary search implementations for an e-commerce product catalog, plus an explanation of Big O notation and comparison of algorithms.

1) Understand Asymptotic Notation
- Big O describes the upper bound of an algorithm's growth rate as input size increases.
- Best/Average/Worst cases:
  - Linear search: Best O(1) (found at first position), Average O(n/2) ≈ O(n), Worst O(n)
  - Binary search: Best O(1), Average O(log n), Worst O(log n) — requires sorted input

2) Setup
- `Product` class contains `productId`, `productName`, `category`.

3) Implementation
- `SearchDemo` contains implementations for linear search (by name) and binary search (by id) and small test harness.

4) Analysis
- Linear search is O(n), binary search is O(log n).
- For large, frequently queried and mostly static catalogs, binary search (or better: indexing, B-trees, full-text search, inverted indexes) is preferable. For small catalogs or unsorted/one-off searches, linear search may suffice.

How to compile & run (from project root):

# Compile
javac -d out src\main\java\com\example\algods\search\*.java

# Run
java -cp out com.example.algods.search.SearchDemo
