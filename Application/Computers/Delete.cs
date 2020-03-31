using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Computers
{
    public class Delete
    {
         public class Command : IRequest
        {
            public Guid Id { get; set; }
            
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
                    throw new Exception("Could not find computer to delete");

                _context.Remove(computer);
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem deleting computer");
            }
        }
    }
}