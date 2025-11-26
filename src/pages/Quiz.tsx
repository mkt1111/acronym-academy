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
  options: string[];
  correctAnswer: number;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: "What does DRY stand for?",
    options: ["Don't Repeat Yourself", "Do Repeat Yourself", "Don't Reuse Your code", "Data Repetition Yield"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which principle is NOT part of SOLID?",
    options: ["Single Responsibility", "Open/Closed", "KISS", "Dependency Inversion"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What does KISS stand for?",
    options: ["Keep It Super Simple", "Keep It Simple, Stupid", "Keep Implementing Simple Solutions", "Keep It Secure and Safe"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is the main principle behind YAGNI?",
    options: ["Always plan for the future", "Don't add functionality until it's necessary", "Write all features upfront", "You always gonna need it"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What does the 'R' in CRUD stand for?",
    options: ["Remove", "Read", "Refresh", "Restore"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Which HTTP method is typically used for UPDATE operations in REST?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Program Integration", "Advanced Programming Instructions", "Application Process Integration"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "In MVC, what does the Controller do?",
    options: ["Manages data and business logic", "Displays information to users", "Processes user input and updates Model/View", "Stores database connections"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "What is the correct order of TDD cycle?",
    options: ["Green-Red-Refactor", "Red-Green-Refactor", "Refactor-Red-Green", "Red-Refactor-Green"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What does CI in CI/CD stand for?",
    options: ["Code Integration", "Continuous Integration", "Complete Implementation", "Central Installation"],
    correctAnswer: 1,
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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    const shuffledQuestions = shuffleArray(allQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }))),
    })).map(q => ({
      id: q.id,
      question: q.question,
      options: q.options.map(o => o.text),
      correctAnswer: q.options.findIndex(o => o.originalIndex === allQuestions.find(aq => aq.id === q.id)!.correctAnswer),
    }));
    
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
