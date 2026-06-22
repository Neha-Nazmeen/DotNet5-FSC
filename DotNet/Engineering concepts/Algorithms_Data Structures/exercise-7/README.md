# Exercise 7 — Financial Forecasting (Recursive)

This exercise demonstrates a recursive approach to forecasting future values using past growth rates. It includes an explanation of recursion, a recursive implementation, and discussion of optimization.

1) Understand Recursive Algorithms
- Recursion: a function that calls itself to solve a smaller instance of the problem.
- Useful for problems that can be divided into similar subproblems (e.g., Fibonacci, tree traversals).

2) Setup
- `Forecast` class provides recursive computation for future value using a sequence of historical growth rates.

3) Implementation
- `TestForecast` demonstrates usage and compares with iterative approach.

4) Analysis
- Recursive time complexity depends on the recursion; naive recursion may be O(2^n) for overlapping subproblems (e.g., naive Fibonacci). The forecasting example below is O(n).
- Optimization: use memoization or convert to iterative solution to avoid stack overhead and redundant work.

How to compile & run:

# Compile
javac -d out src\main\java\com\example\algods\forecast\*.java

# Run
java -cp out com.example.algods.forecast.TestForecast
