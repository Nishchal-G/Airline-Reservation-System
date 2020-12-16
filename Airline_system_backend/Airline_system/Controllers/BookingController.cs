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
    public class BookingController : ApiController
    {
        Airline_Entities db = new Airline_Entities();
        [Route("GetBookingDetails")]
        public IEnumerable<Booking_details> GetBooking_Details()
        {
            return db.Booking_details.ToList();
        }
        [Route("GetBookingDetailsById")]

        public Booking_details GetBooking_DetailsById(int id)
        {
            return db.Booking_details.Find(id);
        }
        [Route("AddBookingDetails")]
        [HttpPost]
        public HttpResponseMessage AddBookingDetails(Booking_details model)
        {
            try
            {
                db.Booking_details.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [Route("EditBookingDetails")]
        [HttpPut]
        public HttpResponseMessage EditBookingDetails(int id, Booking_details model)
        {
            try
            {
                if (id == model.Id)
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
        [Route("DeleteBookingDetails")]
        [HttpDelete]
        public HttpResponseMessage Delete_BookingDetails(int id)
        {
            try
            {
                Booking_details model = db.Booking_details.Find(id);
                if (model != null)
                {
                    db.Booking_details.Remove(model);
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
