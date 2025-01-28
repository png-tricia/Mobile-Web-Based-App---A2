## SYST24444 Mobile Web-Based App - Assignment 2
Program: **Computer Programming @ Sheridan College** <br>
Note: The following assignment was completed during Semester 3 (2024) <br>

## The Task: 
Create a webpage that displays a **My Book List** tab and **Campus Info** tab. 

## The Details: 
Modify/create the following files: <br>
<ul>
  <li>update .json file to include personal/Sheridan information where indicated AND update the myBooks array with your own data</li>
  <li>create a .ts file that includes interfaces for personal information, books array and campus data array</li>
</ul>

Include the following: <br>
<ul>
  <li>import ALL interfaces and JSON file in app.component.ts</li>
  <li>header and footer component to be included in app.component.html</li>
  <li>update global style sheet to format both components</li>
  <li>use mat-tab-group layout/structure</li>
  <li>books and campus component</li>
  <li>mat-select dropdown box in the campus info tab: upon selecting campus the address is shown</li>
</ul>

## The Final Product: 
![screencapture-localhost-4200-2025-01-28-12_50_12](https://github.com/user-attachments/assets/3c0d3379-0d6d-4db5-9f7e-297a35352f49)
![screencapture-localhost-4200-2025-01-28-12_50_24](https://github.com/user-attachments/assets/59004432-b1f1-4a87-a87a-2a1bec837b75)

## Thoughts/Comments: 
Understanding how data is being passed around was very confusing. Like if you need the app.component.xxx to access a specific component folder (here we had header, footer, books and campus) then you need to make imports, declare variables, know the type of data binding going to be used, etc. <br> Main takeaways - @Input(), Interfaces, JSON 
