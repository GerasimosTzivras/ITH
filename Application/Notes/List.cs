using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Notes
{
    public class List
    {
        public class Query : IRequest<List<Note>> {}

        public class Handler : IRequestHandler<Query, List<Note>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Note>> Handle(Query request,
            CancellationToken cancellationToken)
            {
                var notes = await _context.Notes.ToListAsync();
                return notes;
            }
        }
    }
}