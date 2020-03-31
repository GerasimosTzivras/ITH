using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Tickets
{
    public class Edit
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
            public DateTime? DateIn { get; set; }
            public DateTime? DateOut { get; set; }
            public string Place { get; set; }
            public int? Progress { get; set; }
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
                var ticket = await _context.Tickets.FindAsync(request.Id);

                if (ticket == null)
                    throw new Exception("Could not find ticket to edit");

                ticket.Title = request.Title ?? ticket.Title;
                ticket.Description = request.Description ?? ticket.Description;
                ticket.Category = request.Category ?? ticket.Category;
                ticket.Customer = request.Customer ?? ticket.Customer;
                ticket.Telephone = request.Telephone ?? ticket.Telephone;
                ticket.Notes = request.Notes ?? ticket.Notes;
                ticket.DateIn = request.DateIn ?? ticket.DateIn;
                ticket.DateOut = request.DateOut ?? ticket.DateOut;
                ticket.Place = request.Place ?? ticket.Place;
                ticket.Progress = request.Progress ?? ticket.Progress;
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving a new Ticket");
            }
        }
    }
}