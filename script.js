
const questionBank = [
  {
    question: "Who developed Java?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: 1,
    explanation: "James Gosling and his team developed Java."
  },
  {
    question: "Which company originally developed Java?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
    answer: 2,
    explanation: "Java was originally developed at Sun Microsystems."
  },
  {
    question: "Which extension is used for Java source files?",
    options: [".class", ".java", ".js", ".exe"],
    answer: 1,
    explanation: "Java source code files use the .java extension."
  },
  {
    question: "Which command compiles Java source code?",
    options: ["java", "javac", "compile", "run"],
    answer: 1,
    explanation: "The javac command compiles Java source code."
  },
  {
    question: "Which command runs a compiled Java class?",
    options: ["javac", "java", "compile", "execute"],
    answer: 1,
    explanation: "The java command launches a Java class."
  },
  {
    question: "What does JVM stand for?",
    options: ["Java Variable Method", "Java Virtual Machine", "Java Verified Mode", "Joint Virtual Memory"],
    answer: 1,
    explanation: "JVM stands for Java Virtual Machine."
  },
  {
    question: "What does JDK stand for?",
    options: ["Java Development Kit", "Java Design Kernel", "Java Data Kit", "Java Developer Key"],
    answer: 0,
    explanation: "JDK stands for Java Development Kit."
  },
  {
    question: "What is Java bytecode?",
    options: ["HTML code", "Source code", "Intermediate code", "Machine code for one CPU"],
    answer: 2,
    explanation: "Java source code is compiled into bytecode."
  },
  {
    question: "Which is a primitive data type in Java?",
    options: ["String", "Integer", "int", "Scanner"],
    answer: 2,
    explanation: "int is one of Java's eight primitive types."
  },
  {
    question: "How many primitive data types does Java have?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "Java has eight primitive data types."
  },
  {
    question: "Which type stores true or false?",
    options: ["int", "boolean", "char", "String"],
    answer: 1,
    explanation: "The boolean type stores true or false."
  },
  {
    question: "Which keyword declares a class?",
    options: ["object", "define", "class", "struct"],
    answer: 2,
    explanation: "The class keyword declares a class."
  },
  {
    question: "Which keyword creates an object?",
    options: ["this", "new", "class", "make"],
    answer: 1,
    explanation: "The new operator creates an object."
  },
  {
    question: "Which method is the usual Java application entry point?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1,
    explanation: "The standard entry point is main(String[] args)."
  },
  {
    question: "Which symbol usually ends a Java statement?",
    options: [":", ".", ";", ","],
    answer: 2,
    explanation: "Most Java statements end with a semicolon."
  },
  {
    question: "Which operator checks equality of primitive values?",
    options: ["=", "==", "!=", "equals="],
    answer: 1,
    explanation: "The == operator compares primitive values."
  },
  {
    question: "Which operator represents logical AND?",
    options: ["||", "!", "&&", "%"],
    answer: 2,
    explanation: "&& is the short-circuit logical AND operator."
  },
  {
    question: "Which operator represents logical OR?",
    options: ["&&", "||", "!", "%"],
    answer: 1,
    explanation: "|| is the short-circuit logical OR operator."
  },
  {
    question: "What does the % operator return?",
    options: ["Quotient", "Remainder", "Product", "Power"],
    answer: 1,
    explanation: "The % operator returns the remainder."
  },
  {
    question: "Which statement is used for decision-making?",
    options: ["if", "package", "import", "class"],
    answer: 0,
    explanation: "The if statement executes code conditionally."
  },
  {
    question: "Which statement selects between multiple cases?",
    options: ["switch", "try", "new", "extends"],
    answer: 0,
    explanation: "The switch statement selects a matching case."
  },
  {
    question: "Which loop checks its condition before executing?",
    options: ["while", "do-while", "Neither", "All check after"],
    answer: 0,
    explanation: "A while loop checks its condition before the body."
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "None"],
    answer: 2,
    explanation: "A do-while loop checks its condition after the body."
  },
  {
    question: "Which statement exits a loop?",
    options: ["skip", "break", "continue", "case"],
    answer: 1,
    explanation: "break exits the nearest enclosing loop."
  },
  {
    question: "Which statement skips to the next iteration?",
    options: ["break", "continue", "exit", "return"],
    answer: 1,
    explanation: "continue skips the remaining statements in the current iteration."
  },
  {
    question: "How do you declare an integer array of length 5?",
    options: ["int a = new int(5);", "int[] a = new int[5];", "array int a[5];", "int a[] = 5;"],
    answer: 1,
    explanation: "new int[5] creates an array of five integers."
  },
  {
    question: "What is the first index of a Java array?",
    options: ["1", "-1", "0", "Depends on array"],
    answer: 2,
    explanation: "Java arrays use zero-based indexing."
  },
  {
    question: "What is the last index of an array of length 10?",
    options: ["10", "9", "11", "0"],
    answer: 1,
    explanation: "The last index is array length minus one."
  },
  {
    question: "Which property gives an array's length?",
    options: ["size()", "count", "length", "length()"],
    answer: 2,
    explanation: "Arrays use the length field."
  },
  {
    question: "Which class represents text?",
    options: ["Character", "String", "Text", "CharArray"],
    answer: 1,
    explanation: "String represents a sequence of characters."
  },
  {
    question: "Are String objects mutable?",
    options: ["Yes, always", "No, they are immutable", "Only in loops", "Only if static"],
    answer: 1,
    explanation: "String objects cannot be changed after creation."
  },
  {
    question: "Which method compares String contents?",
    options: ["== only", "equals()", "same()", "compareOnly()"],
    answer: 1,
    explanation: "equals() compares String contents."
  },
  {
    question: "Which package is automatically imported?",
    options: ["java.util", "java.io", "java.lang", "java.net"],
    answer: 2,
    explanation: "Types in java.lang are automatically available."
  },
  {
    question: "Which keyword imports a class?",
    options: ["include", "using", "import", "package"],
    answer: 2,
    explanation: "The import statement lets you refer to types by simple name."
  },
  {
    question: "What does OOP stand for?",
    options: ["Object-Oriented Programming", "Order of Operations", "Open Output Process", "Object Operating Protocol"],
    answer: 0,
    explanation: "OOP stands for Object-Oriented Programming."
  },
  {
    question: "What is a class?",
    options: ["A blueprint for objects", "A loop", "A primitive type", "A compiler"],
    answer: 0,
    explanation: "A class defines the fields and methods of its objects."
  },
  {
    question: "What is an object?",
    options: ["A method", "An instance of a class", "A keyword", "A compiler"],
    answer: 1,
    explanation: "An object is an instance of a class."
  },
  {
    question: "Which principle bundles data and methods?",
    options: ["Inheritance", "Encapsulation", "Compilation", "Iteration"],
    answer: 1,
    explanation: "Encapsulation groups data and related behavior."
  },
  {
    question: "Which principle allows one class to inherit from another?",
    options: ["Inheritance", "Overloading", "Casting", "Packaging"],
    answer: 0,
    explanation: "Inheritance allows a subclass to reuse and specialize superclass behavior."
  },
  {
    question: "Which concept allows different implementations of a common operation?",
    options: ["Polymorphism", "Compilation", "Iteration", "Commenting"],
    answer: 0,
    explanation: "Polymorphism allows different object types to respond to the same operation."
  },
  {
    question: "Which concept hides implementation details?",
    options: ["Abstraction", "Looping", "Indexing", "Parsing"],
    answer: 0,
    explanation: "Abstraction exposes essential behavior while hiding unnecessary details."
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["super", "this", "self", "current"],
    answer: 1,
    explanation: "this refers to the current object."
  },
  {
    question: "Which keyword accesses superclass members?",
    options: ["parent", "base", "super", "this"],
    answer: 2,
    explanation: "super accesses superclass members and constructors."
  },
  {
    question: "What is a constructor?",
    options: ["A method returning int", "A special member used to initialize objects", "A loop", "A package"],
    answer: 1,
    explanation: "A constructor initializes an object when it is created."
  },
  {
    question: "What name must a constructor have?",
    options: ["Any name", "The same name as its class", "main", "new"],
    answer: 1,
    explanation: "A constructor has the same name as its class."
  },
  {
    question: "Does a constructor declare a return type?",
    options: ["Yes, void", "Yes, int", "No", "Only if static"],
    answer: 2,
    explanation: "Constructors have no declared return type."
  },
  {
    question: "When is a default constructor supplied by the compiler?",
    options: ["Always", "When no constructor is declared", "Only in interfaces", "Only in final classes"],
    answer: 1,
    explanation: "The compiler supplies one if the class declares no constructor."
  },
  {
    question: "Which keyword declares a subclass?",
    options: ["implements", "extends", "inherits", "super"],
    answer: 1,
    explanation: "A class uses extends to inherit from another class."
  },
  {
    question: "Can a Java class extend multiple classes directly?",
    options: ["Yes", "No", "Only two", "Only abstract classes"],
    answer: 1,
    explanation: "A Java class can directly extend only one class."
  },
  {
    question: "Which keyword implements an interface?",
    options: ["extends", "implements", "interfaceOf", "inherits"],
    answer: 1,
    explanation: "A class uses implements to implement an interface."
  },
  {
    question: "Which keyword prevents a class from being extended?",
    options: ["static", "private", "final", "protected"],
    answer: 2,
    explanation: "A final class cannot be subclassed."
  },
  {
    question: "Which keyword prevents an instance method from being overridden?",
    options: ["final", "volatile", "native", "transient"],
    answer: 0,
    explanation: "A final instance method cannot be overridden."
  },
  {
    question: "What is method overloading?",
    options: ["Same name with different parameter lists", "Same signature in unrelated classes", "Deleting a method", "Changing only return type"],
    answer: 0,
    explanation: "Overloaded methods differ in their parameter lists."
  },
  {
    question: "What is method overriding?",
    options: ["Replacing inherited behavior in a subclass", "Using a variable twice", "Changing only return type", "Calling a constructor"],
    answer: 0,
    explanation: "Overriding provides a subclass-specific implementation of an inherited method."
  },
  {
    question: "Method overloading is generally resolved at:",
    options: ["Compile time", "Only runtime", "Garbage collection", "Shutdown"],
    answer: 0,
    explanation: "The compiler selects an overload using method signatures and argument types."
  },
  {
    question: "Dynamic method dispatch is related to:",
    options: ["Runtime polymorphism", "Array sorting", "Compilation only", "Primitive conversion"],
    answer: 0,
    explanation: "An overridden instance method is selected according to the actual object type."
  },
  {
    question: "Which keyword declares a method without a body in an abstract class?",
    options: ["virtual", "abstract", "empty", "native"],
    answer: 1,
    explanation: "An abstract method has no implementation body."
  },
  {
    question: "Can you instantiate an abstract class directly?",
    options: ["Yes", "No", "Only with static", "Only with final"],
    answer: 1,
    explanation: "An abstract class cannot be instantiated directly."
  },
  {
    question: "Which access modifier provides the widest member access?",
    options: ["private", "protected", "public", "default"],
    answer: 2,
    explanation: "public members can be accessed wherever the declaring type is accessible."
  },
  {
    question: "Which modifier restricts a member to its declaring class?",
    options: ["public", "protected", "private", "default"],
    answer: 2,
    explanation: "private members are accessible within their declaring class."
  },
  {
    question: "What does package-private access mean?",
    options: ["Same method only", "Within the same package", "Everywhere", "Subclasses only"],
    answer: 1,
    explanation: "With no access modifier, a member has package-private access."
  },
  {
    question: "Which keyword declares a class-level member?",
    options: ["static", "final", "this", "super"],
    answer: 0,
    explanation: "A static member belongs to the class rather than an individual instance."
  },
  {
    question: "Can a static method directly use this?",
    options: ["Yes", "No", "Only in constructors", "Only if public"],
    answer: 1,
    explanation: "A static method has no current object."
  },
  {
    question: "What does final mean for a variable?",
    options: ["It must be public", "It cannot be reassigned after initialization", "It becomes static", "It is deleted"],
    answer: 1,
    explanation: "A final variable can be assigned only once."
  },
  {
    question: "What is an inner class?",
    options: ["A class declared within another class", "A parameter", "A package", "A primitive type"],
    answer: 0,
    explanation: "An inner class is a non-static nested class."
  },
  {
    question: "What does garbage collection do?",
    options: ["Deletes all objects immediately", "Reclaims memory from unreachable objects", "Compiles source", "Sorts arrays"],
    answer: 1,
    explanation: "The JVM can reclaim memory occupied by unreachable objects."
  },
  {
    question: "Which block handles an exception?",
    options: ["catch", "throwable", "error", "handle"],
    answer: 0,
    explanation: "A catch block handles matching exceptions."
  },
  {
    question: "Which block contains code that may throw an exception?",
    options: ["catch", "try", "finally only", "throws"],
    answer: 1,
    explanation: "Potentially exception-throwing code is placed inside try."
  },
  {
    question: "Which block is commonly used for cleanup?",
    options: ["catch", "finally", "case", "package"],
    answer: 1,
    explanation: "finally is commonly used for cleanup."
  },
  {
    question: "Which keyword explicitly throws an exception object?",
    options: ["throws", "throw", "catch", "try"],
    answer: 1,
    explanation: "throw is used to throw an exception."
  },
  {
    question: "Which keyword declares exceptions a method may pass to its caller?",
    options: ["throw", "throws", "catch", "final"],
    answer: 1,
    explanation: "throws appears in a method declaration."
  },
  {
    question: "Which of these is an unchecked exception?",
    options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
    answer: 2,
    explanation: "NullPointerException is a RuntimeException and is unchecked."
  },
  {
    question: "Which package contains Scanner?",
    options: ["java.lang", "java.util", "java.io", "java.text"],
    answer: 1,
    explanation: "Scanner belongs to java.util."
  },
  {
    question: "Which Scanner method reads an integer?",
    options: ["next()", "nextInt()", "readInt()", "getInteger()"],
    answer: 1,
    explanation: "nextInt() reads the next token as an integer."
  },
  {
    question: "Which statement prints text followed by a new line?",
    options: ["System.out.print()", "System.in.println()", "System.out.println()", "Console.write()"],
    answer: 2,
    explanation: "System.out.println prints a value followed by a line terminator."
  },
  {
    question: "What does System.out represent?",
    options: ["Standard output", "Standard input", "A package", "The compiler"],
    answer: 0,
    explanation: "System.out is Java's standard output stream."
  },
  {
    question: "Which class builds a mutable character sequence?",
    options: ["StringBuilder", "Integer", "Scanner", "Math"],
    answer: 0,
    explanation: "StringBuilder is useful for building mutable strings."
  },
  {
    question: "Which method returns a String's character count?",
    options: ["length", "size()", "length()", "count()"],
    answer: 2,
    explanation: "String uses the length() method."
  },
  {
    question: "Which method converts a String to uppercase?",
    options: ["upper()", "toUpperCase()", "uppercase()", "makeUpper()"],
    answer: 1,
    explanation: "toUpperCase() returns an uppercase string."
  },
  {
    question: "Which class wraps the primitive int?",
    options: ["Int", "Integer", "NumberInt", "Primitive"],
    answer: 1,
    explanation: "Integer is the wrapper class for int."
  },
  {
    question: "Which keyword declares an interface?",
    options: ["implements", "interface", "abstract", "protocol"],
    answer: 1,
    explanation: "The interface keyword declares an interface."
  },
  {
    question: "Can an interface be instantiated directly?",
    options: ["Yes", "No", "Only if empty", "Only if final"],
    answer: 1,
    explanation: "An interface cannot be instantiated directly."
  },
  {
    question: "What is recursion?",
    options: ["A method calling itself", "A class extending itself directly", "A loop without a condition", "A variable without a type"],
    answer: 0,
    explanation: "A recursive method calls itself and needs a suitable base case."
  },
  {
    question: "Which loop is convenient for traversing an array?",
    options: ["Enhanced for loop", "switch loop", "try loop", "package loop"],
    answer: 0,
    explanation: "The enhanced for loop iterates over array elements."
  },
  {
    question: "Which exception can occur with an invalid array index?",
    options: ["IOException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "ClassCastException"],
    answer: 1,
    explanation: "An invalid array index can throw ArrayIndexOutOfBoundsException."
  },
  {
    question: "What does break do inside a switch?",
    options: ["Repeats the case", "Exits the switch", "Skips compilation", "Creates a case"],
    answer: 1,
    explanation: "break exits the switch statement."
  },
  {
    question: "Which is Java's ternary conditional operator?",
    options: ["??", ":=", "?:", "=>"],
    answer: 2,
    explanation: "The expression condition ? value1 : value2 chooses a value."
  },
  {
    question: "Which class provides sqrt() and pow()?",
    options: ["System", "Math", "Numbers", "Calculator"],
    answer: 1,
    explanation: "Math provides common mathematical methods."
  },
  {
    question: "What is the result of integer division 7 / 2?",
    options: ["3.5", "3", "4", "2"],
    answer: 1,
    explanation: "Integer division discards the fractional part."
  },
  {
    question: "What is 10 % 3?",
    options: ["0", "1", "3", "3.33"],
    answer: 1,
    explanation: "The remainder of 10 divided by 3 is 1."
  },
  {
    question: "Which keyword returns a value from a method?",
    options: ["send", "yield", "return", "break"],
    answer: 2,
    explanation: "return ends a method and may provide a value."
  },
  {
    question: "Which is not a primitive type?",
    options: ["double", "boolean", "String", "char"],
    answer: 2,
    explanation: "String is a class, not a primitive type."
  },
  {
    question: "What is the root class of Java's class hierarchy?",
    options: ["Class", "Main", "Object", "System"],
    answer: 2,
    explanation: "java.lang.Object is the root class."
  },
  {
    question: "Which annotation indicates method overriding?",
    options: ["@Inherited", "@Override", "@Super", "@Method"],
    answer: 1,
    explanation: "@Override asks the compiler to verify an override."
  },
  {
    question: "Which keyword declares a package?",
    options: ["import", "package", "namespace", "include"],
    answer: 1,
    explanation: "The package statement declares the package of a source file."
  },
  {
    question: "Which keyword is used to create a constant-style variable?",
    options: ["const", "fixed", "final", "constant"],
    answer: 2,
    explanation: "Java uses final to prevent reassignment of a variable."
  },
  {
    question: "What is the default value of an int instance field?",
    options: ["1", "-1", "0", "null"],
    answer: 2,
    explanation: "An int instance field defaults to zero."
  },
  {
    question: "What is the default value of a boolean instance field?",
    options: ["true", "false", "0", "null"],
    answer: 1,
    explanation: "A boolean instance field defaults to false."
  },
  {
    question: "Which keyword is used to return control from a method?",
    options: ["break", "return", "continue", "exit"],
    answer: 1,
    explanation: "return exits the current method."
  },
  {
    question: "Which operator means logical NOT?",
    options: ["!", "&&", "||", "%"],
    answer: 0,
    explanation: "! negates a boolean expression."
  },
  {
    question: "Which loop is best when the iteration count is known?",
    options: ["for", "try", "switch", "catch"],
    answer: 0,
    explanation: "A for loop is commonly used when iteration is controlled by a counter."
  },
  {
    question: "What is a method parameter?",
    options: ["A value returned by a method", "A variable declared in a method's parameter list", "A class name", "A package"],
    answer: 1,
    explanation: "Parameters receive values supplied when a method is called."
  },
  {
    question: "Which keyword allows a class to implement multiple interfaces?",
    options: ["extends", "implements", "super", "package"],
    answer: 1,
    explanation: "A class can implement multiple interfaces."
  },
  {
    question: "Which kind of method belongs to an object instance?",
    options: ["Static method", "Instance method", "Package statement", "Constructor call only"],
    answer: 1,
    explanation: "An instance method operates in the context of an object."
  },
  {
    question: "What is an argument in a method call?",
    options: ["A value passed to a parameter", "A return type", "A class declaration", "A package"],
    answer: 0,
    explanation: "Arguments are the values or expressions passed to a method."
  },
  {
    question: "Which type stores a 64-bit floating-point value?",
    options: ["float", "double", "int", "char"],
    answer: 1,
    explanation: "double is Java's 64-bit floating-point primitive type."
  },
  {
    question: "Which primitive type stores a 64-bit integer?",
    options: ["byte", "short", "int", "long"],
    answer: 3,
    explanation: "long is a 64-bit signed integer type."
  },
  {
    question: "Which statement is used to handle different exception types?",
    options: ["multiple catch blocks", "multiple main methods only", "multiple packages", "multiple imports"],
    answer: 0,
    explanation: "A try block can be followed by multiple catch blocks."
  },
  {
    question: "What does null indicate for an object reference?",
    options: ["An empty String", "No object reference", "The number zero", "A false boolean"],
    answer: 1,
    explanation: "null means the reference does not refer to an object."
  },
  {
    question: "Which method can compare two strings without case sensitivity?",
    options: ["equals()", "equalsIgnoreCase()", "sameText()", "compareCase()"],
    answer: 1,
    explanation: "equalsIgnoreCase() compares strings while ignoring case differences."
  },
  {
    question: "What does the new keyword do?",
    options: ["Declares a package", "Creates an object or array", "Deletes a variable", "Imports a class"],
    answer: 1,
    explanation: "new creates objects and arrays."
  },
  {
    question: "Which access modifier allows access in the same package and in subclasses under its access rules?",
    options: ["private", "protected", "public only", "final"],
    answer: 1,
    explanation: "protected provides package access and qualified subclass access."
  },
  {
    question: "Which is the correct way to declare a method that returns no value?",
    options: ["int", "null", "void", "empty"],
    answer: 2,
    explanation: "void indicates that a method returns no value."
  },
  {
    question: "Which keyword is used to create a subclass-specific implementation?",
    options: ["override", "extends", "super", "this"],
    answer: 1,
    explanation: "A subclass uses extends, then can override inherited methods."
  },
  {
    question: "What happens if an uncaught exception occurs?",
    options: ["It is ignored", "The current thread may terminate", "The program always restarts", "It becomes a comment"],
    answer: 1,
    explanation: "An uncaught exception can terminate the current thread."
  },
  {
    question: "Which class is commonly used to read input from the keyboard?",
    options: ["Scanner", "Math", "StringBuilder", "Integer"],
    answer: 0,
    explanation: "Scanner can read keyboard input from System.in."
  },
  {
    question: "Which method gets a character at a String index?",
    options: ["charAt()", "getChar()", "character()", "at()"],
    answer: 0,
    explanation: "String's charAt(index) returns the character at the specified index."
  },
  {
    question: "Which Java construct groups related classes and interfaces?",
    options: ["Loop", "Package", "Constructor", "Operator"],
    answer: 1,
    explanation: "Packages group related types and help organize code."
  },
  {
    question: "What is an overloaded constructor?",
    options: ["Several constructors with different parameter lists", "A constructor that returns int", "A constructor inherited unchanged", "A static constructor"],
    answer: 0,
    explanation: "Constructor overloading provides multiple ways to initialize an object."
  },
  {
    question: "Which keyword is used to inherit an interface?",
    options: ["implements", "extends", "super", "new"],
    answer: 1,
    explanation: "An interface can extend another interface."
  },
  {
    question: "What is the purpose of a base case in recursion?",
    options: ["To start a package", "To stop recursive calls", "To create an object", "To import a class"],
    answer: 1,
    explanation: "A base case prevents recursion from continuing indefinitely."
  },
  {
    question: "Which method converts a numeric string to an int?",
    options: ["Integer.parseInt()", "String.toInt()", "int.value()", "parse.String()"],
    answer: 0,
    explanation: "Integer.parseInt() parses a string as an integer."
  },
  {
    question: "Which keyword declares a constant-style class field shared by all instances?",
    options: ["static final", "private this", "super final", "const static"],
    answer: 0,
    explanation: "static final is commonly used for class-level constants."
  }
];

