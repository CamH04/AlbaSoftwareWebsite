
* * *

How To Make Your Own Command For The AlbaOS ACL
===============================================

### 22nd June 2024, [Cameron](https://candid-quokka-da2c12.netlify.app/)








So, you want to make your own commands for the ACL? Well, you’ve come to the right place! AlbaOs is a mostly command line-based OS and therefore as an open source OS I have decided and important article would be to show you how to make your own commands for AlbaOS.

To start if you navigate to the CLI source file at \[ src/cli.cpp \] you will see the includes, namespaces , forward declarations and declarations of some functions that exist in \[ kernel.cpp \]. After all the declarations, the fun begins. This is where you can implement a function with the desired functionality of the command you want to make.

This function must contain the parameters (char\* args, CommandLine\* cli) if this is the function you wish to interact with when the command is called, this sort of acts like a main function for the command (horrible description, im sorry). These parameters contain a pointer to the argument string and a pointer to the CLI.

For example, I want to make a command called “welcome” that then prints the line “Welcome to AlbaOs” I would make a function that goes as such:

void welcomecommand(char\* args, CommandLine\* cli) { printf(“Welcome To AlbaOS\\n” );}

We have laid out the functionality, now what?

We need to hash the command to the hash table that the CLI uses to look up commands, we use a FNV-1A hash (for further reading I have other articles on this subject)

To do this go to the void CommandLine::hash\_cli\_init() function. We will the add our command to the hash table by adding the line:

this->hash\_add("name",function);

for the example of the welcome command the hash add will look like this:

this->hash\_add("welcome",welcomecommand);

This will make it so that if you type welcome into the command line the function is called.



Thank you for reading 0v0
