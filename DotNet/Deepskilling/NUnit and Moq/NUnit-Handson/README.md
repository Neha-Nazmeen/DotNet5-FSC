# NUnit Hands-on Assessment

This assessment demonstrates a simple NUnit-based unit testing workflow in .NET. It introduces the basic concepts of unit testing, test setup and teardown, test cases, and ignored tests while keeping the example easy to follow.

## What this assessment covers
- The difference between unit testing and functional testing.
- The importance of automated testing in software development.
- How loose coupling and testable design make code easier to verify.
- A basic NUnit test project structure using a class library and a test project.
- Common NUnit attributes such as [TestFixture], [SetUp], [TearDown], [Test], [TestCase], and [Ignore].

## Project structure
- CalcLibrary.csproj: the class library project containing the calculator logic.
- CalcLibrary.cs: the Calculator class with simple arithmetic methods.
- CalcTests.csproj: the NUnit test project.
- CalculatorTests.cs: the test cases for the calculator methods.

## Example test cases
- Addition returns the expected sum.
- Multiple test case inputs validate the same method behavior.
- One test is intentionally ignored to show the Ignore attribute.

## Verification output
The project was restored and tested successfully with the following result:

```text
Passed!  - Failed: 0, Passed: 4, Skipped: 1, Total: 5
```

## Summary
This hands-on exercise provides a beginner-friendly introduction to NUnit and shows how to create, run, and verify unit tests in a .NET application.
