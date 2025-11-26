import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CICD = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">CI/CD</h1>
        <p className="text-2xl text-muted-foreground mb-8">Continuous Integration / Continuous Deployment</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is CI/CD?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of
              app development. The main concepts are continuous integration, continuous delivery, and continuous deployment.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Two Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div>
              <h3 className="font-bold text-lg mb-2">Continuous Integration (CI)</h3>
              <p>
                Developers regularly merge their code changes into a central repository, after which automated builds
                and tests are run. This helps detect integration bugs early and improves software quality.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Automated testing on every commit</li>
                <li>Early detection of integration issues</li>
                <li>Rapid feedback to developers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Continuous Deployment (CD)</h3>
              <p>
                Every change that passes all stages of the production pipeline is released to customers automatically.
                There's no human intervention required, and only a failed test will prevent a new change from being deployed.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Automated deployment to production</li>
                <li>Faster time to market</li>
                <li>Reduced deployment risk</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits of CI/CD</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Faster releases - automate the entire pipeline</li>
              <li>Improved quality - automated testing catches bugs early</li>
              <li>Reduced risk - smaller, incremental changes are easier to fix</li>
              <li>Better collaboration - developers work on the same codebase</li>
              <li>Increased productivity - less manual work, more time for development</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/tdd">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/quiz">
            <Button className="gap-2">
              Take the Quiz
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CICD;
