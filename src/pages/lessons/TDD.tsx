import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TDD = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">TDD</h1>
        <p className="text-2xl text-muted-foreground mb-8">Test-Driven Development</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is TDD?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              Test-Driven Development is a software development process where you write tests before writing the actual code.
              It relies on the repetition of a very short development cycle focused on making failing tests pass.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The TDD Cycle (Red-Green-Refactor)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div>
              <h3 className="font-bold text-lg mb-2 text-destructive">1. Red - Write a Failing Test</h3>
              <p>
                Write a test for the next bit of functionality you want to add. The test should fail because the
                functionality doesn't exist yet.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-green-500">2. Green - Make the Test Pass</h3>
              <p>
                Write the minimum amount of code necessary to make the test pass. Don't worry about perfect code yet,
                just make it work.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-500">3. Refactor - Improve the Code</h3>
              <p>
                Clean up the code while keeping all tests passing. Improve structure, remove duplication, and enhance
                readability.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits of TDD</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Better code design - writing tests first leads to more modular code</li>
              <li>Higher test coverage - tests are written for all functionality</li>
              <li>Fewer bugs - issues are caught early in development</li>
              <li>Documentation - tests serve as living documentation</li>
              <li>Confidence in refactoring - tests ensure changes don't break functionality</li>
              <li>Faster debugging - failing tests pinpoint exactly what's broken</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/mvc">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/cicd">
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

export default TDD;
