using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using Airline_system.Models;

namespace Airline_system.Controllers
{
    public class FlightController : ApiController
    {
        Airline_Entities db = new Airline_Entities();
        [Route("GetFightDetails")]
        public IEnumerable<Flight_Schedule> GetFightDetails()
        {
            return db.Flight_Schedule.ToList();
        }
        [Route("DistinctSource")]
        [HttpGet]
        public object DistinctSource()
        {
            var res = db.Flight_Schedule.Where(x => x.Flight_id > 0).Select(y => y.Source).Distinct();
            return res.ToList();
        }
        [Route("DistinctDest")]
        [HttpGet]
        public object DistinctDestinations()
        {
            var res = db.Flight_Schedule.Where(x => x.Flight_id > 0).Select(y => y.Destination).Distinct();
            return res.ToList() ;
        }

        [Route("GetFightDetailsByID")]
        public Flight_Schedule GetFightDetailsByID(int id)
        {
            return db.Flight_Schedule.Find(id);
        }
        [Route("AddFlightSchedule")]

        [HttpPost]
        public HttpResponseMessage AddFlightSchedule(Flight_Schedule model)
        {
            try
            {
                db.Flight_Schedule.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [Route("EditFlightSchedule")]

        [HttpPut]
        public HttpResponseMessage EditFlightSchedule(int id, Flight_Schedule model)
        {
            try
            {
                if (id == model.Flight_id)
                {
                    db.Entry(model).State = EntityState.Modified;
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }

            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [Route("DeleteFilghtSchedule")]

        [HttpDelete]
        public HttpResponseMessage DeleteFilghtSchedule(int id)
        {
            try
            {
                Flight_Schedule model = db.Flight_Schedule.Find(id);
                if (model != null)
                {
                    db.Flight_Schedule.Remove(model);
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

    }
}
