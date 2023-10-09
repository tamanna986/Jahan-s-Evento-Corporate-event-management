

#Website Name: Jahan's EVent Management
Live Site Link:

#Features of my website:
Jahan's evento is a corporate event management company which provides services for corporate event solutiins. 

.In the services section, clicking on view details, it will take us to service details page. Which shows the details of the respective service.

.It has 3 private route, such as  service dtail, FAQ, Nenory. clicking on these route option we can got to respected page after logging in. If user is not logged in he cant see that page.

.To log in user can use both emnail password authentication and also google sign in authentication.

.After successfully login user's name, email and image will be shown on navbar beside logOut Option.

.If a user is trying to access any private route then it will redrict user to log in page and after log in user will be navigated to that page he was trying to access.



#Ans to QUestions:

1 ans: Option A : {} 
The output of this code will be an empty JavaScript object, represented by `{}`.Because,

i. `let greeting;` declares a variable named `greeting` without assigning any value to it. It's initialized as `undefined` by default.

ii. `greeting = {};` assigns an empty object `{}` to the `greeting` variable. Now, `greeting` is an object with no properties.

iii. `console.log(greeting);` logs the value of the `greeting` variable to the console, which is the empty object `{}`.

So, when we run this code, we will see an empty object `{}` printed in the console.


2.ans: Option C : "12"
The output of the code sum(1, "2"); will be "12" (a string). Because;

1. The sum function takes two parameters `a and b and returns the result of adding them together.

2. In the function call `sum(1, "2");`, you are passing 1 as the value of a and "2" (a string) as the value of b.

3. JavaScript performs type coercion when you use the "+" operator with different data types. In this case, it converts the number 1 to a string and then concatenates the two strings, resulting in "12"

So, the output is the string "12" because JavaScript treats the "+" operator differently depending on the data types of the operands, and in this case, it performs string concatenation.

3.Ans : Option A : ['🍕', '🍫', '🥑', '🍔'] , Because

You start by creating an array food with four elements.
Then, you create an object info with a property favoriteFood that is initially set to the first element of the food array, .
Next, you change the value of info.favoriteFood. This line of code does not affect the food array in any way; it only changes the value of the favoriteFood property within the info object.
Finally, you log the food array to the console, which has not been modified, so it still contains the original elements: ['🍕', '🍫', '🥑', '🍔']

4.Ans:Option D :ReferenceError , Beacuse;
sayHi function expects one argument (name), but we didn't provide any argument when calling the function with sayHi(). JavaScript tries to access the toString method of an undefined name parameter inside the template string, which causes the error.


5.Ans:Option C:3 , Because;

1. We initialize a variable count to 0.
2. We have an array num` containing [0, 1, 2, 3].
3.We use the forEac` method to iterate over each element of the `nums` array and execute the provided callback function for each element.

During the iteration:

- For num = 0, the condition if (num) evaluates to false because 0 is considered falsy in JavaScript. Therefore, count remains 0.

- For num = 1, the condition if (num) evaluates to true because 1 is truthy in JavaScript. So, count is incremented by 1`, making it 1.

- For num = 2 and num = 3, both of these values are also truthy, so the count is incremented by 1 for each of them.

After the forEach loop finishes iterating over the nums array, the count variable holds the value 3. Therefore, when Welog count to the console, it prints 3.
























