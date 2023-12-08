using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Game> Games { get; set; }
    public DbSet<GameAsset> GameAssets { get; set; }
    public DbSet<GameJam> GameJams { get; set; }
    public DbSet<User> Users { get; set; }

    public DbSet<GameDeveloper> GameDevelopers { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<GameDeveloper>()
            .HasKey(gd => new { gd.GameId, gd.UserId });

        modelBuilder.Entity<GameDeveloper>()
            .HasOne(gd => gd.Game)
            .WithMany(g => g.Developers)
            .HasForeignKey(gd => gd.GameId);

        modelBuilder.Entity<GameDeveloper>()
            .HasOne(gd => gd.User)
            .WithMany(u => u.DevelopedGames)
            .HasForeignKey(gd => gd.UserId);
        base.OnModelCreating(modelBuilder);
    }
}
