public class User
{
    // to define the user
    public int Id { get; set; }
    // multiple users can have the same username or Discriminator but not both at the same time
    public string Username { get; set; }
    public string Discriminator { get; set; }
    // each email corresponds to only one user
    public string Email { get; set; }
    // password can contain anything as long as it's atleas 8 characters long
    public string Password { get; set; }
    // a bio is only a short description written by the user, can be empty
    public string Bio { get; set; }
    // a list of ids of games the user made or contributed to
    public List<int> GamesMade { get; set; }
    // a list of ids of game assets the user made
    public List<int> GameAssetsMade { get; set; }
    // a list of confirmed games the user obtained
    public List<int> GamesPurchaced { get; set; }
    // a list of confirmed game assets the user obtained
    public List<int> GameAssetsPurchaced { get; set; }
    // a list of unconfirmed games(id ends with a 0) and game assets(id ends with a 1) the user added to the cart, the user can remove items from this list
    public List<int> ShoppingCart { get; set; }
    // an admin can remove, update or a add users, games, game assets to their liking
    public bool IsAdmin { get; set; }
    // Navigation property for many-to-many relationship
    public List<GameDeveloper> DevelopedGames { get; set; }
}
