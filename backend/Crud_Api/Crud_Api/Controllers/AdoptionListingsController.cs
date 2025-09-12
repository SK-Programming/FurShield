using Crud_Api.Data;
using Crud_Api.Models;
using Crud_Api.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Crud_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdoptionListingsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public AdoptionListingsController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllListings()
        {
            var listings = dbContext.AdoptionListings
                .Include(l => l.Shelter)
                .ToList();

            return Ok(listings);
        }

        [HttpGet("{id:guid}")]
        public IActionResult GetListingById(Guid id)
        {
            var listing = dbContext.AdoptionListings
                .Include(l => l.Shelter)
                .FirstOrDefault(l => l.ListingId == id);

            if (listing is null) return NotFound();
            return Ok(listing);
        }

        [HttpPost]
        public IActionResult AddListing(AddAdoptionListingDto dto)
        {
            var listingEntity = new AdoptionListing
            {
                ListingId = Guid.NewGuid(),
                ShelterId = dto.ShelterId,
                PetName = dto.PetName,
                Species = dto.Species,
                Breed = dto.Breed,
                Age = dto.Age,
                HealthStatus = dto.HealthStatus,
                Status = "Available",
                ImageUrl = dto.ImageUrl
            };

            dbContext.AdoptionListings.Add(listingEntity);
            dbContext.SaveChanges();

            return Ok(listingEntity);
        }

        [HttpPut("{id:guid}")]
        public IActionResult UpdateListing(Guid id, UpdateAdoptionListingDto dto)
        {
            var listing = dbContext.AdoptionListings.Find(id);
            if (listing is null) return NotFound();

            listing.PetName = dto.PetName;
            listing.Species = dto.Species;
            listing.Breed = dto.Breed;
            listing.Age = dto.Age;
            listing.HealthStatus = dto.HealthStatus;
            listing.Status = dto.Status;
            listing.ImageUrl = dto.ImageUrl;

            dbContext.SaveChanges();
            return Ok(listing);
        }

        [HttpDelete("{id:guid}")]
        public IActionResult DeleteListing(Guid id)
        {
            var listing = dbContext.AdoptionListings.Find(id);
            if (listing is null) return NotFound();

            dbContext.AdoptionListings.Remove(listing);
            dbContext.SaveChanges();
            return Ok();
        }
    }
}
