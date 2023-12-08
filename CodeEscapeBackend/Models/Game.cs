public class Game
{
    // to define the game, always ends with a 0
    public int Id { get; set; }
    // multiple games can have the same title 
    public string Title { get; set; }
    // description should be actually related to the game
    public string Description { get; set; }
    // date of the first publishing be it a beta version or an actual release
    public DateTime ReleaseDate { get; set; }
    // if price is set to 0.00 aka free the user will be promted with a chose the amount you like to pay
    public decimal Price { get; set; }
    // rating will be the median of all users who purchaced the game from 0 to 5
    public decimal Rating { get; set; }
    // Categories will include the the basic theme of the game, be it horror, action, adventure..
    public List<string> Categories { get; set; }
    // platforms are the operating systems that can run the game, windows, linux, android...
    public List<string> Platforms { get; set; }
    // Navigation property for many-to-many relationship
    public List<GameDeveloper> Developers { get; set; }
}
