using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Computers
{
    public class Edit
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
            public DateTime? DateIn { get; set; }
            public DateTime? DateOut { get; set; }
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
                var computer = await _context.Computers.FindAsync(request.Id);

                if (computer == null)
                    throw new Exception("Could not find computer to edit");

                computer.Serial = request.Serial ?? computer.Serial;
                computer.Name = request.Name ?? computer.Name;
                computer.Address = request.Address ?? computer.Address;
                computer.ComputerType = request.ComputerType ?? computer.ComputerType;
                computer.Owner = request.Owner ?? computer.Owner;
                computer.Building = request.Building ?? computer.Building;
                computer.Condition = request.Condition ?? computer.Condition;
                computer.Operation = request.Operation ?? computer.Operation;
                computer.SizeRam = request.SizeRam ?? computer.SizeRam;
                computer.TypeRam = request.TypeRam ?? computer.TypeRam;
                computer.Core = request.Core ?? computer.Core;
                computer.Motherboard = request.Motherboard ?? computer.Motherboard;
                computer.PowerSupply = request.PowerSupply ?? computer.PowerSupply;
                computer.TypeHd = request.TypeHd ?? computer.TypeHd;
                computer.SizeRam = request.SizeRam ?? computer.SizeRam;
                computer.Graphics = request.Graphics ?? computer.Graphics;
                computer.Network = request.Network ?? computer.Network;
                computer.Dslam = request.Dslam ?? computer.Dslam;
                computer.Office = request.Office ?? computer.Office;
                computer.Classification = request.Classification ?? computer.Classification;
                computer.DateIn = request.DateIn ?? computer.DateIn;
                computer.DateOut = request.DateOut ?? computer.DateOut;
                computer.GeneralComments = request.GeneralComments ?? computer.GeneralComments;
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving a new computer");
            }
        }
    }
}