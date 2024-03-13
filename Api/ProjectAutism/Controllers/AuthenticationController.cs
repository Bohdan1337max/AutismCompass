using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Repos;

namespace ProjectAutism.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthenticationController : ControllerBase
{
    private readonly IAuthenticationRepository _authenticationRepository;
    public AuthenticationController(IAuthenticationRepository authenticationRepository)
    {
        _authenticationRepository = authenticationRepository;
    }
    [HttpPost("register")]
    public IActionResult RegisterNewUser(string email, string password)
    {
        var jwt = _authenticationRepository.RegisterNewUser(email, password);
        if (jwt == null)
        {
            return BadRequest("User already exist");
        }
        return Ok(jwt);
    }
}