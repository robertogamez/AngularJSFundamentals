using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsFunadamentals.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularJsFunadamentals.Controllers
{
    public class DatatableExample : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetEvents(EventDatatableRequest eventDatatableRequest)
        {
            var allCustomer = new List<Event>
            {
                new Event { EventId = 1, EventName = "Event 1", City = "City 1" },
                new Event { EventId = 2, EventName = "Event 2", City = "City 2" },
                new Event { EventId = 3, EventName = "Event 3", City = "City 3" },
                new Event { EventId = 4, EventName = "Event 4", City = "City 4" },
                new Event { EventId = 5, EventName = "Event 5", City = "City 5" },
                new Event { EventId = 6, EventName = "Event 6", City = "City 6" },
                new Event { EventId = 6, EventName = "Event 7", City = "City 7" }
            };

            int pageSize = eventDatatableRequest.length != null ? Convert.ToInt32(eventDatatableRequest.length) : 0;
            int skip = eventDatatableRequest.start != null ? Convert.ToInt32(eventDatatableRequest.start) : 0;

            return Json(new
            {
                draw = eventDatatableRequest.draw,
                recordsFiltered = allCustomer.Count,
                recordsTotal = allCustomer.Count,
                data = allCustomer.Skip(skip).Take(pageSize)
            });
        }



    }
}
