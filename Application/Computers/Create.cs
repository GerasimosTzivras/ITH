using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Computers
{
    public class Create
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var computer = new Computer
                {
                    Id = request.Id,
                    Serial = request.Serial,
                    Name = request.Name,
                    Address = request.Address,
                    ComputerType = request.ComputerType,
                    Owner = request.Owner,
                    Building = request.Building,
                    Condition = request.Condition,
                    Operation = request.Operation,
                    SizeRam = request.SizeRam,
                    TypeRam = request.TypeRam,
                    Core = request.Core,
                    Motherboard = request.Motherboard,
                    PowerSupply = request.PowerSupply,
                    TypeHd = request.TypeHd,
                    SizeHd = request.SizeHd,
                    Graphics = request.Graphics,
                    Dslam = request.Dslam,
                    Office = request.Office,
                    Classification = request.Classification,
                    DateIn = request.DateIn,
                    DateOut = request.DateOut,
                    GeneralComments = request.GeneralComments
                };

                _context.Computers.Add(computer);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving a new Computer");
            }
        }
    }
}