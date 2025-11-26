import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SOLID = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">SOLID</h1>
        <p className="text-2xl text-muted-foreground mb-8">Five Principles of Object-Oriented Programming</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is SOLID?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              SOLID is an acronym for five design principles intended to make object-oriented designs more understandable,
              flexible, and maintainable. These principles were introduced by Robert C. Martin (Uncle Bob).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Five Principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div>
              <h3 className="font-bold text-lg mb-2">S - Single Responsibility Principle (SRP)</h3>
              <p>A class should have only one reason to change. Each class should have only one job or responsibility.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">O - Open/Closed Principle (OCP)</h3>
              <p>Software entities should be open for extension but closed for modification.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">L - Liskov Substitution Principle (LSP)</h3>
              <p>Objects of a superclass should be replaceable with objects of a subclass without breaking the application.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">I - Interface Segregation Principle (ISP)</h3>
              <p>No client should be forced to depend on methods it does not use. Create specific interfaces instead of one general-purpose interface.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">D - Dependency Inversion Principle (DIP)</h3>
              <p>High-level modules should not depend on low-level modules. Both should depend on abstractions.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why is SOLID Important?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Makes code more maintainable and scalable</li>
              <li>Reduces coupling between components</li>
              <li>Increases code reusability</li>
              <li>Makes testing easier</li>
              <li>Helps prevent bugs and design issues</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/dry">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/kiss">
            <Button className="gap-2">
              Next Lesson
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SOLID;
