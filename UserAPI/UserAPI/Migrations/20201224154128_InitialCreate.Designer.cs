﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UserAPI.Models;

namespace UserAPI.Migrations
{
    [DbContext(typeof(UserDetailContext))]
    [Migration("20201224154128_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("UserAPI.Models.UserDetail", b =>
                {
                    b.Property<int>("Userid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Emailid")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Fullname")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Userid");

                    b.ToTable("UserDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
