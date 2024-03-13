using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAutism.Data.Models;

[Table("users")]
public class User
{
    [Column("user_id")] [Key] public int Id { get; set; }
    [Column("email")]public string Email { get; set; }
    [Column("password")]public string Password { get; set; }
}