using Crud_Api.Data;
using Crud_Api.Models;
using Crud_Api.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crud_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public PetsController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllPets()
        {
            var pets = dbContext.Pets.Include(p => p.Owner).ToList();
            return Ok(pets);
        }

        [HttpGet("{id:guid}")]
        public IActionResult GetPetById(Guid id)
        {
            var pet = dbContext.Pets.Include(p => p.Owner).FirstOrDefault(p => p.PetId == id);
            if (pet is null) return NotFound();
            return Ok(pet);
        }

        [HttpPost]
        public IActionResult AddPet(AddPetDto dto)
        {
            var petEntity = new Pet
            {
                PetId = Guid.NewGuid(),
                OwnerId = dto.OwnerId,
                Name = dto.Name,
                Species = dto.Species,
                Breed = dto.Breed,
                Age = dto.Age,
                Gender = dto.Gender,
                ImageUrl = dto.ImageUrl
            };

            dbContext.Pets.Add(petEntity);
            dbContext.SaveChanges();

            var petWithOwner = dbContext.Pets.Include(p => p.Owner)
                .FirstOrDefault(p => p.PetId == petEntity.PetId);
            return Ok(petWithOwner);
        }

        [HttpPut("{id:guid}")]
        public IActionResult UpdatePet(Guid id, UpdatePetDto dto)
        {
            var pet = dbContext.Pets.Find(id);
            if (pet is null) return NotFound();

            pet.Name = dto.Name;
            pet.Species = dto.Species;
            pet.Breed = dto.Breed;
            pet.Age = dto.Age;
            pet.Gender = dto.Gender;
            pet.ImageUrl = dto.ImageUrl;

            dbContext.SaveChanges();
            return Ok(pet);
        }

        [HttpDelete("{id:guid}")]
        public IActionResult DeletePet(Guid id)
        {
            var pet = dbContext.Pets.Find(id);
            if (pet is null) return NotFound();

            dbContext.Pets.Remove(pet);
            dbContext.SaveChanges();
            return Ok();
        }
    }
}
