* * *

I dislike Electron and React Native and ill cry about it
==============================================

### 17th January 2025, [Cameron](https://candid-quokka-da2c12.netlify.app/)


To preface this i am just a moron on the internet, if you feel like im ignorant in places, i am , please just let me know so i can learn :)

What ever happened to a simple app, one which you just open and doesn’t ram-**** your computer into oblivion by taking up all its memory? I can’t think of many apps these days which just work cleanly. They all have a caveat these days, whether it’s that they’re slow or don’t do all that they should because the programmers only know HTML, CSS, and JS but were tasked with building a desktop app not using web development languages.

Now, before I get hunted by half of the known developers on Earth, I will say: JS has its uses. It works as a web development language sometimes. (I don’t like programming in it personally due to its near-nonexistent ability to make sense.) However, just because it works on the web doesn’t mean we should ham-fist it into desktop apps. Web and desktop are fundamentally different tech stacks, so I personally believe we should treat them as such.
My primary reason for this is due to performance—or lack thereof. I like it when my applications don’t try to blow up my desktop and they run at least half decently, something which I personally have found non-existent in a lot of modern apps.

The examples I’m going off of for why ham-fisting web apps into desktop apps is problematic are primarily Spotify, Discord, and Teams (as they were the first ones my friends and I thought of). Spotify, from personal experience, is slow and clunky (this will be a common theme). Discord is buggy as all hell as well as being slow and clunky. In a way, I can excuse it due to the complexity of the operation they are doing with the app, but I think that’s more of a reason to do it with a more stable and performant tech stack instead of a glorified web browser.

Lastly, Teams. I feel like I shouldn’t have to speak on why Teams is a blight and a general scourge upon this planet that should be cleansed. If you have used it, I hope you understand my immense hatred toward it. If you haven’t, consider yourself lucky. It can be summed up as such: imagine being caught in quicksand while being forced to solve a particularly difficult Sudoku puzzle or you’ll get fired.
The main frameworks that are used—and for me, have caused a lot of issues—have been Electron and React Native, as they are the ones used by the above examples. I believe they are not the most egregious examples apart from Teams (that can rot in hell). Electron is known for having problems with performance, primarily due to it being bundled with the resource hog that is Chromium. (Electronjs.org, 2023). React Native has its own issues because when compiling a React Native app, the JS code has to be parsed to communicate with native code, causing immense load times for even relatively menial tasks.

Reference:
Electronjs.org. (2023). Chromium Development | Electron. [Online] Available at: https://www.electronjs.org/docs/latest/development/chromium-development [Accessed 8 Jan. 2025].

P.S thanks Robin for giving me the idea to make this
