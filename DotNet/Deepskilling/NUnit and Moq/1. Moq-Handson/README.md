# Moq Hands-on Assignment

This assignment demonstrates how to write unit tests for code that depends on external services by using Moq and NUnit. The example models a mail-sending component so the test can verify behavior without sending any real email.

## What this exercise covers
- Mocking and isolation in unit testing
- Dependency Injection through constructor injection
- Creating testable code with Moq
- Mocking an email sender dependency without sending real mail
- Using NUnit attributes such as TestFixture, OneTimeSetUp, and TestCase

## Project structure
- CustomerCommLib.csproj: class library with the code under test
- MailSender.cs: interface and implementation for sending mail
- CustomerComm.cs: class under test that depends on IMailSender
- CustomerComm.Tests.csproj: NUnit test project with Moq
- CustomerCommTests.cs: tests that mock IMailSender

## Assignment summary
The business scenario is a customer communication module that needs to send mail during a transaction. Instead of reaching out to a real SMTP server during unit tests, the dependency is replaced with a mock object, making the code faster, isolated, and easier to verify.

## Verification output
The project was restored and tested successfully with the following result:

```text
Passed!  - Failed: 0, Passed: 1, Skipped: 0, Total: 1
```
