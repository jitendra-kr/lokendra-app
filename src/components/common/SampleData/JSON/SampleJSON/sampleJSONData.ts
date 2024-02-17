import { JSONExamples, SampleData } from "./sampleJSON.types";

export const FormattedJSON: SampleData[] = [
  {
    value: "../sample-data/json/64KB.json",
    key: "64KB.json",
  },
  {
    value: "../sample-data/json/128KB.json",
    key: "128KB.json",
  },
  {
    value: "../sample-data/json/256KB.json",
    key: "256KB.json",
  },
  {
    value: "../sample-data/json/512KB.json",
    key: "512KB.json",
  },
  {
    value: "../sample-data/json/1MB.json",
    key: "1MB.json",
  },
  {
    value: "../sample-data/json/5MB.json",
    key: "5MB.json",
  },
];
export const MinifiedJSON: SampleData[] = [
  {
    value: "../sample-data/json/64KB-min.json",
    key: "64KB.json",
  },
  {
    value: "../sample-data/json/128KB-min.json",
    key: "128KB.json",
  },
  {
    value: "../sample-data/json/256KB-min.json",
    key: "256KB.json",
  },
  {
    value: "../sample-data/json/512KB-min.json",
    key: "512KB.json",
  },
  {
    value: "../sample-data/json/1MB-min.json",
    key: "1MB.json",
  },
  {
    value: "../sample-data/json/5MB-min.json",
    key: "5MB.json",
  },
];

export const InvalidJSON: SampleData[] = [
  {
    value: "../sample-data/json/missing-colon.json",
    key: "missing-colon.json",
  },
];

export const UserJSON: JSONExamples = {
  heading: "Example of a Simple JSON Object Representing User Information",
  data: {
    user_id: "123456",
    username: "example_user",
    first_name: "John",
    last_name: "Doe",
    gender: "m",
    email: "johndoe@fireboxtools.com",
    age: 30,
    is_active: true,
    registration_date: "2023-01-15",
    address: {
      street: "123 Main Street",
      city: "Exampleville",
      state: "CA",
      postal_code: "12345",
      country: "USA",
    },
    interests: ["reading", "hiking", "cooking", "swimming", "music"],
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        push: false,
      },
    },
  },
};

export const ProductJSON: JSONExamples = {
  heading: "Example of a Simple JSON Object Representing Product Information",
  data: {
    product_id: "SKU12345",
    name: "Example Product",
    description: "This is an example product.",
    category: "Electronics",
    price: 199.99,
    stock_quantity: 50,
    manufacturer: "TechCo",
    release_date: "2022-05-10",
    is_available: true,
    ratings: {
      average: 4.5,
      total: 100,
    },
    reviews: [
      {
        user: "user123",
        rating: 5,
        review_text: "Great product, highly recommended!",
      },
      {
        user: "user456",
        rating: 4,
        review_text: "Good value for the price.",
      },
      {
        user: "user450",
        rating: 4,
        review_text: "Good value for the price.",
      },
    ],
  },
};

export const DaysJSON: JSONExamples = {
  heading: "Example of a JSON Array Representing Days of The Week",
  data: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
};

export const monthsJSON: JSONExamples = {
  heading: "Example of a JSON Array Representing Months of the Year",
  data: {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
};

export const employeeJSON: JSONExamples = {
  heading: "Example of a Json Array Representing Employee Information",
  data: {
    employees: [
      {
        employee_id: "E12345",
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice.johnson@example.com",
        position: "Software Engineer",
        department: "Engineering",
        salary: 85000,
        hire_date: "2020-03-15",
        skills: ["Java", "Python", "JavaScript"],
        projects: ["E-commerce Platform", "Mobile App Development"],
        manager: "John Smith",
      },
      {
        employee_id: "E67890",
        first_name: "Bob",
        last_name: "Smith",
        email: "bob.smith@example.com",
        position: "Marketing Specialist",
        department: "Marketing",
        salary: 60000,
        hire_date: "2019-07-10",
        skills: ["Market Research", "Social Media Management"],
        campaigns: ["Product Launch", "Seasonal Promotions"],
        manager: "Sarah Johnson",
        responsibilities: ["Talent Acquisition"],
      },
    ],
  },
};

export const employersJSON: JSONExamples = {
  heading: "Example With Two Employer Objects in a JSON Array",
  data: {
    employers: [
      {
        employer_id: "EMP5678",
        company_name: "TechCo Enterprises",
        industry: "Information Technology",
        location: "Silicon Valley, CA",
        contact_email: "contact@techco.com",
        website: "https://www.techco.com",
        employees_count: 500,
        founded_year: 2005,
        is_hiring: true,
        departments: ["Engineering", "Marketing", "Human Resources", "Finance"],
        key_products: [
          "Software Solutions",
          "Hardware Devices",
          "Digital Services",
        ],
      },
      {
        employer_id: "EMP1234",
        company_name: "Global Innovators",
        industry: "Research and Development",
        location: "New York, NY",
        contact_email: "info@globalinnovators.com",
        website: "https://www.globalinnovators.com",
        employees_count: 300,
        founded_year: 2010,
        is_hiring: false,
        departments: ["Research", "Engineering", "Marketing"],
        key_products: ["Cutting-edge Technologies", "Scientific Discoveries"],
      },
    ],
  },
};

export const blogPostCommentJSON: JSONExamples = {
  heading: "Sample JSON data representing comments on a blog post",
  data: {
    blog_post_id: 69,
    comments: [
      {
        comment_id: 1,
        user_id: 456,
        username: "User1",
        comment_text:
          "I just wanted to thank you for giving sample JSON data on your website.",
        timestamp: "2023-09-04T10:30:00Z",
      },
      {
        comment_id: 2,
        user_id: 789,
        username: "User2",
        comment_text:
          "I appreciate your efforts in choosing and maintaining this data collection.",
        timestamp: "2023-09-04T11:15:00Z",
      },
    ],
  },
};
