using Moq;
using NUnit.Framework;
using CustomerCommLib;

namespace CustomerCommLib.Tests;

[TestFixture]
public class CustomerCommTests
{
    private Mock<IMailSender> _mailSenderMock;
    private CustomerComm _customerComm;

    [OneTimeSetUp]
    public void OneTimeSetUp()
    {
        _mailSenderMock = new Mock<IMailSender>();
    }

    [SetUp]
    public void Setup()
    {
        _mailSenderMock.Reset();
        _customerComm = new CustomerComm(_mailSenderMock.Object);
    }

    [TestCase("cust123@abc.com", "Some Message")]
    public void SendMailToCustomer_ReturnsTrue_WhenMailSenderSucceeds(string toAddress, string message)
    {
        _mailSenderMock
            .Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>()))
            .Returns(true);

        bool result = _customerComm.SendMailToCustomer();

        Assert.That(result, Is.True);
    }
}
