import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const DRY = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">DRY</h1>
        <p className="text-2xl text-muted-foreground mb-8">Don't Repeat Yourself</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is DRY?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              DRY is a principle of software development aimed at reducing repetition of code patterns.
              Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
            </p>
            <p>
              When the DRY principle is applied successfully, a modification of any single element of a system does not
              require a change in other logically unrelated elements.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why is DRY Important?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Reduces maintenance burden - changes only need to be made in one place</li>
              <li>Minimizes bugs - fewer places for errors to hide</li>
              <li>Improves readability - less code to understand</li>
              <li>Enhances testability - fewer code paths to test</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-destructive mb-2">❌ Bad (WET - Write Everything Twice):</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`function calculateSquareArea(side) {
  return side * side;
}

function calculateCubeVolume(side) {
  return side * side * side;
}

function calculateSquarePerimeter(side) {
  return side * 4;
}`}
              </pre>
            </div>
            <div>
              <p className="font-semibold text-green-500 mb-2">✅ Good (DRY):</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`function power(base, exponent) {
  return Math.pow(base, exponent);
}

function calculateSquareArea(side) {
  return power(side, 2);
}

function calculateCubeVolume(side) {
  return power(side, 3);
}

function calculateSquarePerimeter(side) {
  return side * 4;
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <Link to="/lesson/solid">
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

export default DRY;
