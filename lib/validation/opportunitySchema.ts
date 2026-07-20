import { z } from "zod";

export const jobTypes = [
  "Full-time",
  "Part-time",
  "Internship",
  "Contract",
] as const;

export const experienceLevels = [
  "Entry",
  "Junior",
  "Mid",
  "Senior",
] as const;

export const categories = [
 "Administration",
"Marketing",
"Writing",
"Human Resources",
"Engineering",
"Business",
"Sales",
"Research",
"Language",
"Media",
"Logistics"
] as const;

export const opportunitySchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title cannot exceed 100 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required.")
    .max(100, "Company name cannot exceed 100 characters."),

  location: z
    .string()
    .trim()
    .min(2, "Location is required."),

  category: z.enum(categories, {
    error: "Please select a category.",
  }),

  type: z.enum(jobTypes, {
    error: "Please select a job type.",
  }),

  experience: z.enum(experienceLevels, {
    error: "Please select an experience level.",
  }),

  salary: z
    .string()
    .trim()
    .min(1, "Salary is required."),

  remote: z.boolean(),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters.")
    .max(1000, "Description cannot exceed 1000 characters."),

  skills: z
    .string()
    .trim()
    .min(2, "Please enter at least one skill.")
    .refine(
      (value) =>
        value
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean).length > 0,
      {
        message: "Enter at least one skill.",
      }
    ),
});

export type OpportunityFormData = z.infer<typeof opportunitySchema>;