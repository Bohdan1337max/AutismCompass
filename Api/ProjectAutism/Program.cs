using System.Text;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjectAutism;
using ProjectAutism.Data;
using ProjectAutism.Data.Models;
using ProjectAutism.Repos;
using ProjectAutism.Validators;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(x =>
{
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:Key"]!)),
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true
    };
});
builder.Services.AddAuthorization();
    

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AutismDbContext>(
    o => o.UseNpgsql(builder.Configuration.GetConnectionString("AutProjectDb")));
builder.Services.AddScoped<IGatheringRepository, GatheringRepository>();
builder.Services.AddScoped<IQuizRepository, QuizRepository>();
builder.Services.AddScoped<SupportRepository>();
builder.Services.AddScoped<MailHandler>();
builder.Services.AddScoped<IValidator<UserTestResult>,UserTestResultValidator>();
builder.Services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
#pragma warning disable ASP0014
// Ensures the correct order of middleware when used with SPA proxy
app.UseEndpoints(_ => { });
#pragma warning restore ASP0014


if (app.Environment.IsDevelopment())
{
    app.UseSpa(x =>
    {
        var spaConfigSection = app.Configuration.GetSection("SpaDevelopmentServer");
        var spaServer = spaConfigSection["SpaServer"];
        var spaUrl = spaConfigSection[$"Url:{spaServer}"];
        x.UseProxyToSpaDevelopmentServer("http://localhost:5173/");
    });
}



app.MapControllers();

app.Run();