// Select 20 unique random questions from the 100-question bank.
function getRandomQuestions(bank, count) {
  const shuffled = [...bank];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Shuffle answer choices while preserving the correct answer.
function shuffleOptions(question) {
  const correctAnswer = question.options[question.answer];

  const options = question.options.map((text, index) => ({
    text,
    isCorrect: index === question.answer
  }));

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return {
    ...question,
    options: options.map(option => option.text),
    answer: options.findIndex(option => option.text === correctAnswer)
  };
}

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let checked = false;

// Keep the IDs compatible with the existing HTML.
const questionNumberEl = document.getElementById("question-number");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const quizCard = document.getElementById("quiz-card");

function startQuiz() {
  quizQuestions = getRandomQuestions(questionBank, 20).map(shuffleOptions);
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  checked = false;

  if (scoreEl) scoreEl.textContent = "0";
  if (quizCard) quizCard.style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  if (currentQuestion >= quizQuestions.length) {
    showResult();
    return;
  }

  const q = quizQuestions[currentQuestion];
  selectedOption = null;
  checked = false;

  questionNumberEl.textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

  progressEl.style.width =
    `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent =
      `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => selectOption(index, button));
    optionsEl.appendChild(button);
  });

  nextButton.textContent = "Check Answer";
  nextButton.disabled = true;
}

