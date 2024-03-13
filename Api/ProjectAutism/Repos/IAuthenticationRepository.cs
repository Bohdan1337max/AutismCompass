using Microsoft.AspNetCore.Mvc;
using ProjectAutism.Data.Models;

namespace ProjectAutism.Repos;

public interface IAuthenticationRepository
{
    public string? RegisterNewUser(string email, string password);
}