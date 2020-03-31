using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Tickets
{
    public class Create
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var ticket = new Ticket
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Category = request.Category,
                    Customer = request.Customer,
                    Telephone = request.Telephone,
                    Notes = request.Notes,
                    DateIn = request.DateIn,
                    DateOut = request.DateOut,
                    Place = request.Place,
                    Progress = request.Progress
                };

                _context.Tickets.Add(ticket);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving a new Ticket");
            }
        }
    }
}