function selectOption(index, button) {
  if (checked) return;

  selectedOption = index;

  document.querySelectorAll("#options .option").forEach(option => {
    option.classList.remove("selected");
  });

  button.classList.add("selected");
  nextButton.disabled = false;
}

function checkAnswer() {
  const q = quizQuestions[currentQuestion];

  if (selectedOption === null || checked) return;

  checked = true;

  const optionButtons = document.querySelectorAll("#options .option");

  optionButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    }

    if (index === selectedOption && selectedOption !== q.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedOption === q.answer) {
    score++;
    feedbackEl.textContent = `Correct! ${q.explanation}`;
  } else {
    feedbackEl.textContent =
      `Incorrect. Correct answer: ${q.options[q.answer]}. ${q.explanation}`;
  }

  scoreEl.textContent = score;
  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "Show Result"
      : "Next Question";
}

function showResult() {
  questionNumberEl.textContent = "Quiz Completed";
  progressEl.style.width = "100%";
  questionEl.textContent =
    `Your final score is ${score} out of ${quizQuestions.length}.`;

  optionsEl.innerHTML = "";
  feedbackEl.textContent =
    score >= 16
      ? "Excellent work! You have a strong understanding of Java."
      : score >= 12
      ? "Good job! Review the questions you missed and try again."
      : "Keep practising Java and try another random quiz.";

  nextButton.textContent = "Restart Quiz";
  nextButton.disabled = false;
  nextButton.onclick = restartQuiz;
}

function restartQuiz() {
  nextButton.onclick = handleNextButton;
  startQuiz();
}

function handleNextButton() {
  if (currentQuestion >= quizQuestions.length) {
    restartQuiz();
    return;
  }

  if (!checked) {
    checkAnswer();
    return;
  }

  currentQuestion++;

  if (currentQuestion >= quizQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

// Connect the button once.
nextButton.onclick = handleNextButton;

// Start a fresh random quiz when the page loads.
startQuiz();
