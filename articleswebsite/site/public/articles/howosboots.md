
* * *

How AlbaOS Boots
===============================================

### 16th July 2025, [Cameron](https://camhdeveloper.netlify.app/)



# Introduction
AlbaOS is a small 32 bit kernel / OS but before writing code for the kernel I had to make sure the kernel can be loaded, this article discusses that process. For this article you’ll need to know what a kernel is: a kernel is the software that acts as a link between the cold metallic hardware and the software you want to run on your computer. In order for it to do that it has to do many thing which are way out of scope for this article so ill leave that there.

# General Overview

## The BIOS
First part of booting a computer is the BIOS, a bit of firmware that lives on the computers motherboard. A [POST Test](https://en.wikipedia.org/wiki/Power-on_self-test) is then done on the hardware.  The firmware then takes the relevant data from the BIOS such as the bootloader, the instruction pointer (IP) is the put the the start of the copied firmware in RAM. The copied firmware hen tells the CPU to talk to the appropriate hard drive to get the associated master boot record (MBR). The MBR will be stored in the first ~2MB of sectors on the disc. The MBR is copied into RAM and will jump to it.

## The Bootloader
The bootloader (in this case is [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) ) is now executed,the bootloader now can access file systems and partitions. The bootloader will access a .cfg file which contains all menu entry's about which partition has which OS on it and it is displayed on the screen. When selected, the menu entry will point to the partition in which that kernel is stored , the kernel.bin file is then loaded into RAM and lastly the CPU will jump into the kernel in RAM. Now the kernel is loaded and doing its own thing.

# AlbaOS Specifics
As stated earlier the bootloader is GRUB, I chose this as it was really easy to work with and I was already familiar with it in a non-development setting. Now for the BIOS as it has nothing to do with the kernel as is a magnitude away in the process of booting doesn’t matter, it will depend on your hardware / VM software but at the end of it they all load the GRUB bootloader.

As listed earlier the bootloader points to the kernel, we will need to do that ourselves. This is done in the [/src/loader.s](https://github.com/CamH04/AlbaOS/blob/master/src/loader.s) file. This acts as a stub of code for our bootloader to look at to get is bearings point the kernel correctly.

This is the primary bit of ASM that has to do with loading. .bss sets up a stack for the kernel, stop says if the kernel at any point returns the CPU will stay halted forever. .multiboot is setup for GRUB to be able to load our kernel.

```
loader:
    mov $kernel_stack, %esp
    call callConstructors
    push %eax
    push %ebx
    call kernelMain
```
Short explanation of the code:
+ sets up stack pointer.
+ calls the C++ static constructors.
+ pushes multiboot information so that the kernel can consume them.
+ runs the kernel

# Summary

The process for AlbaOS follows a process nearly identical process as any GRUB compatible system (such as most Linux distros). While doing our own asm stub to point to our kernel.
