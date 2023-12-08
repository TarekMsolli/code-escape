public class GameJam {
    // to define a game jame
    public int Id { get; set; }
    // a game jam's title should be unique 
    public string Title { get; set; }
    // a description of the rules and constraints of the challenge 
    public string Description { get; set; }
    // the username#discriminator of the sponsor of the gamejam or a the name of the person incase said person has no account
    public string Sponsor { get; set; }
    // starting date for the game jam submissions
    public DateTime StartingDate { get; set; }
    // ending date of the game jam submssions
    public DateTime ClosingDate { get; set; }
    // list of themes added to the game by default if it was submitted to the 
    public List<string> Categories { get; set; }
    // list of platforms that the submitted game should have one of
    public List<string> Platforms { get; set; }
    // an ordered list of game ids from the best to worst 
    public List<int> Leaderboard { get; set; }
}