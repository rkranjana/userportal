using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserAPI.Models
{
    public class UserDetail
    {
        [Key]
        public int Userid { get; set; }

        [Column(TypeName="nvarchar(20)")]
        public string Username { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Password { get; set; }

        
        [Column(TypeName = "nvarchar(100)")]
        public string Fullname { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Emailid { get; set; }

    }
}
