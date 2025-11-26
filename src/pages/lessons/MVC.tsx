import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MVC = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">MVC</h1>
        <p className="text-2xl text-muted-foreground mb-8">Model-View-Controller</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is MVC?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              MVC is a software architectural pattern commonly used for developing user interfaces. It divides an application
              into three interconnected components, separating internal representations of information from how it's
              presented to and accepted from the user.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Three Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div>
              <h3 className="font-bold text-lg mb-2">Model</h3>
              <p>
                The central component that <strong>manages the data, logic, and rules</strong> of the application. 
                It directly handles the data and business logic, independent of the user interface.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">View</h3>
              <p>
                The presentation layer that <strong>displays information to users</strong>. It can be any output representation of information,
                such as a chart, diagram, or table. Multiple views of the same data are possible.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Controller</h3>
              <p>
                <strong>Accepts input from the user and processes user input to update the Model and View</strong>. 
                It acts as an intermediary between Model and View, converting user actions into application operations.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits of MVC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Separation of concerns - easier to maintain and test</li>
              <li>Parallel development - different developers can work on different components</li>
              <li>Multiple views - can have different views for the same data</li>
              <li>Easier to modify - changes to one component don't affect others</li>
              <li>Code reusability - Models can be reused across different views</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/api">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/tdd">
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

export default MVC;
