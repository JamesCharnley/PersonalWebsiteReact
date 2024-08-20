using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class ProjectExternalUrlDto
    {
        public int Id { get; set; }
        public string ExternalUrl { get; set; }
        public string DisplayText { get; set; }
        public string IconName { get; set; }
        public int ProjectId { get; set; }
    }
}