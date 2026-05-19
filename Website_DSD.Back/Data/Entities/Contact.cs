namespace Data.Entities;

public class Contact : BaseEntity
{
    [Required]
    [MaxLength(250)]
    public required string Name { get; set; }

    [Required]
    [MaxLength(255)]
    [EmailAddress]
    public required string Email { get; set; }

    [MaxLength(20)]
    [Required]
    public string? Phone { get; set; }

    [MaxLength(500)]
    [Required]
    public string? Company { get; set; }

    [MaxLength(500)]
    public string? Project { get; set; }

    [MaxLength(2000)]
    public  string? Message { get; set; }


}
