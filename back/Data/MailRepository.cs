using System.Collections.Generic;
using System.Threading.Tasks;
using back.MailService;
using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Data
{
    public class MailRepository : IMailRepository
    {
        private readonly DataContext db;
        private readonly IEmailSender sender;
        public MailRepository(DataContext db, IEmailSender sender)
        {
            this.sender = sender;
            this.db = db;

        }
        public async Task<bool> addMail(Mail mail)
        {
            await db.Mails.AddAsync(mail);
            await db.SaveChangesAsync();

            return true;
        }

        public async Task<List<Mail>> getMails()
        {
            return await db.Mails.ToListAsync();
        }

        public async Task<bool> sendMails(PersonsMail persons)
        {

            Mail mail = await db.Mails.FirstOrDefaultAsync(m => m.id == persons.MailID);

            for (int i = 0; i < persons.persons.Count; i++)
            {
                await sender.SendEmailAsync(persons.persons[i], mail.subject, mail.message);
            }

            return true;
        }
    }
}