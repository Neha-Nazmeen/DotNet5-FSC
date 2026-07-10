-- Exercise 1: Create a Stored Procedure
-- Goal: Create a stored procedure to retrieve employee details by department.
-- Steps:
-- 1. Define the stored procedure with a parameter for DepartmentID.
-- 2. Write the SQL query to select employee details based on the DepartmentID.
-- 3. Example insert stored procedure (sp_InsertEmployee) provided below.

-- Sample schema (for reference):
-- Departments(DepartmentID INT PRIMARY KEY, DepartmentName VARCHAR(100))
-- Employees(EmployeeID INT PRIMARY KEY, FirstName VARCHAR(50), LastName VARCHAR(50), DepartmentID INT, Salary DECIMAL(10,2), JoinDate DATE)

-- 1) Stored procedure to retrieve employee details by DepartmentID
CREATE PROCEDURE sp_GetEmployeesByDepartment
  @DepartmentID INT
AS
BEGIN
  SET NOCOUNT ON;
  SELECT EmployeeID, FirstName, LastName, DepartmentID, Salary, JoinDate
  FROM Employees
  WHERE DepartmentID = @DepartmentID;
END;
GO

-- 2) Example: insert procedure as requested in the prompt
CREATE PROCEDURE sp_InsertEmployee
  @FirstName VARCHAR(50),
  @LastName VARCHAR(50),
  @DepartmentID INT,
  @Salary DECIMAL(10,2),
  @JoinDate DATE
AS
BEGIN
  SET NOCOUNT ON;
  INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
  VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO

-- Usage examples:
-- exec sp_GetEmployeesByDepartment @DepartmentID = 2;
-- exec sp_InsertEmployee 'Alice','Walker',2,4500.00,'2023-06-01';
