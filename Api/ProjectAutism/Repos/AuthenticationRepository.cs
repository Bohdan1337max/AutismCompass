using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public class AuthenticationRepository : IAuthenticationRepository
{
    private readonly AutismDbContext _autismDbContext;
    private readonly IConfiguration _configuration;
    private static readonly TimeSpan TokeLifetime = TimeSpan.FromHours(8);
    public AuthenticationRepository(AutismDbContext autismDbContext, IConfiguration configuration)
    {
        _autismDbContext = autismDbContext;
        _configuration = configuration;
    }

    public string? RegisterNewUser(string email, string password)
    {
        var newUser = new Data.Models.User
        {
            Email = email,
            Password = password
        };
         var userFromDb = _autismDbContext.Users.FirstOrDefault(x => x.Email == email);
         if (userFromDb != null)
             return null;
        _autismDbContext.Users.Add(newUser);
        _autismDbContext.SaveChanges();

        var jwt = GenerateToken(email);
        
        return jwt;
    }
    
    private string GenerateToken(string email)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]!);

         var claims = new List<Claim>
         {
             new(JwtRegisteredClaimNames.Email, email)
         };
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.Add(TokeLifetime),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwt = tokenHandler.WriteToken(token);
        return jwt;
    }
    
}