import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const lessons = [
    { id: "dry", title: "DRY", description: "Don't Repeat Yourself" },
    { id: "solid", title: "SOLID", description: "Five principles of OOP" },
    { id: "kiss", title: "KISS", description: "Keep It Simple, Stupid" },
    { id: "yagni", title: "YAGNI", description: "You Aren't Gonna Need It" },
    { id: "crud", title: "CRUD", description: "Create, Read, Update, Delete" },
    { id: "rest", title: "REST", description: "Representational State Transfer" },
    { id: "api", title: "API", description: "Application Programming Interface" },
    { id: "mvc", title: "MVC", description: "Model-View-Controller" },
    { id: "tdd", title: "TDD", description: "Test-Driven Development" },
    { id: "cicd", title: "CI/CD", description: "Continuous Integration/Deployment" },
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Software Engineering Acronyms
          </h1>
          <p className="text-xl text-muted-foreground">
            Master the essential terminology for your next interview
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lessons.map((lesson) => (
            <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
              <Card className="h-full hover:bg-accent transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {lesson.title}
                  </CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/quiz">
            <Button size="lg" className="gap-2">
              <GraduationCap className="w-5 h-5" />
              Take the Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
