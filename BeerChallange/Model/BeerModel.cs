using Newtonsoft.Json;

namespace BeerChallange.Model
{
    public class Rootobject
{
    public BeerModel[] Property1 { get; set; }
}

public class BeerModel
{
    [JsonProperty("id")]
    public int Id { get; set; }
    [JsonProperty("name")]
    public string Name { get; set; }
    [JsonProperty("tagline")]
    public string TagLine { get; set; }
    [JsonProperty("first_brewed")]
    public string FirstBrewed { get; set; }
    [JsonProperty("description")]
    public string Description { get; set; }
    [JsonProperty("image_url")]
    public string ImageUrl { get; set; }
    [JsonProperty("abv")]
    public float ABV { get; set; }
    [JsonProperty("ibu")]
    public float? IBU { get; set; }
    [JsonProperty("target_fg")]
    public int TargetFg { get; set; }
    [JsonProperty("target_og")]
    public float TargetOg { get; set; }
    [JsonProperty("ebc")]
    public int? EBC { get; set; }
    [JsonProperty("srm")]
    public float? SRM { get; set; }
    [JsonProperty("ph")]
    public float? PH { get; set; }
    [JsonProperty("attenuation_level")]
    public float AttenuationLevel { get; set; }
    [JsonProperty("volume")]
    public Volume Volume { get; set; }
    [JsonProperty("boil_volume")]
    public Boil_Volume BoilVolume { get; set; }
    [JsonProperty("method")]
    public Method Method { get; set; }
    public Ingredients Ingredients { get; set; }
    [JsonProperty("food_pairing")]
    public string[] FoodPairing { get; set; }
    [JsonProperty("brewers_tips")]
    public string BrewersTips { get; set; }
    [JsonProperty("contributed_by")]
    public string ContributedBy { get; set; }
}

public class Volume
{
    public int Value { get; set; }
    public string Unit { get; set; }
}

public class Boil_Volume
{
    public int Value { get; set; }
    public string Unit { get; set; }
}

public class Method
{
    [JsonProperty("mash_temp")]
    public Mash_Temp[] MashTemp { get; set; }
    public Fermentation Fermentation { get; set; }
    public string Twist { get; set; }
}

public class Fermentation
{
    public Temp Temp { get; set; }
}

public class Temp
{
    public int Value { get; set; }
    public string Unit { get; set; }
}

public class Mash_Temp
{
    public Temp1 Temp { get; set; }
    public int? duration { get; set; }
}

public class Temp1
{
    public int Value { get; set; }
    public string Unit { get; set; }
}

public class Ingredients
{
    public Malt[] Malt { get; set; }
    public Hop[] Hops { get; set; }
    public string Yeast { get; set; }
}

public class Malt
{
    public string Name { get; set; }
    public Amount Mount { get; set; }
}

public class Amount
{
    public float Value { get; set; }
    public string Unit { get; set; }
}

public class Hop
{
    public string Name { get; set; }
    public Amount1 Amount { get; set; }
    public string Add { get; set; }
    public string Attribute { get; set; }
}

public class Amount1
{
    public float Value { get; set; }
    public string Unit { get; set; }
}

}
