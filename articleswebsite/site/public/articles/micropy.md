* * *

My friend doesnt like MicroPy, this is his rant
==============================================

### 13th Feb 2025, [Dan](https://github.com/Danielandersoon)


Dealing with microPys’ ****:
Despite all these advantages, MicroPython is a version of Python that is built with the express purpose of running on a microprocessor. I can't decide what part of this decision is more infuriating, the hamfisted, shoehorning of a high-level language (more suited to scripting than embedded programming) or the fact that we are running inefficient, interpreted code on a compute device which is already severely resource-constrained, rendering real-time responses nigh impossible. In fact, I think I’d have an easier time porting DooM to my stuffed teddy-bear.
Python also lacks a fundamental element of programming which makes C/C++ a perfect fit for embedded systems development: manual memory management. The options for memory management are pitiful, so much so that they simply do not exist. Now, aside from straining the already limited resources—typically kilobytes of memory where every byte matters—automatic garbage collection leads to massive uncertainty in any code being run in systems where determinism is mandatory. In real-time systems, automatic garbage collection is a guaranteed recipe for disaster by pausing an essential process which, whenever the whim takes it, could be better used for a counter. It would be completely superfluous but wouldn't baffle me to the point of quiet complacency. This unpredictable nature is antithetical to what embedded programming should be as it removes precision where a matter of microvolts or milliseconds could fundamentally change the device's understanding of the world around it.
To go along with the abstractions around memory management, Python uses a dynamic typing system—another form of abstraction. By doing this, it once again takes control away from the developer, introducing yet another point of uncertainty in what seems to be a move designed specifically to frustrate me.

**** the rest of Python too:
Who the hell decided that programming should have whitespace syntax!? And why stop there? I can respect Edwin Brady and Chris Morris, they looked at whitespace in code and, after what I can only presume was a night of heavy drinking, decided to write a language comprised of entirely whitespace which above all else is fantastically funny. By comparison, Python is depressingly lackluster, ending up as a frustrating language that is just hard enough to read that I’m upset but can’t act on it in any way without feeling like an overly emotive cat, fleeing the scene at the sight of a lowly cucumber.
On top of issues with the code itself, MicroPython has a significant overhead. This turns what could be a lean, mean embedded machine into a bloated, sluggish device hobbling along at a fraction of the speed, stability, and efficiency of a well-written C program—it's rather like trying to run a marathon while holding your fridge, and your neighbor’s fridge, and quite possibly your neighbor.

The final word on the matter:
Sure, I’ll concede that MicroPython has its niche—quick prototyping, basic educational tools, maybe blinking an LED to impress someone who’s never seen an LED blink before. But in any real-world embedded application? Absolutely not. Frankly, if the garbage collector was doing its job, it would have removed it from my memory long ago.
