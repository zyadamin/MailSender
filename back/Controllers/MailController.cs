
using System.Threading.Tasks;
using back.Data;
using back.Models;
using Microsoft.AspNetCore.Mvc;


namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        private readonly IMailRepository repo;
        public MailController(IMailRepository repo)
        {
            this.repo = repo;

        }

        //handel retrieve mails 
        //Mail/retrieve
        [HttpGet("retrieve")]
        public async Task<ActionResult> GetMails()
        {
            return Ok(await repo.getMails());
        }

        //handel add mails to database
        //Mail/add
        [HttpPost("add")]
        public async Task<ActionResult> PostMail([FromBody] Mail mail)
        {
            return Ok(await repo.addMail(mail));
        }


        //handel send mail to persons
        //Mail/send
        [HttpPost("send")]
        public async Task<bool> SendMail([FromBody] PersonsMail persons)
        {
            return await repo.sendMails(persons);
        }

    }
}