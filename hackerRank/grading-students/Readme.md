HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

- If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
- If the value of  is less than 38, no rounding occurs as the result will still be a failing grade.

For example, grade = 84 will be rounded to 85 but  will not be rounded because the rounding would result in a number that is less than 40.

Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

## Function Description

Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

- grades: an array of integers representing grades before rounding

## Input Format

The first line contains a single integer, , the number of students.
Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.


## Output Format

For each , print the rounded grade on a new line.
## Sample Input 
```
4
73
67
38
33
```
## Sample Output
```
75
67
40
33
```
## Explanation 

Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75-73 < 3, the student's grade is rounded to 75.
