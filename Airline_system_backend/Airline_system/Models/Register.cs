using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airline_system.Models
{
    public class Register
    {
        public int Customer_ID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string Country_of_Residence { get; set; }
        public string Nationality { get; set; }
        public string Email { get; set; }
        public long Phone_Number { get; set; }
        public string Password { get; set; }

    }
}