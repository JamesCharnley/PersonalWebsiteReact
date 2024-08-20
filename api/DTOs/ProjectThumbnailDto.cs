
namespace api.DTOs
{
    public class ProjectThumbnailDto
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public string ShortDescription { get; set; }
        public int MyProperty { get; set; }
        public List<ProjectExternalUrlDto> ExternalUrls { get; set; } = new();
        public string Skills {get; set;}
    }
}