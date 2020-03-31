using System;

namespace Domain
{
    public class Computer
    {
        public Guid Id { get; set; }
        public string Serial { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ComputerType { get; set; }
        public string Owner { get; set; }
        public string Building { get; set; }
        public string Condition { get; set; }
        public string Operation { get; set; }
        public string SizeRam { get; set; }
        public string TypeRam { get; set; }
        public string Core { get; set; }
        public string Motherboard { get; set; }
        public string PowerSupply { get; set; }
        public string SizeHd { get; set; }
        public string TypeHd { get; set; }
        public string Graphics { get; set; }
        public string Network { get; set; }
        public string Dslam { get; set; }
        public string Office { get; set; }
        public string Classification { get; set; }
        public DateTime DateIn { get; set; }
        public DateTime DateOut { get; set; }
        public string GeneralComments { get; set; }
    }
}
