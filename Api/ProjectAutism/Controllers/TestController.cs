using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("api/auth")]
public class TestController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private static readonly TimeSpan TokeLifetime = TimeSpan.FromHours(8);
    
    public TestController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    [HttpGet]
    [Authorize]
    public string TestMethod()
    {
        var claim = User.Claims.FirstOrDefault(x => x.Type == "Name");
        return claim.Value;
    }

    
    [HttpGet("token")]
    public IActionResult GenerateToken()
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]!);

        var claims = new List<Claim>
        {
            new("Name", "Nick")
        };
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.Add(TokeLifetime),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwt = tokenHandler.WriteToken(token);
        return Ok(jwt);
    }
}