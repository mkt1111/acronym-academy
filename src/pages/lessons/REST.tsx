import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const REST = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">REST</h1>
        <p className="text-2xl text-muted-foreground mb-8">Representational State Transfer</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is REST?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              REST is an architectural style for designing networked applications. It relies on a stateless, client-server
              communication protocol (typically HTTP) and treats server objects as resources that can be created or destroyed.
            </p>
            <p>
              RESTful systems are characterized by how they are stateless and separate the concerns of client and server.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>REST Principles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Client-Server:</strong> Separation of concerns between UI and data storage</li>
              <li><strong>Stateless:</strong> Each request contains all information needed to process it</li>
              <li><strong>Cacheable:</strong> Responses must define themselves as cacheable or not</li>
              <li><strong>Uniform Interface:</strong> Standardized way of communicating between client and server</li>
              <li><strong>Layered System:</strong> Client cannot tell if connected directly to end server</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common REST Patterns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-foreground">
{`GET    /api/users       # Get all users
GET    /api/users/123   # Get user with ID 123
POST   /api/users       # Create new user
PUT    /api/users/123   # Update user 123
DELETE /api/users/123   # Delete user 123`}
            </pre>
            <p className="text-foreground">
              REST APIs use standard HTTP methods and status codes, making them intuitive and easy to understand.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/crud">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/api">
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

export default REST;
