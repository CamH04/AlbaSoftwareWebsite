
* * *

APM vs APCI : What Is The Difference
===============================================

### 14th Feb 2025, [Cameron](https://camhdeveloper.netlify.app/)


## Intro To APM (Advanced Power Management)

The APM standard was developed by Microsoft and Intel in 1992 that allows the system to communicare with the BIOS in order to manage the state of power of the machine. The 3 states of power described by the APM standard are; Standby , Suspend and Off.

As this standard was developed in '92 it is widley considered to be the first power managment system within computers which leads to it having many very fundamental flaws such as its use of BIOS inturrupts. BIOS inturrupts are notoriously buggy leading to a demonstrably long list of [broken BIOS's](https://lxr.linux.no/#linux+v6.7.1/arch/x86/kernel/apm_32.c#L2055). BIOS inturrupts are very BIOS dependent and due to the nature of such an ancient standard, the standard is either broken or nigh on impractacle on modern BIOS's. As well as this, symmetric multiprocessing (a method of handling multiple CPU's in a system) does not play well with the APM this is because the APM standard was originally designed for single-CPU systems, where the CPU is the central unit that manages power (making it much harder to ensure consistency and prevent one processor from entering a power-saving state while the other is still busy). However, the APM standard is much easier to implement into an OS than its more cool, more modern, less broken brother : ACPI (which we will get onto later).


## Implementing APM In A 32 Bit System

AlbaOS is a 32 bit, x86 system and will be implementing the APM standard in such a way that it is compatible with such a system. To summarise a high level view would go as follows: Check if the BIOS is compatible with APM, Connect and init the APM interface and then enables power management on the APM interface. When a power off function is called it will send a power request to the BIOS through BIOS interrupt 0x15. This then can be used to other APM shenanigans through sub-functions in the AX register (such as 0x5307 allowing you to set the power state or 0x530D allowing you to get the APM version).

## APM Code Explanation

[My implementation of the APM standard in AlbaOS](https://github.com/CamH04/AlbaOS/blob/34fc37e3b9f30dfd2b9fe131f295f3114ed33c2b/src/hardwarecommunication/power.cpp#L18)

The explained code was written in Jan 31 2025 (commit 237cbb5) so may be outdated or broken.
The implementation of APM is quite small only streaching across two files [power.cpp](https://github.com/CamH04/AlbaOS/blob/master/src/hardwarecommunication/power.cpp) and [apm_bios_call.s](https://github.com/CamH04/AlbaOS/blob/master/src/hardwarecommunication/apm_bios_call.s). This could have easily been completed in just the one c++ file however i prefer to split asm into seperate files for debugging and maintaining purposes.

The ASM (.s) file is just passing 4 16 bit flags to the respective registers which then returns the result as well as the flags. This is all done in this way in order to be able to call it in the C++ file as an external function:
```
extern "C" {
    uint16_t apm_bios_call(uint16_t ax, uint16_t bx, uint16_t cx, uint16_t dx);
}
```

In the C++ file we start by doing a APM installation check (```apm_bios_call(0x5300) ```) and if supported we then connect to the interface(```apm_bios_call(0x5303)```). We then enable power management(```apm_bios_call(0x5308)```) to finish the init stages of APM.

Once all that is done we can the call power off which works as follows
```
uint16_t ax = 0x5307;
uint16_t bx = 0x0001;   // All devices
uint16_t cx = 0x0003;   // Power state = OFF

// make bios call
asm volatile(
    "int $0x15\n\t"
    "setc %0\n\t"
    : "=r"(APM_error)
    : "a"(ax), "b"(bx), "c"(cx)
    : "memory", "cc"
);
```

## Some good APM links
+ [Microsoft APM 1.2 Specs 1996](https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/apmv12.rtf)
+ [Ralf Brown's Interrupt List (RBIL) APM BIOS Interrupt list link 1](
https://www.ctyme.com/intr/cat-031.htm)
+ [Ralf Brown's Interrupt List (RBIL) APM BIOS Interrupt list link 2](https://www.ctyme.com/intr/int-15.htm)



## Intro To ACPI (Advanced Configuration and Power Interface)

The ACPI standard was birthed in 1996 as a standardised abstraction for an operating system to manage power states instead of having to use direct BIOS calls. ACPI replaces the APM spec as it allows for more dynamic and intelligent power management schemes when compared to APM. This all stems from ACPI handing control to the OS.

The OS can manage separate components power state, this is done by having a set of ACPI tables in which the hardware is ID’d as well as its specifications being inserted into these tables, these are the tables the OS interacts with to understand in what way to manage power states for the hardware. There are many sets of tables some of them being optional, I will only cover the ones listed as required by arm64 systems in the linux kernel as of Oct 2020 [Link Here](https://web.archive.org/web/20201020091509/https://www.kernel.org/doc/html/latest/arm64/acpi_object_usage.html).

+ DSDT (Differentiated System Description Table): Contains primary component definitions and compatible power management features

+ FADT (Fixed ACPI Description Table): Provides gives static component info and pointers to other ACPI tables

+ GTDT (Generic Timer Description Table): Provides OS info about generic timers, eg interrupt timer

+ MADT (Multiple APIC Description Table): Provides info about interrupt controllers

+ MCFG (Memory-mapped ConFiGuration space): Provides PCI/PCIe information

+ RSDP (Root System Description Pointer): Pointer to RSDT table

+ SPCR (Serial Port Console Redirection table): Gives info on serial port configuration

+ XSDT (eXtended System Description Table): More physical pointers of headers to other description tables.


The tables are encoded into a language called AML (ACPI Machine Language) of which the OS has to decipher which then allows (when commands are interpreted) for the OS to be able to manage power directly.

## Implementing ACPI In A 32 Bit System
In its most simplistic form to turn a computer off using ACPI all you need is the PM1a_CNT, SLP_TYPa and SLP_EN values. We then perform an equivalent to outw(PM1a_CNT, SLP_TYPa | SLP_EN ); 1st parameter is just parsing the  PM1a_CNT value and the 2nd parameter is an  OR operation of the SLP_TYPa and  SLP_EN values which combines the two values into a single bitmask.

### PM1a_CNT

We start by getting the FACP pointer, this is stored at offset 36 + 4 * n (where n is the signature “FACP” ) of the RSDT
The  PM1a_CNT is found at the 64th offset of the FACP table.

### SLP_TYPa and  SLP_EN

If we continue down from the PM1a_CNT we will find that, instead of going to offset 64, if we go to offset 68 we can find the SLP_TYPx from bits 10-12 and the SLP_EN can be found at bit 13.

The DSDT pointer is held at offset 40 of the RDST. We need this because the SLP_TYPa is in the \_S5 AML encoded object which is held within the DSDT.

### Exporting the \_S5 object from the DSDT
As we saw erlier we need to find the SLP_TYPa value, this is found within the \_S5
object inside the DSDT. The DSDT is encoded into AML of which im assuming you have not already written an interpreter for, for your OS. The way to do it without an interpreter is simple as all we have to do is a memory copy of the object, this can be done as /_(int) objects are only defined once within the DSDT. Dumping the content of the memory copy will yield the sacred  SLP_TYPa as seen in [this](https://forum.osdev.org/viewtopic.php?t=16990) bytecode dump :
```
 \_S5 object Dump

| Field   | Hex | ASCII |
| NameOP  | 08  |       |
| `\`     | 5A  | Z     |
| `_`     | 5F  | _     |
| `S`     | 53  | S     |
| `5`     | 35  | 5     |
| `_`     | 5F  | _     |


Package Struc Dump

| Field        | Hex    | Details                          |
|--------------|--------|----------------------------------|
| PackageOP    | 12     |                                  |
| PkgLength    | 0A     |                                  |
| NumElements  | 04     | Number of elements in package    |
| SLP_TYPa     | 0A 05  | byteprefix + value (0x05)        |
| SLP_TYPb     | 0A 05  | byteprefix + value (0x05)        |
| Reserved     | 0A 05  | byteprefix + reserved            |
| Reserved     | 0A 05  | byteprefix + reserved            |
```

Note: if PM1b_CNT is != 0 you need to repeat it with SLP_TYPb


However if all of this is a bit too much you could in theory do outw( 0xB004, 0x0 | 0x2000 );. Its supposed to work on QEMU and bochs but I haven't been able to get it to work in my version of QEMU.


## Good ACPI Links
+ [ACPI OSDevWiki](https://wiki.osdev.org/ACPI)
+ [Amazing Poweroff Code Breakdown](https://forum.osdev.org/viewtopic.php?t=16990)


## Conclusion
APM is a very quick to implement solution to power management but it is an older standard (1992) which fails to hold up to the newer ACPI (1996 for first iteration) due to its reliance of direct BIOS interrupts, which is particularly archaic in comparison to ACPI as ACPI allows for power management to be handed over to the OS rather than the BIOS allowing for a much more intelligent, dynamic and scalable implementation of power management. In this case power management doesn't just mean ON or OFF, I can refer to how much power to provide to pieces of hardware interacting with the OS as well.
