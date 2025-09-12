// Controllers/ProductsController.cs
using Crud_Api.Data;
using Crud_Api.Models;
using Crud_Api.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Crud_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public ProductsController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = dbContext.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id:guid}")]
        public IActionResult GetProductById(Guid id)
        {
            var product = dbContext.Products.Find(id);
            if (product is null) return NotFound();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct(AddProductDto dto)
        {
            var productEntity = new Product
            {
                ProductId = Guid.NewGuid(),
                Name = dto.Name,
                Category = dto.Category,
                Price = dto.Price,
                Description = dto.Description,
                StockQuantity = dto.StockQuantity,
                ImageUrl = dto.ImageUrl
            };

            dbContext.Products.Add(productEntity);
            dbContext.SaveChanges();

            return Ok(productEntity);
        }

        [HttpPut("{id:guid}")]
        public IActionResult UpdateProduct(Guid id, UpdateProductDto dto)
        {
            var product = dbContext.Products.Find(id);
            if (product is null) return NotFound();

            product.Name = dto.Name;
            product.Category = dto.Category;
            product.Price = dto.Price;
            product.Description = dto.Description;
            product.StockQuantity = dto.StockQuantity;
            product.ImageUrl = dto.ImageUrl;

            dbContext.SaveChanges();
            return Ok(product);
        }

        [HttpDelete("{id:guid}")]
        public IActionResult DeleteProduct(Guid id)
        {
            var product = dbContext.Products.Find(id);
            if (product is null) return NotFound();

            dbContext.Products.Remove(product);
            dbContext.SaveChanges();
            return Ok();
        }
    }
}
