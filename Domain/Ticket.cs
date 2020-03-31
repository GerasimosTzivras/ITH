using System;

namespace Domain
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Customer { get; set; }
        public string Telephone { get; set; }
        public string Notes { get; set; }
        public DateTime DateIn { get; set; }
        public DateTime DateOut { get; set; }
        public string Place { get; set; }
        public int Progress { get; set; }
    }
}