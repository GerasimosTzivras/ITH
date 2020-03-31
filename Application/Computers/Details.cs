using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Computers
{
    public class Details
    {
        public class Query : IRequest<Computer>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Computer>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Computer> Handle(Query request, CancellationToken cancellationToken)
            {
               var computer = await _context.Computers.FindAsync(request.Id);
               return computer;
            }
        }
    }
}