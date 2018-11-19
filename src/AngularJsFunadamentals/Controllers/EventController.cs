using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Controllers.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularJsFunadamentals.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                name = "Angular Boot Camp",
                date = "13/10/2018",
                time = "05:00 pm",
                location = new
                {
                    address = "Google Template",
                    city = "Mountain View",
                    state = "CA"
                },
                imageUrl = "/app/img/angularjs-logo.png",
                sessions = new[] {
                    new {
                name= "Directives Masterclass",
                        creatorName=  "Bon Smith",
                        duration = "1 hr",
                        level = "Advanced",
                        upVoteCount = 0
                    },
                    new {
                name = "Scopes for fun and profit",
                        creatorName = "John Doe",
                        duration= "30 min",
                        level= "Advanced",
                        upVoteCount= 0
                    },
                    new {
                        name= "Well Behaved Controllers",
                        creatorName= "Jane Doe",
                        duration= "2 hrs",
                        level= "Advanced",
                        upVoteCount= 0
                    }
                }
            });
        }

        [HttpPost]
        public IActionResult Post(EventModel eventModel)
        {
            return Ok(eventModel);
        }
    }
}
