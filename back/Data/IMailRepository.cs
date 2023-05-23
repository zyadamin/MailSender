using System.Collections.Generic;
using System.Threading.Tasks;
using back.Models;

namespace back.Data
{
    public interface IMailRepository
    {

        Task<bool> addMail(Mail mail);
        Task<List<Mail>> getMails();

        Task<bool> sendMails(PersonsMail persons);

    }
}