-- Exercise 5: Return Data from a Stored Procedure
-- Goal: Create a stored procedure that returns the total number of employees in a department.
-- Steps:
-- 1. Define the stored procedure with a parameter for DepartmentID.
-- 2. Write the SQL query to count the number of employees in the specified department.
-- 3. Save the stored procedure by executing the Stored procedure content.

-- Stored procedure that returns employee count as a result set
CREATE PROCEDURE sp_GetEmployeeCountByDept
  @DepartmentID INT
AS
BEGIN
  SET NOCOUNT ON;
  SELECT @DepartmentID AS DepartmentID, COUNT(*) AS EmployeeCount
  FROM Employees
  WHERE DepartmentID = @DepartmentID;
END;
GO

-- Alternative: return the count via an OUTPUT parameter
CREATE PROCEDURE sp_GetEmployeeCountByDept_Out
  @DepartmentID INT,
  @TotalEmployees INT OUTPUT
AS
BEGIN
  SET NOCOUNT ON;
  SELECT @TotalEmployees = COUNT(*)
  FROM Employees
  WHERE DepartmentID = @DepartmentID;
END;
GO

-- Usage examples:
-- -- As resultset
-- exec sp_GetEmployeeCountByDept @DepartmentID = 1;
-- -- Using output parameter
-- declare @tot int;
-- exec sp_GetEmployeeCountByDept_Out @DepartmentID = 1, @TotalEmployees = @tot OUTPUT;
-- select @tot as TotalEmployees;
