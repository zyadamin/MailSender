using back.Models;
using Microsoft.EntityFrameworkCore;

namespace back.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }


        public DbSet<Mail> Mails { get; set; }

    }
}