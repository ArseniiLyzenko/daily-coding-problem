# daily-coding-problem
*My solutions(+tests) for [daily coding problems](https://dailycodingproblem.com/)*

[#1](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%231/index.js), 
[#2](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%232/index.js), 
[#3](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%233/index.js), 
[#4](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%234/index.js), 
[#5](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%235/index.js), 
[#7](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%237/index.js), 
[#8](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%238/index.js), 
[#10](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%2310/index.js), 

### [#1](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%231/index.js)
> Given a list of numbers and a number k,  
> return whether any two numbers from the list add up to k.  
>
> For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.  
>
> Bonus: Can you do this in one pass?

### [#2](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%232/index.js)
> Given an array of integers, return a new array such that each element  
> at index i of the new array is the product of all the numbers in the original  
> array except the one at i.
> 
> For example, if our input was [1, 2, 3, 4, 5], the expected output would be  
> [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output  
> would be [2, 3, 6].
> 
>  Follow-up: what if you can't use division?

### [#3](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%233/index.js)
> Given the root to a binary tree, implement serialize(root),  
> which serializes the tree into a string, and deserialize(s),  
> which deserializes the string back into the tree.  
>
> For example, given the following Node class  
> ```
> class Node:  
>   def __init__(self, val, left=None, right=None):  
>        self.val = val  
>        self.left = left  
>        self.right = right  
> ```
> The following test should pass:
> ```
> node = Node('root', Node('left', Node('left.left')), Node('right'))  
> assert deserialize(serialize(node)).left.left.val == 'left.left'
> ```

### [#4](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%234/index.js)
> Given an array of integers, find the first missing positive integer in  
> linear time and constant space. In other words, find the lowest positive  
> integer that does not exist in the array. The array can contain duplicates  
> and negative numbers as well.  
>
> For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0]  
> should give 3.  
>
> You can modify the input array in-place.  

### [#5](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%235/index.js)
> cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first  
> and last element of that pair. For example, car(cons(3, 4)) returns 3, and  
> cdr(cons(3, 4)) returns 4.  
>
> Given this implementation of cons:  
>```
> def cons(a, b):
>   def pair(f):
>     return f(a, b)
>   return pair
>```
> Implement car and cdr.

### [#7](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%237/index.js)
> Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
> 
> For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
> 
> You can assume that the messages are decodable. For example, '001' is not allowed.

### [#8](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%238/index.js)  
> A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.  
> 
> Given the root to a binary tree, count the number of unival subtrees.
> 
> For example, the following tree has 5 unival subtrees:
> 
> ![Tree](https://user-images.githubusercontent.com/8843033/57275634-1e15c480-706d-11e9-9fee-4b862da48bcf.png)

### [#10](https://github.com/PticaGovorun/daily-coding-problem/blob/master/%2310/index.js)  
> Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
