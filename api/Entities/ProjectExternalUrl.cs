using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    [Table("ExternalUrls")]
    public class ProjectExternalUrl
    {
        public int Id { get; set; }
        public string ExternalUrl { get; set; }
        public string DisplayText { get; set; }
        public string IconName { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}