* * *

THE FNV-1A Hash In A Command Line System In The Case Of AlbaOS
==============================================================

### 27th April 2024, [Cameron](https://candid-quokka-da2c12.netlify.app/)








In order to add a command to the CLI (Command Line Interface) we have to hash it into the command line through its init function in the cli.cpp file // ( void CommandLine::hash\_cli\_init() ) // by calling the // hash\_add() // function where the first paramater is the string in which we will call the funciton within the cli at runtime and the second paramater is the function we wish to assign to the string, it would look like somthing as follows. // this->hash\_add("help", help); // where we have a funciton somewhere else in the file called // void help() //.

In the hash\_add function we call another function: hash(char\* cmd) which will call the function we want to discuss here, the FNV-1A function where the paramater for the hash function is passed down to the FNV-1A function as well. This hashing function is a standered FNV-1A implementation in which the hash offset is 0x811c9dc5 and the hash prime is 0x01000193.

We start by initalising the hash offset into a 32 bit unsigned integer and for each character in the string initalised as a paramater to the FNV-1A function we perform a bitwise XOR function to the hash offset and the character, saving it into the offset varible. As well as this we then multiply that value we just saved into the offset varible by the hash prime and then save it back into the offset varible. After the entire string has been exausted we then return that value modulus by 2048 and then add 1024. We do this insted of just returning th value so we can save it on to an avalible sector on the disk. Now that our FNV-1A is done we then come back to the hash(char\* cmd) function where we use the FNV-1A we just calculated and return out of this function, the value of the FNV-1A function shifted to the right 16 bits put through another XOR function with the value of the FNV-1A function bitwise AND 0xffff; After all of this is done our hash is complete for our cli command.

The FNV-1A hash is a variation of the FNV-1 hash in which the order we multiply and perform the XOR function is switched. I chose the FNV-1A over the FNV-1 as it performs much better on all lowercase strings (which is whats used in the case of AlbaOS) with the FNV-1A performing at 152ns per hash while the FNV-1 only performs at 184ns per hash. \[1\] however the FNV-1A does have more collisions (4) than the FNV-1 (1) however i have implemented a basic Linear probing collision handaler to combat this issue. I would have implemeted a murmur hash however this hash has 6 collisions at 145ns per hash so all time gained from the quick has would have been quickly offset by the larger number of collisions.

I also chose a FNV-1A hash as it is a relatively simple hash to perform with not many lines of code going into it to make it effective. This fact is especially important in a low level application such as an OS as it is communicating with bare hardware and we want to use as little computational resources as possible so we can use them somewhere else and so my OS can be as fast and effective as possible.






Sources:

[\[1\]](https://softwareengineering.stackexchange.com/questions/49550/which-hashing-algorithm-is-best-for-uniqueness-and-speed)
