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
    public class UserController : ApiController
    {
        Airline_Entities db = new Airline_Entities();
        [Route("GetUser")]

        public IEnumerable<UserData> GetUsers()
        {
            return db.UserDatas.ToList();
        }
        [Route("GetUserById")]

        public object GetUserById(int id)
        {
            var obj = db.UserDatas.Where(x => x.Customer_ID == id).ToList().FirstOrDefault();
            return obj;
        }
        [Route("AddUser")]

        [HttpPost]
        public HttpResponseMessage AddUser(UserData model)
        {
            try
            {
                db.UserDatas.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [Route("EditUser")]

        [HttpPost]
        public object EditUser(UserData model)
        {
            try
            {
                var obj = db.UserDatas.Where(x => x.Customer_ID == model.Customer_ID).ToList().FirstOrDefault();
                if (obj.Customer_ID > 0)
                {
                    obj.FirstName = model.FirstName;
                    obj.LastName = model.LastName;
                    obj.Email = model.Email;
                    obj.Nationality = model.Nationality;
                    obj.Country_of_Residence = model.Country_of_Residence;
                    obj.Phone_Number = model.Phone_Number;
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Update Failed"
            };
        }
        [Route("DeleteUser")]
        [HttpDelete]
        public object DeleteUser(int id)
        {
            try
            {
                var obj = db.UserDatas.Where(x => x.Customer_ID == id).ToList().FirstOrDefault();

                    db.UserDatas.Remove(obj);
                    db.SaveChanges();
                return new Response
                {
                    Status = "Delete",
                    Message = "Delete Successfuly"
                };
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [Route("login")]
        [HttpPost]
        public IHttpActionResult UserLogin(Login login)
        {
            var log = db.UserDatas.Where(x => x.Email.Equals(login.Email)&&x.Password.Equals(login.Password)).FirstOrDefault();
            if (log== null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User" });

            }
            else
            {
                return Ok(new { status = 200, isSuccess = true, message = "User Login Successfull",UserDetails=log });

            }
        }
        [Route("adminLogin")]
        [HttpPost]
        public IHttpActionResult AdminLogin(Login login)
        {
            if (login.Email=="admin@gmail.com" && login.Password=="admin123")
            {
                return Ok(new { status = 200, isSuccess = true, message = "User Login Successfull"});

            }
            else
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User" });
            }
        }


    }
}
