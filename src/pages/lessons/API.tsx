import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const API = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">API</h1>
        <p className="text-2xl text-muted-foreground mb-8">Application Programming Interface</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is an API?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              An API is a set of rules and protocols that allows different software applications to communicate with each other.
              It defines the methods and data formats that applications can use to request and exchange information.
            </p>
            <p>
              APIs act as intermediaries between different software systems, enabling them to interact without needing to
              understand each other's internal implementations.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types of APIs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <div>
              <h3 className="font-bold mb-2">REST APIs</h3>
              <p>Use HTTP requests to access and manipulate data</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">SOAP APIs</h3>
              <p>Protocol-based APIs using XML for message format</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">GraphQL APIs</h3>
              <p>Query language for APIs allowing clients to request specific data</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">WebSocket APIs</h3>
              <p>Enable real-time, bidirectional communication</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why are APIs Important?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <ul className="list-disc list-inside space-y-2">
              <li>Enable integration between different systems</li>
              <li>Promote code reusability and modularity</li>
              <li>Allow developers to leverage third-party services</li>
              <li>Facilitate microservices architecture</li>
              <li>Enable mobile and web applications to communicate with backends</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/rest">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/mvc">
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

export default API;
