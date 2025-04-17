* * *

APM vs APCI : What Is The Difference
===============================================

### 14th Feb 2025, [Cameron](https://camhdeveloper.netlify.app/)


## Intro To APM (Advanced Power Management)

The APM standard was developed by Microsoft and Intel in 1992 that allows the system to communicare with the BIOS in order to manage the state of power of the machine. The 3 states of power described by the APM standard are; Standby , Suspend and Off.

As this standard was developed in '92 it is widley considered to be the first power managment system within computers which leads to it having many very fundamental flaws such as its use of BIOS inturrupts. BIOS inturrupts are notoriously buggy leading to a demonstrably long list of [broken BIOS's](https://lxr.linux.no/#linux+v6.7.1/arch/x86/kernel/apm_32.c#L2055). BIOS inturrupts are very BIOS dependent and due to the nature of such an ancient standard, the standard is either broken or nigh on impractacle on modern BIOS's. As well as this, symmetric multiprocessing (a method of handling multiple CPU's in a system) does not play well with the APM this is because the APM standard was originally designed for single-CPU systems, where the CPU is the central unit that manages power (making it much harder to ensure consistency and prevent one processor from entering a power-saving state while the other is still busy). However, the APM standard is much easier to implement into an OS than its more cool, more modern, less broken brother : ACPI (which we will get onto later).


## Implementing APM In A 32 Bit System

AlbaOS is a 32 bit, x86 system and will be implementing the APM standard in such a way that it is compatible with such a system. To summarise a high level view would go as follows: Check if the BIOS is compatible with APM, Connect and init the APM interface and then enables power management on the APM interface. When a power off function is called it will send a power request to the BIOS through BIOS interrupt 0x15. This then can be used to other APM shenanigans through subfuncitons in the AX register.

## Code Explanation

[My implementation of the APM standard in AlbaOS](https://github.com/CamH04/AlbaOS/blob/34fc37e3b9f30dfd2b9fe131f295f3114ed33c2b/src/hardwarecommunication/power.cpp#L18)
