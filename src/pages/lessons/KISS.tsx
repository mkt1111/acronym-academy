import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const KISS = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">KISS</h1>
        <p className="text-2xl text-muted-foreground mb-8">Keep It Simple, Stupid</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is KISS?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              KISS is a design principle stating that most systems work best if they are kept simple rather than made complicated.
              Simplicity should be a key goal in design, and unnecessary complexity should be avoided.
            </p>
            <p>
              The principle is best exemplified by the story of Kelly Johnson, lead engineer at Lockheed, who gave design
              engineers a handful of tools and challenged them to design a jet aircraft repairable by an average mechanic
              in combat conditions with only those tools.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why is KISS Important?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Easier to understand and maintain</li>
              <li>Fewer bugs due to reduced complexity</li>
              <li>Faster to implement and test</li>
              <li>More accessible to team members</li>
              <li>Better performance (often simpler code runs faster)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-destructive mb-2">❌ Complex:</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`function isEven(num) {
  return num % 2 === 0 ? true : false;
}`}
              </pre>
            </div>
            <div>
              <p className="font-semibold text-green-500 mb-2">✅ Simple:</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`function isEven(num) {
  return num % 2 === 0;
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/solid">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/yagni">
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

export default KISS;
