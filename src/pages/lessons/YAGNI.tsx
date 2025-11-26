import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const YAGNI = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">YAGNI</h1>
        <p className="text-2xl text-muted-foreground mb-8">You Aren't Gonna Need It</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is YAGNI?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              YAGNI is a principle from Extreme Programming (XP) that states a programmer should not add functionality
              until it is necessary. The principle is meant to help avoid wasting time on features that may never be used.
            </p>
            <p>
              It's closely related to the KISS principle and helps prevent over-engineering solutions for hypothetical
              future requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why is YAGNI Important?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Saves development time by focusing on current needs</li>
              <li>Reduces code complexity and maintenance burden</li>
              <li>Prevents wasted effort on unused features</li>
              <li>Keeps the codebase lean and focused</li>
              <li>Makes it easier to adapt to actual requirements</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Pitfalls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>Developers often violate YAGNI by:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Adding features "just in case" they're needed later</li>
              <li>Over-abstracting code for hypothetical future use cases</li>
              <li>Implementing complex solutions for simple problems</li>
              <li>Building infrastructure before it's actually needed</li>
            </ul>
            <p className="mt-4 font-semibold">
              Remember: It's better to implement features when they're actually needed than to guess at future requirements.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/kiss">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/crud">
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

export default YAGNI;
