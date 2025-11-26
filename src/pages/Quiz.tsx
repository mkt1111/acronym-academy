import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

interface ShuffledQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: "What does DRY stand for?",
    correctAnswer: "Don't Repeat Yourself",
    wrongAnswers: ["Do Repeat Yourself", "Don't Reuse Your code", "Data Repetition Yield", "Duplicate Resistant Yield", "Don't Refactor Yet"],
  },
  {
    id: 2,
    question: "Which principle is NOT part of SOLID?",
    correctAnswer: "KISS",
    wrongAnswers: ["Single Responsibility", "Open/Closed", "Dependency Inversion", "Interface Segregation", "Liskov Substitution"],
  },
  {
    id: 3,
    question: "What does KISS stand for?",
    correctAnswer: "Keep It Simple, Stupid",
    wrongAnswers: ["Keep It Super Simple", "Keep Implementing Simple Solutions", "Keep It Secure and Safe", "Keep Iterating Simple Systems", "Keep It Short and Sweet"],
  },
  {
    id: 4,
    question: "What is the main principle behind YAGNI?",
    correctAnswer: "Don't add functionality until it's necessary",
    wrongAnswers: ["Always plan for the future", "Write all features upfront", "You always gonna need it", "Build everything modular", "Plan ahead extensively"],
  },
  {
    id: 5,
    question: "What does the 'R' in CRUD stand for?",
    correctAnswer: "Read",
    wrongAnswers: ["Remove", "Refresh", "Restore", "Retrieve", "Revise"],
  },
  {
    id: 6,
    question: "Which HTTP method is typically used for UPDATE operations in REST?",
    correctAnswer: "PUT",
    wrongAnswers: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"],
  },
  {
    id: 7,
    question: "What does API stand for?",
    correctAnswer: "Application Programming Interface",
    wrongAnswers: ["Automated Program Integration", "Advanced Programming Instructions", "Application Process Integration", "Automated Process Interface", "Applied Program Interaction"],
  },
  {
    id: 8,
    question: "In MVC, what does the Controller do?",
    correctAnswer: "Processes user input and updates Model/View",
    wrongAnswers: ["Manages data and business logic", "Displays information to users", "Stores database connections", "Handles rendering", "Contains all business rules"],
  },
  {
    id: 9,
    question: "What is the correct order of TDD cycle?",
    correctAnswer: "Red-Green-Refactor",
    wrongAnswers: ["Green-Red-Refactor", "Refactor-Red-Green", "Red-Refactor-Green", "Green-Refactor-Red", "Test-Code-Deploy"],
  },
  {
    id: 10,
    question: "What does CI in CI/CD stand for?",
    correctAnswer: "Continuous Integration",
    wrongAnswers: ["Code Integration", "Complete Implementation", "Central Installation", "Controlled Integration", "Constant Improvement"],
  },
  {
    id: 11,
    question: "Which SOLID principle states that a class should have only one reason to change?",
    correctAnswer: "Single Responsibility Principle",
    wrongAnswers: ["Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Dependency Inversion Principle", "Don't Repeat Yourself"],
  },
  {
    id: 12,
    question: "What does the 'C' in CRUD stand for?",
    correctAnswer: "Create",
    wrongAnswers: ["Copy", "Change", "Control", "Connect", "Cache"],
  },
  {
    id: 13,
    question: "In REST, which HTTP method is idempotent?",
    correctAnswer: "GET",
    wrongAnswers: ["POST", "All methods", "None of them", "Only DELETE", "CONNECT"],
  },
  {
    id: 14,
    question: "What does the 'M' in MVC stand for?",
    correctAnswer: "Model",
    wrongAnswers: ["Manager", "Module", "Method", "Middleware", "Main"],
  },
  {
    id: 15,
    question: "In TDD, what color represents a passing test?",
    correctAnswer: "Green",
    wrongAnswers: ["Red", "Blue", "Yellow", "White", "Orange"],
  },
  {
    id: 16,
    question: "What does CD in CI/CD stand for?",
    correctAnswer: "Continuous Deployment",
    wrongAnswers: ["Code Delivery", "Complete Deployment", "Central Distribution", "Controlled Delivery", "Constant Development"],
  },
  {
    id: 17,
    question: "Which principle suggests software entities should be open for extension but closed for modification?",
    correctAnswer: "Open/Closed Principle",
    wrongAnswers: ["Single Responsibility", "Liskov Substitution", "Interface Segregation", "Dependency Inversion", "YAGNI"],
  },
  {
    id: 18,
    question: "What is the main benefit of the DRY principle?",
    correctAnswer: "Reduces code duplication and maintenance burden",
    wrongAnswers: ["Makes code run faster", "Increases file size", "Adds more features", "Makes testing harder", "Increases complexity"],
  },
  {
    id: 19,
    question: "Which HTTP status code indicates a successful resource creation?",
    correctAnswer: "201 Created",
    wrongAnswers: ["200 OK", "204 No Content", "301 Moved Permanently", "400 Bad Request", "500 Internal Server Error"],
  },
  {
    id: 20,
    question: "What does the 'U' in CRUD stand for?",
    correctAnswer: "Update",
    wrongAnswers: ["Upload", "Undo", "Utilize", "Unify", "Upgrade"],
  },
  {
    id: 21,
    question: "In MVC, which component handles business logic?",
    correctAnswer: "Model",
    wrongAnswers: ["View", "Controller", "Router", "Database", "Service"],
  },
  {
    id: 22,
    question: "What is the first step in TDD?",
    correctAnswer: "Write a failing test",
    wrongAnswers: ["Write production code", "Refactor existing code", "Deploy to production", "Write documentation", "Design the architecture"],
  },
  {
    id: 23,
    question: "Which SOLID principle states that objects of a superclass should be replaceable with objects of a subclass?",
    correctAnswer: "Liskov Substitution Principle",
    wrongAnswers: ["Single Responsibility", "Open/Closed", "Interface Segregation", "Dependency Inversion", "KISS"],
  },
  {
    id: 24,
    question: "What does REST stand for?",
    correctAnswer: "Representational State Transfer",
    wrongAnswers: ["Remote Execution State Transfer", "Relational State Transformation", "Resource Execution Standard Transfer", "Remote State Transaction", "Reactive State Transfer"],
  },
  {
    id: 25,
    question: "What is an API endpoint?",
    correctAnswer: "A specific URL where an API can be accessed",
    wrongAnswers: ["The final version of an API", "A database table", "A programming language", "A testing framework", "A deployment server"],
  },
  {
    id: 26,
    question: "Which HTTP method is used to delete a resource in REST?",
    correctAnswer: "DELETE",
    wrongAnswers: ["POST", "PUT", "GET", "REMOVE", "DESTROY"],
  },
  {
    id: 27,
    question: "What does the 'D' in CRUD stand for?",
    correctAnswer: "Delete",
    wrongAnswers: ["Deploy", "Download", "Duplicate", "Discover", "Distribute"],
  },
  {
    id: 28,
    question: "In TDD, what should you do after making a test pass?",
    correctAnswer: "Refactor the code",
    wrongAnswers: ["Write another test immediately", "Deploy to production", "Delete the test", "Write documentation", "Create a new feature"],
  },
  {
    id: 29,
    question: "Which SOLID principle suggests that high-level modules should not depend on low-level modules?",
    correctAnswer: "Dependency Inversion Principle",
    wrongAnswers: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "DRY"],
  },
  {
    id: 30,
    question: "What is the main goal of CI/CD?",
    correctAnswer: "Automate software delivery and deployment",
    wrongAnswers: ["Write more tests", "Increase code complexity", "Reduce team size", "Eliminate all bugs", "Make code harder to read"],
  },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Quiz = () => {
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    // Pick 10 random questions from the pool of 30
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 10);
    
    // For each question, pick 3 random wrong answers and combine with correct answer
    const shuffledQuestions: ShuffledQuestion[] = selectedQuestions.map(q => {
      const shuffledWrongAnswers = shuffleArray(q.wrongAnswers).slice(0, 3);
      const allOptions = [...shuffledWrongAnswers, q.correctAnswer];
      const shuffledOptions = shuffleArray(allOptions);
      const correctAnswerIndex = shuffledOptions.indexOf(q.correctAnswer);
      
      return {
        id: q.id,
        question: q.question,
        options: shuffledOptions,
        correctAnswer: correctAnswerIndex,
      };
    });
    
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const getAnswerClassName = (questionIndex: number, optionIndex: number) => {
    if (!showResults) return "";
    const isSelected = selectedAnswers[questionIndex] === optionIndex;
    const isCorrect = questions[questionIndex].correctAnswer === optionIndex;
    
    if (isCorrect) return "bg-green-500/20 border-green-500";
    if (isSelected && !isCorrect) return "bg-destructive/20 border-destructive";
    return "";
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background dark flex items-center justify-center">
        <p className="text-foreground">Loading quiz...</p>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background dark">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <p className="text-6xl font-bold mb-4 text-foreground">{percentage}%</p>
                <p className="text-xl text-muted-foreground">
                  You scored {score} out of {questions.length}
                </p>
              </div>

              <div className="space-y-4">
                {questions.map((question, questionIndex) => (
                  <Card key={question.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Question {questionIndex + 1}: {question.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup value={selectedAnswers[questionIndex]?.toString()}>
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`flex items-center space-x-2 p-3 rounded-md ${getAnswerClassName(questionIndex, optionIndex)}`}
                          >
                            <RadioGroupItem
                              value={optionIndex.toString()}
                              id={`result-${questionIndex}-${optionIndex}`}
                              disabled
                            />
                            <Label
                              htmlFor={`result-${questionIndex}-${optionIndex}`}
                              className="flex-1 cursor-default"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={initializeQuiz} className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </Button>
                <Link to="/">
                  <Button variant="outline">
                    Return Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-4 text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              key={currentQuestion}
              value={selectedAnswers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              {question.options.map((option, index) => (
                <Label
                  key={index}
                  htmlFor={`q${currentQuestion}-${index}`}
                  className="flex items-center space-x-2 p-4 rounded-md border border-border hover:bg-accent cursor-pointer transition-colors"
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`q${currentQuestion}-${index}`}
                  />
                  <span className="flex-1">{option}</span>
                </Label>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="gap-2"
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
