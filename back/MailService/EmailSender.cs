using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace back.MailService
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential("zyadamin333@gmail.com", "ovlnmmkuftiytoay")
            };

            return client.SendMailAsync(new MailMessage("zyadamin333@gmail.com", email, subject, message));
        }
    }
}