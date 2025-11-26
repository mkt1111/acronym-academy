import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CRUD = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-4 text-foreground">CRUD</h1>
        <p className="text-2xl text-muted-foreground mb-8">Create, Read, Update, Delete</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is CRUD?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <p>
              CRUD is an acronym for the four basic operations that can be performed on data in a database or data store.
              These operations form the foundation of persistent storage in most applications.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Four Operations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground">
            <div>
              <h3 className="font-bold text-lg mb-2">Create</h3>
              <p>Add new records to the database. In SQL, this is the INSERT operation. In REST APIs, typically uses POST.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Read</h3>
              <p>Retrieve or query existing records. In SQL, this is the SELECT operation. In REST APIs, typically uses GET.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Update</h3>
              <p>Modify existing records. In SQL, this is the UPDATE operation. In REST APIs, typically uses PUT or PATCH.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Delete</h3>
              <p>Remove records from the database. In SQL, this is the DELETE operation. In REST APIs, uses DELETE.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CRUD in Different Contexts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <div>
              <h4 className="font-semibold mb-2">HTTP Methods (REST API)</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Create: POST</li>
                <li>Read: GET</li>
                <li>Update: PUT/PATCH</li>
                <li>Delete: DELETE</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SQL Operations</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Create: INSERT</li>
                <li>Read: SELECT</li>
                <li>Update: UPDATE</li>
                <li>Delete: DELETE</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-between">
          <Link to="/lesson/yagni">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          </Link>
          <Link to="/lesson/rest">
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

export default CRUD;
