using System.Collections.Generic;

namespace back.Models
{
    public class PersonsMail
    {
        public PersonsMail(int id, List<string> mail)
        {
            MailID = id;
            persons = mail;

        }
        public int MailID { get; set; }
        public List<string> persons { get; set; }
    }
}