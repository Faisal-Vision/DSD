using Microsoft.AspNetCore.Authorization;
using Services;
using Services.Interfaces;

namespace API.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]

public class ContactController(IContactService _contactService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> AddContact([FromBody] CreatedContact model)
    {
        return Ok(await _contactService.AddContact(model));


    }



    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _contactService.GetAll());

    }



    [HttpGet]
    [Authorize]

    public async Task<IActionResult> GetById(long id)
    {
        return Ok(await _contactService.GetById(id));


    }

    [HttpPut]
    [Authorize]

    public async Task<IActionResult> UpdateContact([FromBody] UpdatedContact model)
    {
        return Ok(await _contactService.UpdateContact(model));

    }

    [HttpDelete]
    [Authorize]

    public async Task<IActionResult> Delete(long id)
    {
        return Ok(await _contactService.Delete(id));

    }
}