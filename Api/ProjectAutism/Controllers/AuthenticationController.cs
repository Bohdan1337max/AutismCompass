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
    public IActionResult RegisterNewUser([FromBody]CreateNewUserModel newUserModel)
    {
        var jwt = _authenticationRepository.RegisterNewUser(newUserModel.Email, newUserModel.Password);
        if (jwt == null)
        {
            return BadRequest("User already exist");
        }
        return Ok(jwt);
    }
}