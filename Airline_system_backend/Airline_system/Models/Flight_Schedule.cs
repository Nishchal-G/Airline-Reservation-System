//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Airline_system.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Flight_Schedule
    {
        public string Day { get; set; }
        public string Source { get; set; }
        public System.TimeSpan Departure_time { get; set; }
        public System.TimeSpan Arrival_time { get; set; }
        public int Total_seats { get; set; }
        public int Remaining_seats { get; set; }
        public int Flight_id { get; set; }
        public string Destination { get; set; }
    }
}