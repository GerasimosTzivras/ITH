using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed 
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Tickets.Any())
            {
                var tickets = new List<Ticket>
                {
                    new Ticket
                    {
                        Title = "Test 1",
                        DateIn = DateTime.Now,
                        Description = "This is test 1",
                        Category = "Network",
                        DateOut = DateTime.Now.AddMonths(4)
                    },
                    new Ticket
                    {
                        Title = "Test 2",
                        DateIn = DateTime.Now,
                        Description = "This is test 2",
                        Category = "Hardware",
                        DateOut = DateTime.Now.AddMonths(8)
                    },
                };
                context.Tickets.AddRange(tickets);
                context.SaveChanges();
            }
            if(!context.Notes.Any())
            {
                var notes = new List<Note>
                {
                    new Note
                    {
                        Title = "Note Test 1",
                        Description = "This is test 1",
                        Category = "Network",
                    },
                    new Note
                    {
                        Title = "Note Test 2",
                        Description = "This is test 2",
                        Category = "Hardware",
                    },
                };
                context.Notes.AddRange(notes);
                context.SaveChanges();
            }
            if(!context.Computers.Any())
            {
                var computers = new List<Computer>
                {
                    new Computer
                    {
                        Serial = "001",
                        Name = "This is test 1",
                        Address = "Network",
                    },
                    new Computer
                    {
                        Serial = "002",
                        Name = "This is test 2",
                        Address = "Hardware",
                    },
                };
                context.Computers.AddRange(computers);
                context.SaveChanges();
            }

        }
    }
}

