using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction()
        {
            return new string[] {"value1", "value2"};
        }
        [HttpGet("{id}")]
        public ActionResult<string> GetAction(int id)
        {
            return "value";
        }
    }
}