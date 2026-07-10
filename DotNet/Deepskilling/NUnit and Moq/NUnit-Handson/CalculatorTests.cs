using NUnit.Framework;
using CalcLibrary;

namespace NUnitHandsOn.Tests;

[TestFixture]
public class CalculatorTests
{
    private Calculator _calculator;

    [SetUp]
    public void Setup()
    {
        _calculator = new Calculator();
    }

    [TearDown]
    public void TearDown()
    {
        _calculator = null!;
    }

    [Test]
    public void Add_ReturnsSum()
    {
        Assert.That(_calculator.Add(2, 3), Is.EqualTo(5));
    }

    [TestCase(1, 2, 3)]
    [TestCase(5, 5, 10)]
    [TestCase(-2, 4, 2)]
    public void Add_WithTestCase_ReturnsExpectedResult(int a, int b, int expected)
    {
        Assert.That(_calculator.Add(a, b), Is.EqualTo(expected));
    }

    [Test]
    [Ignore("Demonstration of Ignore attribute")]
    public void IgnoredTest()
    {
        Assert.Fail("This test is intentionally ignored.");
    }
}
