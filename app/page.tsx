import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Fintech Web App",
    category: "Web Design",
    image: "/projects/fintech.jpg",
    slug: "fintech-web-app"
  },
  {
    title: "Mobile App UI for Event Booking",
    category: "UI/UX",
    image: "/projects/event-ui.jpg",
    slug: "event-booking-app"
  },
  {
    title: "Corporate Branding for Food Company",
    category: "Branding",
    image: "/projects/branding.jpg",
    slug: "food-branding"
  },
  {
    title: "Paper Bag Print Design",
    category: "Printing",
    image: "/projects/paper-bag.jpg",
    slug: "paper-bag-design"
  }
];

export default function HomePage() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sanni Abiodun</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A multidisciplinary product developer with 10+ years of experience in UI/UX design, website development, and machine learning. Founder, team leader, and Upwork Top Rated freelancer with a 100% job success score.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="#contact">Let’s Collaborate</Link>
          </Button>
        </div>
      </header>

      <section id="portfolio">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.slug} className="hover:shadow-xl transition">
              <Link href={`/project/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
        <p className="mb-6 text-muted-foreground max-w-xl mx-auto">
          Whether it's building modern web apps, designing intuitive interfaces, exploring AI possibilities, or scaling your product vision — I’m available to bring your ideas to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="https://wa.me/2348091565803" target="_blank">WhatsApp Me</Link>
          </Button>
          <Button asChild>
            <Link href="mailto:support@designsynchrony.com.ng">Email Me</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.upwork.com/freelancers/~01xxxxxxxxxxxxxxxx">View Upwork Profile</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
