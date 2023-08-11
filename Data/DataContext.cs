using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
        public class DataContext : DbContext        //this class going to derive from entity framework class ex (dbcontext)
        {
                public DataContext(DbContextOptions options) : base(options)
                {
                }
                public DbSet<AppUser> Users { get; set; }           //refers to tables inside our database
        }
}