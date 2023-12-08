public class GameAsset
{
    // to define a game asset
    public int Id { get; set; }
    // multiple assets can have the same name 
    public string Title { get; set; }
    // a description can be whatever the user choses
    public string Description { get; set; }
    // only one developer can be attributed to asset
    public int DeveloperId { get; set; }
    // day of the publish of the asset
    public DateTime ReleaseDate { get; set; }
    // if price is free then the user will be promted with a chose your price option
    public decimal Price { get; set; }
    // a rating is the median of all user rating that purchaced the asset from 0 to 5
    public decimal Rating { get; set; }
    // tags are a list of short descriptions for the asset that don't have to be predefined in the db
    public List<string> Tags { get; set; }
    // Navigation property for the developer
    public User Developer { get; set; }
}
