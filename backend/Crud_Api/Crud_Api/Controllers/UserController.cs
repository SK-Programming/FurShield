
using Crud_Api.Data;
using Crud_Api.Models;
using Crud_Api.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Crud_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public UsersController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = dbContext.Users.ToList();
            return Ok(users);
        }

        [HttpGet("{id:guid}")]
        public IActionResult GetUserById(Guid id)
        {
            var user = dbContext.Users.Find(id);
            if (user is null) return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUser(AddUserDto dto)
        {
            var userEntity = new User
            {
                UserId = Guid.NewGuid(),
                Name = dto.Name,
                Email = dto.Email,
                Role = dto.Role,
                ContactNumber = dto.ContactNumber,
                Address = dto.Address,
                ImageUrl = dto.ImageUrl
            };

            dbContext.Users.Add(userEntity);
            dbContext.SaveChanges();

            return Ok(userEntity);
        }

        [HttpPut("{id:guid}")]
        public IActionResult UpdateUser(Guid id, UpdateUserDto dto)
        {
            var user = dbContext.Users.Find(id);
            if (user is null) return NotFound();

            user.Name = dto.Name;
            user.Email = dto.Email;
            user.Role = dto.Role;
            user.ContactNumber = dto.ContactNumber;
            user.Address = dto.Address;
            user.ImageUrl = dto.ImageUrl;

            dbContext.SaveChanges();
            return Ok(user);
        }

        [HttpDelete("{id:guid}")]
        public IActionResult DeleteUser(Guid id)
        {
            var user = dbContext.Users.Find(id);
            if (user is null) return NotFound();

            dbContext.Users.Remove(user);
            dbContext.SaveChanges();
            return Ok();
        }
    }
}
