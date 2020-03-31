using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class EntitiesAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Computers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Serial = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    ComputerType = table.Column<string>(nullable: true),
                    Owner = table.Column<string>(nullable: true),
                    Building = table.Column<string>(nullable: true),
                    Condition = table.Column<string>(nullable: true),
                    Operation = table.Column<string>(nullable: true),
                    SizeRam = table.Column<string>(nullable: true),
                    TypeRam = table.Column<string>(nullable: true),
                    Core = table.Column<string>(nullable: true),
                    Motherboard = table.Column<string>(nullable: true),
                    PowerSupply = table.Column<string>(nullable: true),
                    SizeHd = table.Column<string>(nullable: true),
                    TypeHd = table.Column<string>(nullable: true),
                    Graphics = table.Column<string>(nullable: true),
                    Network = table.Column<string>(nullable: true),
                    Dslam = table.Column<string>(nullable: true),
                    Office = table.Column<string>(nullable: true),
                    Classification = table.Column<string>(nullable: true),
                    DateIn = table.Column<DateTime>(nullable: false),
                    DateOut = table.Column<DateTime>(nullable: false),
                    GeneralComments = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Computers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Wiki = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    Customer = table.Column<string>(nullable: true),
                    Telephone = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    DateIn = table.Column<DateTime>(nullable: false),
                    DateOut = table.Column<DateTime>(nullable: false),
                    Place = table.Column<string>(nullable: true),
                    Progress = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Computers");

            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "Tickets");
        }
    }
}
