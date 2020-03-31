using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Computers
{
    public class List
    {
        public class Query : IRequest<List<Computer>> {}

        public class Handler : IRequestHandler<Query, List<Computer>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Computer>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                var computers = await _context.Computers.ToListAsync();
                return computers;
            }
        }
    }
}